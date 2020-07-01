import React from 'react';
import swal from 'sweetalert';

const  Sell = () => {
    return(
        <div className="wrap-body-inner">
            <div className="hidden-xs">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="ht-breadcrumb pull-left">
                        <li className="home-act"><a  ><i className="fa fa-home"></i></a></li>
                        <li className="home-act"><a  >Parts</a></li>
                        <li className="active">Add Part</li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="m-t-lg-30 m-t-xs-0 m-b-lg-50">
                <div>
                    <div className="row">
                        <div className="col-md-9 col-lg-9">
                            <div className="bg-gray-f5 bg1-gray-15 p-lg-30 p-xs-15">
                                <div className="m-b-lg-10">
                                    <div className="heading-1">
                                        <h3>Part Details</h3>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-item" placeholder="Title" required/>
                                                <p className="color1-8 m-t-lg-5 f-14">Maximum 100 characters</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="number" className="form-control form-item" placeholder="Price" required/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="number" className="form-control form-item" placeholder="Price old" required/>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-12">
                                            <div className="form-group">
                                                <textarea className="form-control h-200 form-item m-b-lg-5" placeholder="Description" rows="3" required></textarea>
                                                <p className="color1-8 m-t-lg-5 f-14">Maximum 500 characters</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-b-lg-40">
                                    <div className="heading-1">
                                        <h3>Upload Images</h3>
										<div className="custom-file">
                                                <input type="file" className="custom-file-input" placeholder="images" required/>
                                            </div>
                                    </div>

                                    
                                </div>
                                <div className="m-b-lg-20">
                                    <div className="heading-1">
                                        <h3>General Information </h3>
                                    </div>
                                    
                                    <div className="row">
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-item" placeholder="Manufacturer" required/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-item" placeholder="Model" required/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-item" placeholder="YearOfMake" required/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-item" placeholder="Generation" required/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-item" placeholder="condition" required/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 m-b-lg-20">
                                            <div className="select-wrapper">
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        Type
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                                        <li>New</li>
                                                        <li>Used</li>
                                                        <li>Recondition</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-item" placeholder="Weight" required/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-item" placeholder="size" required/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-item" placeholder="code" required/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-item" placeholder="modification" required/>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="m-b-lg-30">
                                    <div className="heading-1">
                                        <h3>Service Information</h3>
                                    </div>
									<div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="date" className="form-control form-item" placeholder="service date" required/>
                                            </div>
                                        </div>
					                <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-item" placeholder="items of service" required/>
                                            </div>
                                        </div>

                                </div>
                                <div className="m-b-lg-20">
                                    <div className="heading-1">
                                        <h3>TECHNICAL SPECIFICATIONS</h3>
                                    </div>   
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-item" placeholder="durability" required/>
                                            </div>
                                        </div>
									<div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-item" placeholder="Material" required/>
                                            </div>
                                        </div>
                                </div>
                                <div className="m-b-lg-20">
                                    <div className="heading-1">
                                        <h3>Contact Details</h3>
                                    </div>
                                    <p className="m-b-lg-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit et dolore magna aliqua</p>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-item" placeholder="Your Name" required/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-item" placeholder="Email" required/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="number" className="form-control form-item" placeholder="Phone" required/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-item" placeholder="Address" required/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-item" placeholder="Website" required/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-item" placeholder="Other link" required/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-item" placeholder="Country" required/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-item" placeholder="City" required/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-item" placeholder="Location" required/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-item" placeholder="Location" required/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 m-t-lg-10"><button type="submit" className="ht-btn ht-btn-default">Add</button></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="m-t-xs-30">
                                <div className="heading-1">
                                    <h3>Trouble Uploading?</h3>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                </p>
                                <ul className="list-default">
                                    <li><a  ><i className="fa fa-angle-right"></i>Lorem ipsum dolor sit amet</a></li>
                                    <li><a  ><i className="fa fa-angle-right"></i>Lorem ipsum dolor sit amet</a></li>
                                    <li><a  ><i className="fa fa-angle-right"></i>Lorem ipsum dolor sit amet</a></li>
                                    <li><a  ><i className="fa fa-angle-right"></i>Lorem ipsum dolor sit amet</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

};


export default Sell ;
