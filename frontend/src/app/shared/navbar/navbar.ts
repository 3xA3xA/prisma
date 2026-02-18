import { Component, signal, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

interface NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  menuOpen = signal(false);

  links: NavLink[] = [
    { label: 'Чат',       path: '/chat'   },
    { label: 'Модели',    path: '/models' },
    { label: 'Арена',     path: '/arena'  },
    { label: 'О проекте', path: '/about'  },
  ];

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  goHome() {
    this.router.navigate(['/']);
    this.menuOpen.set(false);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}