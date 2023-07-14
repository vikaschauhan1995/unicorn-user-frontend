import { addToLocalstorage } from "../../methods/addToLocalstorage";
import {
  FETCH_PRODUCT_LIST_LOADING, SET_FETCH_PRODUCT_LIST_LOADING, SET_PRODUCT_LIST, PRODUCT_LIST,
  ADD_PRODUCT_INTO_CART_ACTION,
  CART_LIST,
  PRODUCT_SKU,
  SET_CART_LIST_ACTION,
  CART_QUANTITY,
  INCREASE_CART_ITEM_QUANTITY_ACTION,
  DECREASE_CART_ITEM_QUANTITY_ACTION,
  PRODUCT_QUANTITY,
  REMOVE_PRODUCT_FROM_CART_ACTION
} from "./constants";


const initialState = {
  [FETCH_PRODUCT_LIST_LOADING]: false,
  [PRODUCT_LIST]: [],
  [CART_LIST]: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FETCH_PRODUCT_LIST_LOADING:
      return { ...state, [FETCH_PRODUCT_LIST_LOADING]: action?.payload };
    case SET_PRODUCT_LIST:
      return { ...state, [PRODUCT_LIST]: action?.payload };
    case SET_CART_LIST_ACTION:
      return { ...state, [CART_LIST]: action?.payload };
    case ADD_PRODUCT_INTO_CART_ACTION:
      {
        let oldCartList = state?.[CART_LIST];
        // console.log("oldCartList=>", oldCartList);
        const product = action?.payload;
        if (!(oldCartList?.length > 0)) {
          oldCartList = [];
        }
        oldCartList.push({ ...product, [CART_QUANTITY]: 1 });
        addToLocalstorage(CART_LIST, JSON.stringify(oldCartList));
        return { ...state, [CART_LIST]: oldCartList };
      }
    case INCREASE_CART_ITEM_QUANTITY_ACTION:
      {
        let oldCartList = state?.[CART_LIST];
        const product = action?.payload;
        const newCartList = oldCartList.map((item) => {
          if (item?.[PRODUCT_SKU] === product?.[PRODUCT_SKU]) {
            const curItem = { ...item, [CART_QUANTITY]: item?.[CART_QUANTITY] + 1 };
            return curItem;
          } else {
            return item;
          }
        });
        addToLocalstorage(CART_LIST, JSON.stringify(newCartList));
        return { ...state, [CART_LIST]: newCartList };
      }
    case DECREASE_CART_ITEM_QUANTITY_ACTION:
      {
        const oldCartList = state?.[CART_LIST];
        const product = action?.payload;
        const newArray = [];
        oldCartList.forEach((item) => {
          if (item?.[PRODUCT_SKU] === product?.[PRODUCT_SKU]) {
            if (item?.[CART_QUANTITY] > 1) {
              newArray.push({ ...item, [CART_QUANTITY]: item?.[CART_QUANTITY] - 1 });
            }
          } else {
            newArray.push(item);
          }
        });
        addToLocalstorage(CART_LIST, JSON.stringify(newArray));
        return { ...state, [CART_LIST]: newArray };
      }
    case REMOVE_PRODUCT_FROM_CART_ACTION:
      {
        const oldCartArray = state?.[CART_LIST];
        const product = action?.payload;
        const newCartArray = [];
        oldCartArray.forEach(item => {
          if (item?.[PRODUCT_SKU] !== product?.[PRODUCT_SKU]) {
            newCartArray.push(item);
          }
        });
        return { ...state, [CART_LIST]: newCartArray };
      }
    default:
      return state;
  }
}