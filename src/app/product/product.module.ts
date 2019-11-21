import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdcardComponent } from './prodcard/prodcard.component';
import { ProductRoutingModule } from './product-routing.module';
import { CoreModule } from '../core/core.module';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [ProdcardComponent, CartComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CoreModule
  ]
})
export class ProductModule { }
