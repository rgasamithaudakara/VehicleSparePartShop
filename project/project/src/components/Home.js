import React,{Component} from 'react';

class Home extends Component{
    
    componentDidMount(){
       window.updateCarousel();
       window.reRenderRangeSlider();
	   
    }
    
    render(){
        return(
            <div className="wrap-body-inner">
                <div className="product product-grid product-grid-2 car m-t-lg-90 p-t-sm-35 m-b-lg-20">
                    <div className="heading">
                        <h3>Recent View Parts</h3>
                    </div>
                    <div className="row">
                        <div
                        id="fifi"
                        className="owl"
                        data-items="3"
                        data-itemsdesktop="2"
                        data-itemsdesktopsmall="2"
                        data-itemstablet="2"
                        data-itemsmobile="1"
                        data-pag="false"
                        data-buttons="true"
                        >
                            </div>
                     </div>   
                </div>
                <div className="banner-item banner-2x banner-bg-9 color-inher m-b-lg-50">
                <h3 className="f-weight-300">
                    Start Selling With <strong>SPAREShop</strong> Now!
                </h3>
                <p>No hidden fees or costs, you pay what you need.</p>
                <a className="ht-btn ht-btn-default">
                    Click to Add Product
                </a>
                </div>   
            </div>
        ); 
    }
}

export default Home ;