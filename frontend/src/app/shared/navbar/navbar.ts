import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

interface NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  menuOpen = signal(false);

  readonly links: NavLink[] = [
    { label: 'Чат',        path: '/chat'   },
    { label: 'Модели',     path: '/models' },
    { label: 'Арена',      path: '/arena'  },
    { label: 'О проекте',  path: '/about'  },
  ];

  constructor(
    public auth: AuthService,
    private router: Router,
  ) {}

  toggleMenu(): void { this.menuOpen.update(v => !v); }
  closeMenu():  void { this.menuOpen.set(false); }

  goHome(): void {
    this.router.navigate(['/']);
    this.closeMenu();
  }

  logout(): void {
    this.auth.logout();
    this.closeMenu();
  }
}