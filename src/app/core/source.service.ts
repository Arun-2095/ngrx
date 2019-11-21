import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  constructor() { }


  public product = [
    {
      id: 1,
      productName: 'product1',
      price : 200
    },
    {
      id: 2,
      productName: 'product2',
      price : 400
    },
    {
      id: 3,
      productName: 'product3',
      price : 600
    },
    {
      id: 4,
      productName: 'product4',
      price : 500
    },
    {
      id: 5,
      productName: 'product5',
      price : 700
    },
    {
      id: 6,
      productName: 'product6',
      price : 800
    },
    {
      id: 7,
      productName: 'product7',
      price : 200
    },
    {
      id: 8,
      productName: 'product8',
      price : 200
    },
    {
      id: 9,
      productName: 'product1',
      price : 200
    }
  ];
public selectedCartItems = [];

  addToCart(el) {
  this.selectedCartItems.push(el);
  }
}
