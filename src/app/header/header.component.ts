import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType:string='default';
  constructor(private route:Router) { }
  SellerName:string='';
  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller')&& val.url.includes('seller')){
          //console.log("in side area");
          if(localStorage.getItem('seller')){
           let localStore= localStorage.getItem('seller');
           let Sellerdata=localStore && JSON.parse(localStore)[0];
          this.SellerName=Sellerdata.name;
          }
          this.menuType="seller";
        }else{
          console.log("out side area");
          this.menuType="default";
        }
      }
    })
  }
  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

}
