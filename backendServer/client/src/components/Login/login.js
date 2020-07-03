import React,{Component} from 'react';

class Home extends React.Component{

    componentDidMount(){
       window.updateCarousel();
       window.reRenderRangeSlider();
    }
    
    render(){
        return(
                <div className="product  product-grid-1 car m-t-lg-90 p-t-sm-35 m-b-lg-20">
                    <div className="heading">
                        <h3>RECENT CARS</h3>
                    </div>
                    
            </div>
        ); 
    }
}

export default Home ;