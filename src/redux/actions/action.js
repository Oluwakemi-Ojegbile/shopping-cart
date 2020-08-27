import { CartTypes } from "./types";

export const addToCart = payload => {
  return {
    type: CartTypes.ADD_TO_CART,
    payload
  };
};
