import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductItemComponent,NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  public productList:any=[];
  ngOnInit(): void {
   this.loadProductInfo();
  }
async loadProductInfo(){
// let response= await  fetch('https://fakestoreapi.com/products');
// let body= await response.json();
// this.productList=body;
// console.log(this.productList)

let body=await fetch('https://fakestoreapi.com/products').then((res)=> res.json());
this.productList=body;
console.log(this.productList);


  // fetch('https://fakestoreapi.com/products')
  //           .then(res=>res.json())
  //           .then(data=>{
  //             this.productList=data;
  //             console.log(data)
  //           })

  
}

}
