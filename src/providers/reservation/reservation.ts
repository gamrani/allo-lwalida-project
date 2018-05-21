import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import { Person } from "../../models/person.model";

/*
  Generated class for the ReservationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReservationProvider {

  private reservationListRef=this.db.list<Person>('reservation-list');
    constructor(private db: AngularFireDatabase){

    }
    getReservationList(){
     return this.reservationListRef;
    } 
    setReservationList(person:Person){
      return this.reservationListRef.push(person);
    }

}
