import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  // tslint:disable-next-line: variable-name
  private _places: Place[] = [
    new Place(
      '1',
      'charminar',
      'monument',
      'https://media.gettyimages.com/photos/gateway-to-india-picture-id172371293?s=2048x2048',
      '100'
    ),
    // tslint:disable-next-line: max-line-length
    new Place(
      '2',
      'charminar 2',
      'monument',
      'https://media.gettyimages.com/photos/gateway-to-india-picture-id172371293?s=2048x2048',
      '200'
    ),
    // tslint:disable-next-line: max-line-length
    new Place(
      '3',
      'charminar 3',
      'monument',
      'https://media.gettyimages.com/photos/gateway-to-india-picture-id172371293?s=2048x2048',
      '300'
    )
  ];

  get places() {
    return [...this._places];
  }
  constructor() {}
}
