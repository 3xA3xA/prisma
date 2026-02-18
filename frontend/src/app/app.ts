import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuroraBg } from './shared/aurora-bg/aurora-bg';
import { Navbar } from './shared/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuroraBg, Navbar],
  template: `
    <app-aurora-bg />
    <div class="app-shell">
      <app-navbar />
      <main>
        <router-outlet />
      </main>
    </div>
  `,
  styles: [`
    .app-shell {
      position: relative;
      z-index: 1;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1;
    }
  `]
})
export class App {}