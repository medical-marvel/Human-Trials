import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trialdetails',
  templateUrl: './trialdetails.page.html',
  styleUrls: ['./trialdetails.page.scss'],
})
export class TrialdetailsPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  apply(){
    this.router.navigate(['trialcenters']);
  }
}
