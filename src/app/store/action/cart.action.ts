import { Action } from '@ngrx/store' ;

export interface Item {
    id: number ;
    product: string;
}


export const GET_SELECTED_ITEM = 'GET_SELECTED_ITEM';
export const DISPLAY_SELECTED_ITEM = 'DISPLAY_SELECTED_ITEM';

export class GetSelectedItem implements Action {
     readonly type = GET_SELECTED_ITEM;
}

export class DisplaySelectedItem implements Action {
    readonly type = DISPLAY_SELECTED_ITEM;

    constructor(public payload: Item ) { }
}

export type CartAction = GetSelectedItem |  DisplaySelectedItem ;
