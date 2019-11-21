import * as Actions from '../action/cart.action';

export const CartActions = Actions;

export const InitialState: Actions.Item = {
    id: 0 ,
    product: 'empty',
};

export function reducer( state = InitialState , action: Actions.CartAction ): Actions.Item {
  switch (action.type) {
case Actions.DISPLAY_SELECTED_ITEM : {
     return {
        ...state
     };
}

case Actions.GET_SELECTED_ITEM : {


}

  }

  return state;
 }
