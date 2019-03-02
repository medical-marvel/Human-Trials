import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  updateprofile(){
    this.router.navigate(['updatepersonaldetails']);
  }
  updatemedicalhistory(){
    this.router.navigate(['updatemedicalhistory']);
  }
  ongoing(){
    this.router.navigate(['ongoingtrials']);
  }
  prev(){
    this.router.navigate(['previoustrials']);
  }
  trialist(){
    this.router.navigate(['triallist']);
  }

}
