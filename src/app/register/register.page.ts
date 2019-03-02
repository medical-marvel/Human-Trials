import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Patient{
  fullname:string;
  dob: string;
  gender: string;
  contactno: number;
  address:string;
  pincode:number;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit,Patient {

  public patientCollection: AngularFirestoreCollection<Patient>;
  public patients: Observable<Patient[]>;
  age: number;
  fullname:string;
  dob: string;
  gender: string;
  contactno: number;
  address:string;
  pincode:number;

  constructor(public router: Router,
    db: AngularFirestore) {
      this.patientCollection = db.collection<Patient>('Patient');
    }

  ngOnInit() {
  }

  next(){

    // this.patientCollection.doc(this.fullname).set({
    //   fullname: this.fullname,
    //   dob: this.dob.toString(),
    //   gender: this.gender,
    //   contactno: this.contactno,
    //   address: this.address,
    //   pincode: this.pincode});
    // this.age = new Date(). - this.dob;
    this.router.navigate(['medicalhistory/'+this.fullname+"/adult/"+this.gender]);
  }

}
