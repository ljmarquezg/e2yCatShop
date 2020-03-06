import { filter, map } from 'rxjs/operators';

import {GET_PRODUCTS}from "../../actions/actionTypes";

export const getProductsEpic = action$ => action$.pipe(
    filter(action => action.type === GET_PRODUCTS),
    map(action => {
        console.log('action', action);
      return { type: 'INCREMENT', amount: 1 };
    })
  );