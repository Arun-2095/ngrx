import { Component, OnInit, DoCheck } from '@angular/core';
import { SourceService } from 'src/app/core/source.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements DoCheck {
public cartItems: any;
  constructor(private source: SourceService) { }

  ngDoCheck() {
    this.cartItems = this.source.selectedCartItems;
    console.log(this.source.selectedCartItems);
  }

}
