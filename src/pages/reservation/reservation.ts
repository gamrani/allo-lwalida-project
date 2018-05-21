import { Component,Injectable } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Person} from '../../models/person.model';
import { ReservationProvider } from '../../providers/reservation/reservation';
import { EmailComposer } from '@ionic-native/email-composer';
/**
 * Generated class for the ReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Injectable()
@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
  providers: [EmailComposer,ReservationProvider]
})
export class ReservationPage {
   
  
  res:Person = {
    key:'', 
    fname:'',
    lname:'',
    adress:'',
    phone:''
  };
 
  disable = true;
  value = this.navParams.get('param1');

  constructor(private emailComposer: EmailComposer,private reservation:ReservationProvider,public navCtrl: NavController,public navParams: NavParams) {
  }

  verify(){
    if(this.res.fname!='' && this.res.phone!='' && this.res.lname!='' && this.res.adress!='' ){
      this.disable=false;
    }else{
      this.disable = true;
    }
    return this.disable;
  }
  
  reserver(res:Person){
    this.reservation.setReservationList(res).then(ref =>{
      console.log(ref.key);
    });

    let  email = {
      to: 'gamraniyoussef@gmail.com',
      cc: 'erika@mustermann.de',
      bcc: ['john@doe.com', 'jane@doe.com'],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    };
    // Send a text message using default options
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
       
      }
     });
     this.emailComposer.open(email);
  }

}
