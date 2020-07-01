import {combineReducers} from 'redux'
import token from './tokenReducer'
import signin from './signinReducer'
import department from './departmentReducer'
import product from './productReducer'
import variant from './variantsReducer'
import cart from './cartReducer'
import checkout from './checkoutReducer'
import filter from './filterReducer'
import productsReducer from "./productsReducer";
import pathReducer from "./pathReducer";
import selectedProductReducer from "./currentProdReducer";
import basketproductsReducer from "./basketReducer";
import carsReducer from "./carsReducer";
import whishListReducer from "./whishListReducer";
import selectedCarReducer from "./currentCarReducer";
import fetchedCarsReducer from "./fetchedCarsReducer";
import filteractivationReducer from "./filterReducer";

export default combineReducers({
  token,
  signin,
  department,
  product,
  variant,
  cart,
  checkout,
  filter,
  locationPath: pathReducer,
  products: productsReducer,
  selectedProduct: selectedProductReducer,
  selectedCar: selectedCarReducer,
  basketproducts: basketproductsReducer,
  cars: carsReducer,
  whishlistproducts: whishListReducer,
  fetchedCars: fetchedCarsReducer
})

