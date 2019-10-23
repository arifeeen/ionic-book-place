import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings: Booking[] = [{
      id: '1',
      bid: '1',
      placeTitle: 'Charminar',
      noOfGuests: '4'
  },
  {
    id: '2',
    bid: '2',
    placeTitle: 'Falaknuma palace',
    noOfGuests: '3'
},{
    id: '2',
    bid: '2',
    placeTitle: 'Normal palace',
    noOfGuests: '2'
}];

  get bookings() {
    return [...this._bookings];
  }
}
