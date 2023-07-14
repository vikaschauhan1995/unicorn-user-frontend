import '../style/Home.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../component/Home/ProductItem';
import { fetchProductListAction, fetchProductListFromLocalstorage } from '../redux/Home/action';
import { HOME_REDUCER, PRODUCT_LIST, CART_LIST } from '../redux/Home/constants';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  // console.log("state=>", state?.[HOME_REDUCER]?.[CART_LIST]);
  const productList = state?.[HOME_REDUCER]?.[PRODUCT_LIST];
  const productListCards = productList.map(product => <ProductItem key={product?._id} product={product} />);

  useEffect(() => {
    dispatch(fetchProductListAction());
    dispatch(fetchProductListFromLocalstorage())
  }, [dispatch]);
  return (
    <div className="Home__container">
      {productListCards}
    </div>
  )
}

export default Home