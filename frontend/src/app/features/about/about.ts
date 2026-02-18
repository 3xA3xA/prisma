import { Component } from '@angular/core';

@Component({
  selector: 'About',
  template: `
    <div class="placeholder">
      <span>💬</span>
      <p>About — следующий шаг</p>
    </div>
  `,
  styles: [`
    .placeholder {
      height: 80vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      color: rgba(255,255,255,0.3);
      font-size: 18px;

      span { font-size: 48px; }
    }
  `]
})
export class AboutComponent {}