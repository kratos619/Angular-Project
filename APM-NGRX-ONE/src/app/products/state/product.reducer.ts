// import { State } from './../../state/app.state';
import { Product } from './../product';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as AppState from '../../state/app.state';
import * as ProductActions from './product.action';

export interface State extends AppState.State {
  products: ProductState;
}
export interface ProductState {
  showProduct: boolean;
  currentProduct: Product;
  products: [];
}

const initialState: ProductState = {
  showProduct: false,
  currentProduct: null,
  products: [],
};

// selectros
const getProductsFetureState = createFeatureSelector<ProductState>('products');
//create selector function for showProduct
export const getShowProductCode = createSelector(
  getProductsFetureState,
  (state) => state.showProduct
);

export const getcurrentProduct = createSelector(
  getProductsFetureState,
  (state) => state.currentProduct
);

export const getproducts = createSelector(
  getProductsFetureState,
  (state) => state.products
);

export const productReducres = createReducer<ProductState>(
  initialState, //initial state
  on(
    ProductActions.toggleProductCode,
    (state): ProductState => {
      return {
        ...state,
        showProduct: !state.showProduct,
      };
    }
  )
);
