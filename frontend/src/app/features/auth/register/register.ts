import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: '../auth.scss',
})
export class RegisterComponent {

  name     = '';
  email    = '';
  password = '';
  confirm  = '';

  loading  = signal(false);
  error    = signal('');
  showPass = signal(false);

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}
  // ↑ Убрали автоматический редирект

  submit(): void {
    this.error.set('');

    if (!this.name.trim() || !this.email.trim() || !this.password) {
      this.error.set('Заполни все поля');
      return;
    }
    if (this.name.trim().length < 2) {
      this.error.set('Имя слишком короткое');
      return;
    }
    if (!this.email.includes('@')) {
      this.error.set('Некорректный email');
      return;
    }
    if (this.password.length < 6) {
      this.error.set('Пароль минимум 6 символов');
      return;
    }
    if (this.password !== this.confirm) {
      this.error.set('Пароли не совпадают');
      return;
    }

    this.loading.set(true);

    setTimeout(() => {
      const ok = this.auth.register(this.name, this.email, this.password);
      this.loading.set(false);

      if (ok) {
        // После регистрации — на главную, не в чат
        this.router.navigate(['/']);
      } else {
        this.error.set('Этот email уже занят');
      }
    }, 800);
  }

  togglePass(): void {
    this.showPass.update(v => !v);
  }
}