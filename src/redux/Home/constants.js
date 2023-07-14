export const HOME_REDUCER = "homeReducer";

export const PRODUCT_NAME = 'name';
export const PRODUCT_SKU = 'sku';
export const PRODUCT_QUANTITY = 'quantity';
export const PRODUCT_PRICE = 'price';
export const PRODUCT_IMAGES = 'images';
export const PRODUCT_CREATED_BY_ID = 'created_by_id';
export const PRODUCT_CREATED_BY_EMAIL = 'created_by_email';
export const PRODUCT_CREATED_AT = 'created_at';
export const PRODUCT_MODIFIED_LAST = 'modified_last';


export const CART_QUANTITY = 'cart_quantity';


// state
export const PRODUCT_LIST = 'home/productList';
export const CART_LIST = 'home/cartList';

// actions
export const FETCH_PRODUCT_LIST_ACTION = "home/fetchProductListAction";
export const SET_PRODUCT_LIST = "home/setProductList";
export const ADD_PRODUCT_INTO_CART_ACTION = "home/addProduct";
export const REMOVE_PRODUCT_FROM_CART_ACTION = "home/removeProductFromCart"
export const FETCH_PRODUCT_LIST_FROM_LOCALSTORAGE_ACTION = "home/fetchProductListFromLocalStorage"
export const SET_CART_LIST_ACTION = "home/setCartList"
export const INCREASE_CART_ITEM_QUANTITY_ACTION = "home/increaseCartItemQuantity";
export const DECREASE_CART_ITEM_QUANTITY_ACTION = "home/decreaseCartItemQuantity";


// loading
export const SET_FETCH_PRODUCT_LIST_LOADING = "home/setFetchProductListLoading";
export const FETCH_PRODUCT_LIST_LOADING = "home/fetchProductListLoading";