import * as actionTypes from "../actions/action.types";
import shopData from "../../components/Products/shopData.json";

const initialState = {
  cart: [],
};
const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = shopData.find((prod) => prod.id === action.payload.id);
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id ? { ...item } : item
            )
          : [...state.cart, { ...item }],
      };
    case actionTypes.DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
export default shopReducer;
