import { Component, OnInit } from '@angular/core';
import { SourceService } from 'src/app/core/source.service';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/index';

import * as action from '../../store/action/cart.action';


@Component({
  selector: 'app-prodcard',
  templateUrl: './prodcard.component.html',
  styleUrls: ['./prodcard.component.css']
})
export class ProdcardComponent implements OnInit {
public source: any;

  constructor( private data: SourceService , private store: Store<fromStore.CartItemState>) { }

  ngOnInit() {
    this.source = this.data.product;
  }

  addToCart(el) {
    const dummy = Array.from(el.children);
    const item: any = [];

    class Item {
   constructor(public product: string = product , public id: number = id  ) {}
  }
    dummy.forEach((ele: any) => { item.push(ele.textContent.trim()); });
    item.pop();
    const d =  item[1];
    // tslint:disable-next-line: radix
    item[1] = parseInt(d);
    const selectedProduct: action.Item = new Item(...item);

    console.log(selectedProduct);
    this.store.dispatch( new action.GetSelectedItem(selectedProduct));


    this.store.select<any>('selectedItem').subscribe((s) => console.log(s));
  }

}
