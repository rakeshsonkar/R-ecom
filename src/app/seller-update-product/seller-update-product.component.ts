import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  productData:undefined | product;
  constructor(private route:ActivatedRoute,private productservice:ProductserviceService) { }

  ngOnInit(): void {
    let productId=this.route.snapshot.paramMap.get('id')
    console.log(productId)
    productId && this.productservice.getProductItem(productId).subscribe(data=>{
      this.productData=data;
     //console.log(data)
    })
  }

}
