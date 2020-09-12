import { createAction, createReducer, on } from '@ngrx/store';

export const productReducres = createReducer(
  { showProduct: true }, //initial state
  on(createAction('[product] toggle product code'), (state) => {
    console.log('orignal state', state);

    return {
      ...state,
      showProduct: !state.showProduct,
    };
  })
);
