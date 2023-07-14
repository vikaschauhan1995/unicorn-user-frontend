import '../../style/ProductItem.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { PRODUCT_NAME, PRODUCT_PRICE, HOME_REDUCER, CART_QUANTITY, PRODUCT_SKU, CART_LIST } from '../../redux/Home/constants';
import { addProductIntoCartAction, decreaseCartItemQuantityAction, increaseCartItemQuantityAction } from '../../redux/Home/action';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const cartList = state?.[HOME_REDUCER]?.[CART_LIST];
  const cartItem = cartList?.find(item => {
    if (item?.[PRODUCT_SKU] === product?.[PRODUCT_SKU]) {
      return item;
    }
  });
  // console.log("product?.[CART_QUANTITY]=>", product);
  return (
    <Card sx={{ maxWidth: 345 }} className="m-2">
      <CardMedia
        component="img"
        height="140"
        image=""
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product?.[PRODUCT_NAME]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rs {product?.[PRODUCT_PRICE]}
        </Typography>
        <div className="ProductItem__footer">
          {cartItem ?
            <ButtonGroup style={{ borderRadius: '40px' }} aria-label="outlined primary button group">
              <Button onClick={() => dispatch(decreaseCartItemQuantityAction(product))}>-</Button>
              <Button>{cartItem?.[CART_QUANTITY]}</Button>
              <Button onClick={() => dispatch(increaseCartItemQuantityAction(product))}>+</Button>
            </ButtonGroup> :
            <Button variant="outlined" onClick={() => dispatch(addProductIntoCartAction(product))}>Add to Card</Button>
          }
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductItem;