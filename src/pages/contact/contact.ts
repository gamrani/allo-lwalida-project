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
  basique: boolean;
  moyen: boolean;
  allo: boolean;
  pack="";

  constructor(public navCtrl: NavController) {

  }
  
  basiquePrice(){
    if(this.basique)  {this.value = this.value +28;}
    if(!this.basique && this.value>0) {
      this.value=this.value-28;
    }
  
  }
  
  moyenPrice(){
    if(this.moyen)  {this.value = this.value +37;}
    if(!this.moyen && this.value>0) {
      this.value=this.value-37;
    } 
  }
  alloPrice(){
    if(this.allo)  {this.value = this.value +45;}
    if(!this.allo && this.value>0) {
      this.value=this.value-45;
    } 
  }
  reserver(){
    if(this.basique){
      this.pack=this.pack+" "+" Ftour basique";
    }
    if(this.moyen){
      this.pack=this.pack+" + "+" Ftour moyen";
    }
    if(this.allo){
      this.pack = this.pack +" + "+"Ftour allo l'walida";
    }
    
    
    if(confirm("Le pack choisit est :  "+this.pack+"  ")) {
        this.navCtrl.push(ReservationPage,{
          param1 : this.value
        });      
    }else{
      this.pack = "";
    }
  }
}
