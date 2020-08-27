import { CartTypes } from "../actions/types";

const initState = {
  carts: []
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cartReducer;
