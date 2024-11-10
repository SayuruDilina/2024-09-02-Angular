import { Component } from '@angular/core';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ProductsComponent } from '../../pages/products/products.component';
import { RouterLink } from '@angular/router';
import { ProductRegistrationComponent } from '../../pages/product-registration/product-registration.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DashboardComponent,ProductsComponent,RouterLink,ProductRegistrationComponent,NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public selectedHeader="Home";

  public changeSelectedHeader(menuName:string){
      this.selectedHeader=menuName;
  }

}
