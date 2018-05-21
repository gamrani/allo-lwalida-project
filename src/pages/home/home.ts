import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  callNumber: CallNumber;
  constructor(public navCtrl: NavController) {

  }
  call(){
    this.callNumber.callNumber("0681674468", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
   }
   email(){

   }
}
