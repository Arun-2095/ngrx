import * as Actions from '../action/cart.action';

export const CartActions = Actions;

export const InitialState: Actions.Item = {
    product: 'empty',
    id: 0
};

export function reducer( state: Actions.Item = InitialState, action: Actions.CartAction ): Actions.Item {
  switch (action.type) {
case Actions.DISPLAY_SELECTED_ITEM :
     return {
        ...state
     };
case Actions.GET_SELECTED_ITEM :
   console.log({...state,
    ...action.payload});
   return {
         ...state,
         ...action.payload
   };
    default:
    return {
       ...state
    };

  }


 }
