import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {ReservationPage} from '../reservation/reservation';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  value=0;
  pizza: boolean;
  panini: boolean;

  constructor(public navCtrl: NavController) {

  }
  
  pizzaPrice(){
    if(this.pizza)  {this.value = this.value +40;}
    if(!this.pizza && this.value>0) {
      this.value=this.value-40;
    }
  
  }
  paniniPrice(){
    if(this.panini)  {this.value = this.value +50;}
    if(!this.panini && this.value>0) {
      this.value=this.value-50;
    } 
  }
  reserver(){
    if(confirm("Le prix total de votre choix est :  "+this.value)) {
        this.navCtrl.push(ReservationPage,{
          param1 : this.value
        });      
    }
  }
}
