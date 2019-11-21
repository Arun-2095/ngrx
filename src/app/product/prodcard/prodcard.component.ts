import { Component, OnInit } from '@angular/core';
import { SourceService } from 'src/app/core/source.service';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-prodcard',
  templateUrl: './prodcard.component.html',
  styleUrls: ['./prodcard.component.css']
})
export class ProdcardComponent implements OnInit {
public source: any;

  constructor( private data: SourceService ,private  store: Store) { }

  ngOnInit() {
    this.source = this.data.product;
  }

  addToCart(el) {
    const dummy = Array.from(el.children);
    const item: any = [];
    dummy.forEach((ele: any) => { item.push(ele.textContent.trim()); });
    item.pop();
    this.data.addToCart(item);
  }

}
