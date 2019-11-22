import { Component, OnInit, OnChanges } from '@angular/core';
import { SourceService } from 'src/app/core/source.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store/index';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],

})
export class CartComponent implements OnInit {
public cartItems: any;

public check: Observable<fromStore.CartItemState>;

  constructor(private source: SourceService , private store: Store<fromStore.CartItemState> ) { }

  ngOnInit() {
    this.cartItems = this.source.selectedCartItems;
    this.store.select<any>('selectedItem').subscribe((s) => console.log(s));
  }

}
