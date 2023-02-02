import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { SignUp } from '../data-type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellerService,private router:Router) { }

  ngOnInit(): void {
  }
  signup(data:SignUp){
    console.table(data);
    this.seller.userSignUp(data).subscribe(res=>{
      if(res){
        this.router.navigate(['seller-home']);
      }
    })
  }

}
