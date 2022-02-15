import * as actionTypes from "../actions/action.types";
import shopData from "../../components/Products/shopData.json";
import { red } from "@material-ui/core/colors";

const initialState = {
  cart: [],
  searchvalue: "",
  wishlist: [],
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
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };
    // case actionTypes.SEARCH_BAR:
    //   const searchItem = action;
    //   const newFilterItem = shopData.filter((value) => {
    //     return value.name.toLowerCase().includes(searchItem.toLowerCase());
    //   });
    //   //   const {value} = action;
    //   //   const cart = shopData.filter ((val)=> val.includes(value) )
    //   //   return{
    //   //     ...state, cart, value
    //   // }
    //   return { ...state.searchvalue, searchvalue: newFilterItem };

    // case actionTypes.ADD_TO_WISHLIST:
    //   const wishlistItem = shopData.find(
    //     (prod) => prod.id === action.payload.id
    //   );
    //   const inWishlist = state.wishlist.find((wishlistItem) =>
    //     wishlistItem.id === action.payload.id ? true : false
    //   );
    //   return {
    //     ...state,
    //     wishlist: inWishlist
    //       ? state.wishlist.map((wishlistItem) =>
    //           wishlistItem.id === action.payload.id
    //             ? { ...wishlistItem }
    //             : wishlistItem
    //         )
    //       : [...state.wishlist, { wishlistItem }],
    //   };
    // case actionTypes.DELETE_FROM_WISHLIST:
    //   return {
    //     ...state,
    //     wishlist: state.wishlist.filter(
    //       (wishlistItem) => wishlistItem.id !== action.payload.id
    //     ),
    //   };
    case actionTypes.ADD_TO_WISHLIST:
      const items = shopData.find((prods) => prods.id === action.payload.id);
      const inWishlist = state.wishlist.find((items) =>
        items.id === action.payload.id ? true : false
      );
      return {
        ...state,
        wishlist: inWishlist
          ? state.wishlist.map((items) =>
              items.id === action.payload.id ? { ...items } : items
            )
          : [...state.wishlist, { ...items , color: red }],
      };
    case actionTypes.DELETE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (items) => items.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
export default shopReducer;
