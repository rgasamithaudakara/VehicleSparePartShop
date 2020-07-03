import React,{Component} from 'react';
import { connect } from "react-redux";
import { removeFromWhishList,addToBasket} from '../actions';




class  login extends Component {


  render(){
    const parentStyle={
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
    }

    return <div className="wrap-body-inner"  >
    <div className="hidden-xs">
      <div className="row">
        <div className="col-lg-6">
          <ul className="ht-breadcrumb pull-left">
            <li className="home-act">
              <a href=" ">
                <i className="fa fa-home" />
              </a>
            </li>
            <li className="home-act">
              <a href=" ">Shop</a>
            </li>
            <li className="active">WishList</li>
          </ul>
        </div>
      </div>
    </div>
    <section className="block-cart m-b-lg-50 m-t-lg-30 m-t-xs-0" >
      <div>
        <div className="heading">
          <h3>Wishlist</h3>
        </div>
        <div style={parentStyle}>
          <div className="display-inline-block width-100" >

            {this.props.whishlistproducts.map((e)=>this.renderItem(e))}
            
            
            {/*
              <a href=" " className="ht-btn ht-btn-default pull-right">
              Proceed to check out
            </a>
            */}
          

          
            
          </div>
        </div>
        
      </div>
    </section>
  </div>;
  }
   

};


export default connect(mapStateToProps,{addToBasket,removeFromWhishList})(WhishList);


