import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdcardComponent } from './prodcard/prodcard.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [{
  path: '',
  component: ProdcardComponent,
},
{
     path: 'cart',
    component: CartComponent
  }
];



@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class ProductRoutingModule { }
