import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;   // инициалы
  plan: 'free' | 'pro';
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  // ── Состояние сессии ────────────────────
  private _user = signal<User | null>(this.loadFromStorage());

  // Публичные computed
  readonly user       = this._user.asReadonly();
  readonly isLoggedIn = computed(() => this._user() !== null);
  readonly initials   = computed(() => {
    const u = this._user();
    if (!u) return '';
    return u.name
      .split(' ')
      .map(w => w[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  });

  constructor(private router: Router) {}

  // ── Вход (тест без бека) ────────────────
  login(email: string, password: string): boolean {
    // Тестовые аккаунты
    const TEST_ACCOUNTS: Record<string, { password: string; user: User }> = {
      'demo@prisma.ai': {
        password: '123456',
        user: {
          id: '1',
          name: 'Кирилл Кислицын',
          email: 'demo@prisma.ai',
          avatar: 'КК',
          plan: 'free',
        },
      },
      'pro@prisma.ai': {
        password: '123456',
        user: {
          id: '2',
          name: 'Pro пользователь',
          email: 'pro@prisma.ai',
          avatar: 'ПП',
          plan: 'pro',
        },
      },
    };

    const found = TEST_ACCOUNTS[email.toLowerCase()];
    if (found && found.password === password) {
      this.setUser(found.user);
      return true;
    }
    return false;
  }

  // ── Регистрация (тест без бека) ─────────
  register(name: string, email: string, _password: string): boolean {
    // Проверяем что email не занят
    if (email === 'demo@prisma.ai' || email === 'pro@prisma.ai') {
      return false;
    }

    const newUser: User = {
      id:     Date.now().toString(),
      name:   name.trim(),
      email:  email.toLowerCase().trim(),
      avatar: name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2),
      plan:   'free',
    };

    this.setUser(newUser);
    return true;
  }

  // ── Выход ───────────────────────────────
  logout(): void {
    this._user.set(null);
    localStorage.removeItem('prisma_user');
    this.router.navigate(['/']);
  }

  // ── Внутренние методы ───────────────────
  private setUser(user: User): void {
    this._user.set(user);
    localStorage.setItem('prisma_user', JSON.stringify(user));
  }

  private loadFromStorage(): User | null {
    try {
      const raw = localStorage.getItem('prisma_user');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
}