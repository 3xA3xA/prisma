import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/landing/landing').then(m => m.LandingComponent)
  },
  {
    path: 'chat',
    loadComponent: () =>
      import('./features/chat/chat').then(m => m.ChatComponent)
  },
  {
    path: 'models',
    loadComponent: () =>
      import('./features/models/models').then(m => m.ModelsComponent)
  },
  {
    path: 'arena',
    loadComponent: () =>
      import('./features/arena/arena').then(m => m.ArenaComponent)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about').then(m => m.AboutComponent)
  },
  { path: '**', redirectTo: '' }
];