import * as actionTypes from "./action.types";
export const addToCart = (itemId) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemId,
    },
  };
};
export const deleteFromCart = (itemId) => {
  return {
    type: actionTypes.DELETE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};
