import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatepersonaldetails',
  templateUrl: './updatepersonaldetails.page.html',
  styleUrls: ['./updatepersonaldetails.page.scss'],
})
export class UpdatepersonaldetailsPage implements OnInit {

  address: string;
  pincode: number;
  email: string;
  fullname: string;
  contactno: number;
  
  constructor(public router:Router) { }

  ngOnInit() {
  }

  submit(){
    this.router.navigate(['profile']);
  }

}
