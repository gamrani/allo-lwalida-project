import { Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import { Person } from "../../models/person.model";


@Injectable()
export class ReservationListService{

    private reservationListRef=this.db.list<Person>('reservation-lis');
    constructor(private db: AngularFireDatabase){

    }
    getReservationList(){
     return this.reservationListRef;
    } 
    setReservationList(person:Person){
      return this.reservationListRef.push(person);
    }
}