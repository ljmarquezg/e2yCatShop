import { combineEpics } from "redux-observable";
import * as product from "./product/productEpic";

export default combineEpics(
  ...Object.values({
    ...product
  })
);
