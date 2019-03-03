import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-trialdetails',
  templateUrl: './trialdetails.page.html',
  styleUrls: ['./trialdetails.page.scss'],
})
export class TrialdetailsPage implements OnInit {

  labName: string;
  trialName: string;
  constructor(public router:Router,
    db: AngularFirestore,
    private activatedRoute: ActivatedRoute) { 
      this.labName = this.activatedRoute.snapshot.paramMap.get('labName');
      this.trialName = this.activatedRoute.snapshot.paramMap.get('trialName');
      console.log(this.labName+" "+this.trialName)
    }

  ngOnInit() {
  }

  apply(){
    this.router.navigate(['trialcenters']);
  }
}
