import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatemedicalhistory',
  templateUrl: './updatemedicalhistory.page.html',
  styleUrls: ['./updatemedicalhistory.page.scss'],
})
export class UpdatemedicalhistoryPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  submit(){
    this.router.navigate(['profile']);
  }

}
