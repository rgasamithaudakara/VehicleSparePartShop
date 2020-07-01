import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { registerNav } from './modules/Navigation'
import { insertToken } from './redux/action/tokenAction'
import LoginContainer from './pages/loginsignin/LoginContainer'
import SigninContainer from './pages/loginsignin/SigninContainer'
import DashboardContainer from './pages/dashboard/DashboardContainer'
import ProductOverview from './pages/productOverview/ProductOverviewContainer'
import ShoppingBagContainer from './pages/shoppingBag/ShoppingBagContainer'
import CheckoutContainer from './pages/checkout/checkoutContainer'
import CheckoutSuccessContainer from './pages/checkoutSuccess/CheckoutSuccessContainer'
import CheckoutCancel from './pages/checkoutCancel/CheckoutCancel'
import Home from "./components/Home";
import Home1 from "./components/Home1";
import SharedLayout from "./components/SharedLayout";
import SharedLayout1 from "./components/SharedLayout1";
import CarShop from './components/CarsSpace/CarsShop';
import ProductsShop from "./components/ProductsSpace/ProductsShop";
import SellA_Car from "./components/sellA_Car"
import ContactUs from "./components/contactUs"
import CartFull from "./components/CartFull";
import CarDetails from './components/CarsSpace/CarDetails';
import WhishList from './components/WishList'

class App extends Component {
  componentDidMount() {
    this.props.insertToken()  
  }
  constructor(){
    super();
    this.state={
      carfilters:{}
    }
  }

  setCarsFilters(carfilters){
    
    this.setState({carfilters});
    
  }
  render() {

    return (
      <div>
        <Router ref={registerNav}>
          <Switch>
            <Route path="/signin" component={SigninContainer} />
            <Route path="/login" component={LoginContainer} />	
            <Route path="/dashboard" component={DashboardContainer} />	
				{	window.location.href == 'http://localhost:3000/home' ||	window.location.href == '/home'	||
			<SharedLayout>			
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/products" component={ProductsShop} />
                    <Route exact path="/cars" render={()=><CarShop filters={this.state.carfilters}/> } />
                    <Route exact path="/carso" component={CarDetails} />                    
                    <Route exact path="/sellacar" component={SellA_Car} />
                    <Route exact path="/contactus" component={ContactUs} />
                    <Route exact path="/products_cart" component={CartFull} />
                    <Route exact path="/whishlist" component={WhishList} />
                    <Route exact path="/cars/singlproduct" component={CarShop} />   
                    <Route exact path="/products/singlproduct" component={ProductsShop} />                                
            </SharedLayout>
				}
			   {	window.location.href == 'http://localhost:3000/home1' || window.location.href == '/home1'	||	
			<SharedLayout1>			
                    <Route exact path="/home1" component={Home} />
                    <Route exact path="/products" component={ProductsShop} />
                    <Route exact path="/cars" render={()=><CarShop filters={this.state.carfilters}/> } />
                    <Route exact path="/carso" component={CarDetails} />                    
                    <Route exact path="/sellacar" component={SellA_Car} />
                    <Route exact path="/contactus" component={ContactUs} />
                    <Route exact path="/products_cart" component={CartFull} />
                    <Route exact path="/whishlist" component={WhishList} />
                    <Route exact path="/cars/singlproduct" component={CarShop} />   
                    <Route exact path="/products/singlproduct" component={ProductsShop} />                                
            </SharedLayout1>
				}
            <Route key="productOverview" path="/product-overview" component={ProductOverview} />,
            {this.props.token && [
              <Route key="ShoppingBagContainer" path="/bag" component={ShoppingBagContainer} />,
              <Route key="Checkout" path="/checkout" component={CheckoutContainer} />,
              <Route key="success" path="/success_page" component={CheckoutSuccessContainer} />,
              <Route key="cancel" path="/cancel_page" component={CheckoutCancel} />,
            ]}
            <Route key="dashboard" path="/dashboard" component={Home} />
            <Route exact path="/" component={Home} />
            <Redirect to='/login' />
          </Switch>
        </Router>		
      </div>
    );
  }
}
const mapStoreToProps = state => ({
  token: state.token.user_token
})
const mapDispatchToProps = {
  insertToken
}
export default connect(mapStoreToProps, mapDispatchToProps)(App);
