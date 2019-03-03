import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface Feedback{
  headache: string;
  stomachache: string;
  nauseatic: string;
  constipation: string;
  insomnia: string;
  fever: string;
  diarrhoea: string;
  appetite: string;
  anxiety: string;
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  
  headache: string;
  stomachache: string;
  nauseatic: string;
  constipation: string;
  insomnia: string;
  fever: string;
  diarrhoea: string;
  appetite: string;
  anxiety: string;
  date: string;
  month: string;
  year: string;
  fulldate: string;
  private feedbackCollection: AngularFirestoreCollection<Feedback>;
  constructor(private router: Router,
    db: AngularFirestore) {
      this.feedbackCollection = db.collection('Lab').doc('bvG2bGCeWBhs0uKBMDth7OWPhQ32').collection('Trial').doc('Trial_1').collection('Phase').doc('Phase_1').collection('Patient').doc('viraj').collection('Feedback');
    }
    ngOnInit() {
    }
    
    submit(){
      this.date = new Date().getDate().toString();
      this.month = new Date().getMonth().toString();
      this.year = new Date().getFullYear().toString();
      this.fulldate = this.year;
      if(this.month.length == 1)this.fulldate += "-0"+this.month;
      else this.fulldate += "-"+this.month;
      if(this.date.length == 1)this.fulldate += "-0"+this.date;
      else this.fulldate += "-"+this.date;
      this.feedbackCollection.doc('Feedback_1').set({
        headache: this.headache,
        stomachache: this.stomachache,
        nauseatic: this.nauseatic,
        constipation: this.constipation,
        insomnia: this.insomnia,
        fever: this.fever,
        diarrhoea: this.diarrhoea,
        appetite: this.appetite,
        anxiety: this.anxiety,
        date: this.fulldate,
      //   effect_weight:,
      });
    }f
    
  }
  