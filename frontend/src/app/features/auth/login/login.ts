import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: '../auth.scss',
})
export class LoginComponent {

  email    = '';
  password = '';

  loading  = signal(false);
  error    = signal('');
  showPass = signal(false);

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}
  // ↑ Убрали редирект если уже залогинен —
  //   пусть пользователь сам решает куда идти

  submit(): void {
    this.error.set('');

    if (!this.email.trim() || !this.password.trim()) {
      this.error.set('Заполни все поля');
      return;
    }

    this.loading.set(true);

    setTimeout(() => {
      const ok = this.auth.login(this.email, this.password);
      this.loading.set(false);

      if (ok) {
        // Возвращаемся назад или на главную — НЕ форсируем /chat
        const prev = history.state?.returnUrl;
        this.router.navigate([prev ?? '/']);
      } else {
        this.error.set('Неверный email или пароль');
      }
    }, 800);
  }

  onKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Enter') this.submit();
  }

  fillDemo(): void {
    this.email    = 'demo@prisma.ai';
    this.password = '123456';
  }

  togglePass(): void {
    this.showPass.update(v => !v);
  }
}