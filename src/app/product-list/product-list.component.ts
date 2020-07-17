
import { ProductModel } from './product.model';
import {ProductService} from '../product.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  //constructor() { }
title:String="Product List"

//creating service obj for calling getProducts()
constructor(private productService: ProductService){}

//Product is the model class for a product item
products:ProductModel[];
//image properties
imageWidth:number=50;
iamgeMargin:number=2;
showImage:boolean=false;


toggleImage():void{
  this.showImage=!this.showImage;
}


  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    })
  }

  removeProduct(products,index)
  {
    //console.log("productId received",productId);
    if(window.confirm('Are you sure to delete?')){
     this.productService.deleteProduct(products._id).subscribe((data)=>{
       this.products.splice(index,1);
     })}}
  }


