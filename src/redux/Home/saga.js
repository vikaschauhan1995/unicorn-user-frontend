import { takeLatest, put } from 'redux-saga/effects';
import { SET_CART_LIST_ACTION, CART_LIST, FETCH_PRODUCT_LIST_ACTION, FETCH_PRODUCT_LIST_FROM_LOCALSTORAGE_ACTION, SET_FETCH_PRODUCT_LIST_LOADING, SET_PRODUCT_LIST } from './constants';
import { ADMIN_BACKEND_BASE_URL } from '../../constants';


function* fetchProductList() {
  try {
    yield put({ type: SET_FETCH_PRODUCT_LIST_LOADING, payload: true });
    const response = yield fetch(`${ADMIN_BACKEND_BASE_URL}/api/product`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const json = yield response.json();
    if (!response.ok) {
      yield put({ type: SET_FETCH_PRODUCT_LIST_LOADING, payload: false });
    }
    if (response.ok) {
      yield put({ type: SET_PRODUCT_LIST, payload: json });
      yield put({ type: SET_FETCH_PRODUCT_LIST_LOADING, payload: false });
    }
  } catch (error) {
    console.log("error: ", error.message);
  }
}

function* fetchProductListFromLocalStorage() {
  try {
    const cartItemsString = yield localStorage.getItem(CART_LIST);
    const cartItems = JSON.parse(cartItemsString);
    // console.log("cartItems=>", cartItems);
    if (cartItems?.length > 0) {
      yield put({ type: SET_CART_LIST_ACTION, payload: cartItems });
    } else {
      yield put({ type: SET_CART_LIST_ACTION, payload: [] });
    }
  } catch (error) {
    yield put({ type: SET_CART_LIST_ACTION, payload: [] });
    console.log("error: ", error.message);
  }
}


export default function* saga() {
  yield takeLatest(FETCH_PRODUCT_LIST_ACTION, fetchProductList);
  yield takeLatest(FETCH_PRODUCT_LIST_FROM_LOCALSTORAGE_ACTION, fetchProductListFromLocalStorage);
}