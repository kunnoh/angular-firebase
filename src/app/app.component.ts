import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './pages/sharedComponents/footer/footer.component';
import { NavbarComponent } from './pages/sharedComponents/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet,
    FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <app-footer></app-footer>
    <router-outlet>
  `,
})
export class AppComponent {
  title = 'Ng-Firebase';
}
