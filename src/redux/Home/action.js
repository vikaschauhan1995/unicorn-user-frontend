import { FETCH_PRODUCT_LIST_ACTION, ADD_PRODUCT_INTO_CART_ACTION, FETCH_PRODUCT_LIST_FROM_LOCALSTORAGE_ACTION, INCREASE_CART_ITEM_QUANTITY_ACTION, DECREASE_CART_ITEM_QUANTITY_ACTION, REMOVE_PRODUCT_FROM_CART_ACTION } from "./constants";



export function fetchProductListAction() {
  return {
    type: FETCH_PRODUCT_LIST_ACTION
  }
}

export function fetchProductListFromLocalstorage() {
  return {
    type: FETCH_PRODUCT_LIST_FROM_LOCALSTORAGE_ACTION
  }
}

export function addProductIntoCartAction(product) {
  return {
    type: ADD_PRODUCT_INTO_CART_ACTION,
    payload: product
  }
}

export function removeProductFromCartAction(product) {
  return {
    type: REMOVE_PRODUCT_FROM_CART_ACTION,
    payload: product
  }
}

export function increaseCartItemQuantityAction(product) {
  return {
    type: INCREASE_CART_ITEM_QUANTITY_ACTION,
    payload: product
  }
}

export function decreaseCartItemQuantityAction(product) {
  return {
    type: DECREASE_CART_ITEM_QUANTITY_ACTION,
    payload: product
  }
}