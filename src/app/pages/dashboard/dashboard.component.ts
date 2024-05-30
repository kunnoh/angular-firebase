import { Component } from '@angular/core';
import { NavbarComponent } from '../sharedComponents/navbar/navbar.component';
import { FooterComponent } from '../sharedComponents/footer/footer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
