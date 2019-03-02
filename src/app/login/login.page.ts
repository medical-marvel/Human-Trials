import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username:string;
  password:string;
  user: Observable<firebase.User>;

  constructor(public router:Router,
    private afAuth: AngularFireAuth,
    private gplus: GooglePlus,
    private platform: Platform) {
      this.user = this.afAuth.authState;
    }

  ngOnInit() {
  }

  login(){
    console.log(this.username);
    console.log(this.password);
    if(this.username!=null||this.password!=null){
      this.router.navigate(['triallist/'+this.username]);
    } 
  }

  register(){
    console.log("hell man");
    this.router.navigate(['register']);
  }

  doctorlogin(){
    this.router.navigate(['doctor']);
  }
  googleLogin(){
    if(this.platform.is('cordova')){
      this.nativeGoogleLogin();
    } else {
      this.webGoogleLogin();
    }
  }

  async nativeGoogleLogin(): Promise<firebase.User> {
    try{
      const gplusUser = await this.gplus.login({
        'webClientId': '297007368505-7r042pv002mas3vve2t37jddd2fv57q1.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      });

      return await this.afAuth.auth.signInWithCredential(
        firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)
      )
    }
    catch(err){
      console.log(err)
    }
  }

  async webGoogleLogin(): Promise<void>{
    try{
      const provider =  new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
    }
    catch(err){
      console.log(err)
    }
  }

  signOut(){
    this.afAuth.auth.signOut();
    if(this.platform.is('cordova')){
      this.gplus.logout();
    }
  }

}
