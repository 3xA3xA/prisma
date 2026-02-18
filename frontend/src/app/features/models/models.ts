import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { Router } from '@angular/router';
import { ScrollRevealDirective } from '../../shared/scroll-reveal/scroll-reveal';
import {
  AI_MODELS,
  CATEGORIES,
  type AiModel,
} from './models.models';

@Component({
  selector: 'app-models',
  imports: [FormsModule, NgStyle, ScrollRevealDirective],
  templateUrl: './models.html',
  styleUrl: './models.scss',
})
export class ModelsComponent {

  readonly allModels: AiModel[]  = AI_MODELS;
  readonly categories: string[]  = CATEGORIES;

  activeCategory = signal('Все');
  searchQuery    = signal('');

  filtered = computed(() => {
    const cat    = this.activeCategory();
    const search = this.searchQuery().toLowerCase();

    return this.allModels.filter(m => {
      const matchCat =
        cat === 'Все' ||
        m.category === cat ||
        m.tags.includes(cat);

      const matchSearch =
        !search ||
        m.name.toLowerCase().includes(search) ||
        m.company.toLowerCase().includes(search);

      return matchCat && matchSearch;
    });
  });

  constructor(private router: Router) {}

  setCategory(cat: string): void {
    this.activeCategory.set(cat);
  }

  onSearch(value: string): void {
    this.searchQuery.set(value);
  }

  openChat(model: AiModel): void {
    this.router.navigate(['/chat'], {
      queryParams: { model: model.id }
    });
  }

  // Стили иконки модели
  getIconStyle(color: string): Record<string, string> {
    return {
      background: `${color}22`,
      color,
      border: `1px solid ${color}44`,
    };
  }

  // Кнопка открытия чата — цвет по модели
  getChatBtnStyle(color: string): Record<string, string> {
    return {
      background: `linear-gradient(135deg, ${color}cc, ${color}88)`,
      'border-color': `${color}44`,
    };
  }

  // Звёзды рейтинга — заполнен ли данный шаг
  isStarFilled(rating: number, star: number): boolean {
    return rating / 2 >= star;
  }

  // Массив [1,2,3,4,5] для @for
  readonly stars = [1, 2, 3, 4, 5];
}