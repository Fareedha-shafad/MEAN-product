
import { ProductModel } from './product.model';
import {ProductService} from '../product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //constructor() { }
title:String="Product List"
//Product is the model class for a product item
products:ProductModel[];
//image properties
imageWidth:number=50;
iamgeMargin:number=2;

showImage:boolean=false;
//creating service obj for calling getProducts()
constructor(private productService: ProductService){

}
toggleImage():void{
  this.showImage=!this.showImage;
}


  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    })
  }
  // deleteProduct(product:ProductModel):void{
  //   this.productService.deleteProduct(product.productId);
   
  //   }
  // DeleteProduct(Id)
  // {
  //   this.productService.delete(this.products);
  //   console.log("deleted sucessfully");
  //   alert("Do you want to delete");
    // this.router.navigate(['/Id']);
  // }

  
}
