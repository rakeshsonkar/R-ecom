import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductserviceService } from '../services/productservice.service';
import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList:undefined | product[]
  ProductMessage:undefined | string;
  deleteIcon=faTrash;
  editIcon=faEdit;
  constructor( private productservice:ProductserviceService) { }

  ngOnInit(): void {
   this.productListLoad();
  }
  deleteProduct(id:number){
   this.productservice.deleteProductItem(id).subscribe(res=>{
    if(res){
      this.ProductMessage="Product delete successfully";
      this.productListLoad();
    }
   })
   setTimeout(()=>{
    this.ProductMessage=undefined
   },3000)
  }
  productListLoad(){
    this.productservice.getProduct().subscribe(res=>{
      this.productList=res;
    })
  }

}
