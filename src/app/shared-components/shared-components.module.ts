import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LoadingComponent
  ]
})
export class SharedComponentsModule { }
