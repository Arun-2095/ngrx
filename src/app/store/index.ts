import { ActionReducerMap , createFeatureSelector } from '@ngrx/store';

import * as CartReducer from './reducer/cart.reducer';

import * as CartAction from './action/cart.action';

export interface CartItemState {
    selectedItem: CartAction.Item;
}


export const Reducer: ActionReducerMap<CartItemState> = {
    selectedItem : CartReducer.reducer,
};

