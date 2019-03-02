import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { MedicalHistory } from '../medicalhistory/medicalhistory.page';
import { Patient } from '../register/register.page';
import { LoadingController } from '@ionic/angular'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Trial{
  purpose: string,
  age: string,
  patient_no: number,
  trial_no: number,
  success_rate: number,
  preference: number
}

export interface Lab{
  Address: string,
  Contact_no: string,
  Contact_person: string,
  Email_id: string,
  Lab_head: string,
  Name: string,
  Pincode: number,
  Registration_no: string,
}

export interface Count{
  count: number;
}

@Component({
  selector: 'app-triallist',
  templateUrl: './triallist.page.html',
  styleUrls: ['./triallist.page.scss'],
})
export class TriallistPage implements OnInit {

  private labCollection: AngularFirestoreCollection<Lab>;
  private medicalHistoryDocument: AngularFirestoreDocument<MedicalHistory>;
  private counterCollection: AngularFirestoreCollection<Count>;
  private labDocument: AngularFirestoreDocument<Lab>;
  private labs: Observable<Lab[]>;
  labsArray: Lab[];
  fullname: string;
  purpose: string;
  age: string;
  patient_no: number;
  trial_no: number;
  success_rate: number;
  preference: number;
  docid: string;
  i: number;
  j: number;
  labcount: number;
  trialcount: number;
  query: string;
  no_of_patients_weight: number = 0.1;
  no_of_trial_weight: number = 0.07;
  success_rate_weight: number = 0.05;
  cardiology: string;
  thyroid: string;
  diabetes: string;
  patient_age: string;
  recommended_trial= new Array();

  constructor(private router:Router,
    db: AngularFirestore,
    private activatedRoute: ActivatedRoute,
    private loadingController: LoadingController) { 
      this.fullname = this.activatedRoute.snapshot.paramMap.get('fullname');
      this.medicalHistoryDocument = db.collection('Patient').doc(this.fullname).collection<MedicalHistory>('MedicalHistory').doc('MedicalRequirement');
      this.labCollection = db.collection<Lab>('Lab');
      this.counterCollection = db.collection('Counter');
    }

  async ngOnInit() {
    // this.labs = this.labCollection.snapshotChanges().pipe(
    //   map(actions => {
    //     return actions.map(a => {
    //       const data = a.payload.doc.data();
    //       const id = a.payload.doc.id;
    //       return { id, ...data };
    //     });
    //   })
    // );
    
    // this.labs.subscribe( res => {
    //   this.labsArray = res;
    // });

    // this.medicalHistoryDocument.get().toPromise().then((result) => {
    //   this.cardiology = result.data()['cardiology'];
    //   this.thyroid = result.data()['thyroid'];
    //   this.diabetes = result.data()['diabetes'];
    //   this.patient_age = result.data()['age'];
    // });

    // this.labCollection.get().toPromise().then((res) => {
    //   this.labcount = res.size;
    //   for(this.i = 0; this.i < 1; this.i++){
    //     this.labCollection.doc(res.docs[0].id).collection('Trial').get().toPromise().then((value) => {
    //       this.trialcount = value.size;
    //       console.log(this.trialcount);
    //       for(this.j = 0; this.j < this.trialcount; this.j++){
    //         console.log(value.docs[this.j].data()['purpose']);
    //         this.purpose = value.docs[this.j].data()['purpose'];
    //         this.patient_no = value.docs[this.j].data()['patient_no'];
    //         this.trial_no = value.docs[this.j].data()['trial_no'];
    //         this.success_rate = value.docs[this.j].data()['success_rate'];
    //         this.age = value.docs[this.j].data()['age'];
    //         if((this.purpose == 'cardiology' && this.cardiology == 'yes') && (this.age == 'adult' && this.patient_age == 'adult')){
    //           console.log(this.purpose);  
    //           this.recommended_trial.push(this.purpose);
    //           this.preference = (this.patient_no*this.no_of_patients_weight) + (this.trial_no*this.no_of_trial_weight) + (this.success_rate*this.success_rate_weight);
    //           console.log(this.preference);
    //         }
    //         if((this.purpose == 'thyroid' && this.thyroid == 'yes') && (this.age == 'adult' && this.patient_age == 'adult')){
    //           console.log(this.purpose);
    //           this.recommended_trial.push(this.purpose);
    //           this.preference = (this.patient_no*this.no_of_patients_weight) + (this.trial_no*this.no_of_trial_weight) + (this.success_rate*this.success_rate_weight);
    //           console.log(this.preference);
    //         }
    //         if((this.purpose == 'diabetes' && this.diabetes == 'yes') && (this.age == 'adult' && this.patient_age == 'adult')){
    //           console.log(this.purpose);
    //           this.recommended_trial.push(this.purpose);
    //           this.preference = (this.patient_no*this.no_of_patients_weight) + (this.trial_no*this.no_of_trial_weight) + (this.success_rate*this.success_rate_weight);
    //           console.log(this.preference);
    //         }
    //       }
    //     });
    //   }
    // });
    // console.log(this.recommended_trial);
  }

  
  profile(){
    this.router.navigate(['profile']);
  }

  view(){
    this.router.navigate(['trialdetails']);
  }
}
