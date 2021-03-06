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
    type: "DELETE_FROM_CART",
    payload: {
      id: itemId,
    },
  };
};
export const searchBar = (itemId, e) => {
  return {
    type: actionTypes.SEARCH_BAR,
    payload: {
      id: itemId,
      e: e.target.value,
    },
  };
};

export const addToWishlist = (itemId) => {
  return {
    type: actionTypes.ADD_TO_WISHLIST,
    payload: {
      id: itemId,
    },
  };
};

export const deleteFromWishlist = (itemId) => {
  return {
    type: actionTypes.DELETE_FROM_WISHLIST,
    payload: {
      id: itemId,
    },
  };
};
export const adjustQty = (itemId, value) => {
  return {
    type: actionTypes.ADJUST_QUANTITY,
    payload: {
      id: itemId,
      qty: value,
    },
  };
};
export const incrementQty = (itemId, value) => {
  return {
    type: actionTypes.INCREMENT_QUANTITY,
    payload: {
      id: itemId,
      qty: value,
    },
  };
};
export const decrementQty = (itemId, value) => {
  return {
    type: actionTypes.DECREMENT_QUANTITY,
    payload: {
      id: itemId,
      qty: value,
    },
  };
};
