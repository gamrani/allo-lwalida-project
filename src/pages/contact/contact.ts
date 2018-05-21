import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  value=0;
  constructor(public navCtrl: NavController) {

  }

  addPrice(a){
    this.value = this.value +a;
     alert(this.value);
  }
}
