import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http:HttpClient) { }
  //baseUrl:string='http://localhost:3000';
  getProducts(){
    return this.http.get('http://localhost:3000/products');
  }
  newProduct(item)
  {
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data=>{console.log(data)})
  }
  deleteProduct(_id:number){
    // return this.http.delete("http://localhost:3000/Id") 
    // .subscribe(data=>{console.log(data)})
      // this.products=this.filter(u=>u!==product);
    }
}
