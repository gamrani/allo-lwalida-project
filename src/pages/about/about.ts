import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable} from 'rxjs/Observable';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  repas:{};

  constructor(public navCtrl: NavController,public db:AngularFireDatabase) {
     this.repas = db.list('persons');
  }

}
