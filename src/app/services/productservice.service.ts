import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }
  addProduct(data:product){
    //console.log(data)
   return  this.http.post('http://localhost:3000/products',data,{observe:'response'});
    }
    getProduct(){
      return this.http.get<product[]>('http://localhost:3000/products');
    }
    deleteProductItem(id:number){
      return this.http.delete(`http://localhost:3000/products/${id}`);
    }
    getProductItem(id:string){
      return this.http.get<product>(`http://localhost:3000/products/${id}`);
    }
}
