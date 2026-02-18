// Добавь AuthService в arena.ts

import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import {
  ARENA_MODELS,
  DEMO_RESPONSES,
  PROMPT_SUGGESTIONS,
  type ArenaModel,
  type ArenaResult,
} from './arena.models';

@Component({
  selector: 'app-arena',
  imports: [FormsModule, NgStyle],
  templateUrl: './arena.html',
  styleUrl: './arena.scss',
})
export class ArenaComponent {

  readonly allModels: ArenaModel[] = ARENA_MODELS;
  readonly suggestions: string[]   = PROMPT_SUGGESTIONS;

  selectedIds = signal<string[]>(['gpt4o', 'claude35']);
  prompt      = signal('');
  results     = signal<ArenaResult[]>([]);
  loading     = signal(false);
  ran         = signal(false);
  authError   = signal(false);

  selectedCount = computed(() => this.selectedIds().length);
  totalVotes    = computed(() =>
    this.results().reduce((sum, r) => sum + r.votes, 0)
  );
  sortedResults = computed(() =>
    [...this.results()].sort((a, b) => b.votes - a.votes)
  );

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  toggleModel(id: string): void {
    const current = this.selectedIds();
    if (current.includes(id)) {
      if (current.length > 1) {
        this.selectedIds.set(current.filter(m => m !== id));
      }
    } else {
      if (current.length < 4) {
        this.selectedIds.set([...current, id]);
      }
    }
  }

  isSelected(id: string): boolean {
    return this.selectedIds().includes(id);
  }

  runArena(): void {
    // Проверяем авторизацию
    if (!this.auth.isLoggedIn()) {
      this.authError.set(true);
      return;
    }

    if (!this.prompt().trim()) return;

    this.authError.set(false);
    this.loading.set(true);
    this.ran.set(false);
    this.results.set([]);

    setTimeout(() => {
      const res: ArenaResult[] = this.selectedIds().map(id => ({
        modelId: id,
        text:    DEMO_RESPONSES[id] ?? 'Модель обрабатывает запрос...',
        votes:   Math.floor(Math.random() * 50) + 10,
        liked:   null,
      }));
      this.results.set(res);
      this.loading.set(false);
      this.ran.set(true);
    }, 2000);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  vote(index: number, value: boolean): void {
    this.results.update(prev =>
      prev.map((r, i) => {
        if (i !== index) return r;
        if (r.liked === value) return { ...r, liked: null, votes: r.votes - 1 };
        const delta = r.liked !== null ? (value ? 2 : -2) : (value ? 1 : -1);
        return { ...r, liked: value, votes: r.votes + delta };
      })
    );
  }

  copyText(text: string): void {
    navigator.clipboard.writeText(text).catch(() => {});
  }

  setPrompt(text: string): void {
    this.prompt.set(text);
  }

  onPromptInput(event: Event): void {
    this.prompt.set((event.target as HTMLTextAreaElement).value);
    this.authError.set(false);
  }

  getModelStyle(color: string): Record<string, string> {
    return {
      background: `${color}22`,
      color,
      border: `1px solid ${color}44`,
    };
  }

  getProgressStyle(color: string, pct: number): Record<string, string> {
    return {
      width:      `${pct}%`,
      background: `linear-gradient(90deg, ${color}, ${color}88)`,
    };
  }

  getModelById(id: string): ArenaModel {
    return this.allModels.find(m => m.id === id) ?? this.allModels[0];
  }

  getPct(votes: number): number {
    const total = this.totalVotes();
    return total > 0 ? Math.round((votes / total) * 100) : 0;
  }
}