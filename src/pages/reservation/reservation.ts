import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage {
  res = {tele:'',nom:'',prenom:'',adresse:''};
  disable = true;
  value = this.navParams.get('param1');
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  verify(){
    if(this.res.nom!='' && this.res.tele!='' && this.res.prenom!='' && this.res.adresse!='' ){
      this.disable=false;
    }else{
      this.disable = true;
    }
    return this.disable;
  }
  reservation(){
    this.navCtrl.pop();
  }

}
