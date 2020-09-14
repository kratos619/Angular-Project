import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

export const toggleProductCode = createAction('[product] toggle product code');
export const setCurrentProduct = createAction(
  '[Product] set current product',
  props<{ product: Product }>()
);
export const clearCurrentProduct = createAction(
  '[Product] clear current product'
);
export const initilizeCurentProduct = createAction(
  '[Product] initilize current product'
);
