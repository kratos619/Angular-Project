import { createAction, createReducer, on } from '@ngrx/store';

export const formReducre = createReducer<any>(
  { formData: '' },
  on(
    createAction('[formOutputText] to formOutput area code', (event) => event),
    (state, event) => {
      // console.log('fromState', event.event);
      return {
        ...state,
        formData: event.event,
      };
    }
  )
);
