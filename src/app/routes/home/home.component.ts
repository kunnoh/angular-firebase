import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-navbar></app-navbar>
    <section>
      <h1>Welcome</h1>
    </section>
    <app-footer></app-footer>
  `,
  styles: [`
    section{
      display: flex;
      flex-direction: column;
      height: 75dvh;
      overflow: hidden;
    }
  `]
})
export class HomeComponent {

}
