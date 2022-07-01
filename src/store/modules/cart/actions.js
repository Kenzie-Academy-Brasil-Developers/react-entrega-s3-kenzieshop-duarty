
import { ADD_PRODUCT, RMV_PRODUCT } from "./actionTypes";

export const addProduct = (products) => ({
  type: ADD_PRODUCT,
  products,
});

export const rmvProduct = (list) => ({
  type: RMV_PRODUCT,
  list,
});
          