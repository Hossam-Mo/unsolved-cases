import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";

const sign = (state = null, action) => {
  switch (action.type) {
    case actionTypes.signIn_user.type:
      return action.user || null;
    case actionTypes.signOut_user.type:
      return null;
    default:
      return state;
  }
};
const add_toCart = (state = [], action) => {
  switch (action.type) {
    case actionTypes.add_toCart.type:
      const inCart = state.find((item) => {
        return item.id === action.payload.id ? true : false;
      });

      return inCart
        ? state.map((item) => {
            return item.id === action.payload.id
              ? { ...item, count: item.count + 1 }
              : item;
          })
        : [...state, { ...action.payload, count: 1 }];

    case actionTypes.inc_count.type:
      return state.map((item) => {
        return item.id === action.payload.id
          ? { ...item, count: item.count + 1 }
          : item;
      });
    case actionTypes.dsc_count.type:
      return state.map((item) => {
        return item.id === action.payload.id
          ? { ...item, count: item.count - 1 }
          : item;
      });

    case actionTypes.cart_itemDelete.type:
      return state.filter((item) => {
        return item.id !== action.payload.id;
      });

    default:
      return state;
  }
};

export const rootReducer = combineReducers({ cart: add_toCart, user: sign });
