import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";

const initialState = [];

const add_toCart = (state = initialState, action) => {
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

    default:
      return state;
  }
};

export const rootReducer = combineReducers({ cart: add_toCart });
