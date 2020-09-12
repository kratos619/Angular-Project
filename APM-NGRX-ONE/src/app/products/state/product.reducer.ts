// import { State } from './../../state/app.state';
import { Product } from './../product';
import { createAction, createReducer, on } from '@ngrx/store';
import * as AppState from '../../state/app.state';

export interface State extends AppState.State {
  products: ProductState;
}
export interface ProductState {
  showProduct: boolean;
  currentProduct: Product;
  products: [];
}

const initialState: ProductState = {
  showProduct: true,
  currentProduct: null,
  products: [],
};

export const productReducres = createReducer<ProductState>(
  initialState, //initial state
  on(
    createAction('[product] toggle product code'),
    (state): ProductState => {
      return {
        ...state,
        showProduct: !state.showProduct,
      };
    }
  )
);
