import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-product-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-registration.component.html',
  styleUrl: './product-registration.component.css'
})
export class ProductRegistrationComponent {

 public product={
    name:"",
    description:""
  }

    register(){
      console.log(this.product);
      
    }
}
