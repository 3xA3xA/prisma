import {
  Component,
  signal,
  computed,
  ElementRef,
  ViewChild,
  AfterViewChecked,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import {
  CHAT_MODELS,
  CHAT_HISTORY,
  DEMO_MESSAGES,
  AI_RESPONSES,
  type Message,
  type ChatModel,
  type ChatHistory,
} from './chat.models';

@Component({
  selector: 'app-chat',
  imports: [FormsModule, NgStyle],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
})
export class ChatComponent implements AfterViewChecked {

  @ViewChild('messagesEnd') messagesEnd!: ElementRef<HTMLDivElement>;

  // ── Данные ──────────────────────────────
  readonly allModels: ChatModel[]     = CHAT_MODELS;
  readonly chatHistory: ChatHistory[] = CHAT_HISTORY;

  // ── Состояние ───────────────────────────
  messages   = signal<Message[]>(DEMO_MESSAGES);
  isTyping   = signal(false);
  inputText  = '';
  activeChatId = signal(1);

  selectedModel = signal<ChatModel>(CHAT_MODELS[0]);

  // ── Computed ────────────────────────────
  modelIconStyle = computed(() => this.getModelStyle(this.selectedModel()));

  // ── Lifecycle ───────────────────────────
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  // ── Методы ──────────────────────────────
  selectModel(model: ChatModel): void {
    this.selectedModel.set(model);
  }

  selectChat(id: number): void {
    this.activeChatId.set(id);
  }

  sendMessage(): void {
    const text = this.inputText.trim();
    if (!text) return;

    // Добавляем сообщение пользователя
    const userMsg: Message = {
      id: Date.now(),
      role: 'user',
      text,
      time: this.getTime(),
    };

    this.messages.update(msgs => [...msgs, userMsg]);
    this.inputText = '';
    this.isTyping.set(true);

    // Имитируем ответ AI
    setTimeout(() => {
      const aiMsg: Message = {
        id: Date.now() + 1,
        role: 'ai',
        model: this.selectedModel().name,
        text: AI_RESPONSES[Math.floor(Math.random() * AI_RESPONSES.length)],
        time: this.getTime(),
      };
      this.messages.update(msgs => [...msgs, aiMsg]);
      this.isTyping.set(false);
    }, 1800);
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  getModelStyle(model: ChatModel): Record<string, string> {
    return {
      background: `${model.color}22`,
      color:       model.color,
      border:     `1px solid ${model.color}44`,
    };
  }

  getModelStyleByColor(color: string): Record<string, string> {
    return {
      background: `${color}22`,
      color,
      border:     `1px solid ${color}44`,
    };
  }

  private getTime(): string {
    return new Date().toLocaleTimeString('ru', {
      hour:   '2-digit',
      minute: '2-digit',
    });
  }

  private scrollToBottom(): void {
    try {
      this.messagesEnd.nativeElement.scrollIntoView({ behavior: 'smooth' });
    } catch {}
  }
}