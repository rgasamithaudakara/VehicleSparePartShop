import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer id="wrap-footer" className="bg-gray-1 color-inher">
            <div className="footer-top">
            <div className="container">
                <div className="bg-gray-1 p-l-r">
                <div className="row">
                    <div className="col-xs-12 col-sm-4 col-md-4">
                    <div className="heading-1">
                        <h3>Company Info</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod temp incidunt ut .
                    </p>
                    <ul className="list-default">
                        <li>
                        <i className="fa fa-signal" />Sri Lanka
                        </li>
                        <li>
                        <a href="tel:01686813774">
                            <i className="fa fa-phone" />0123-456-789
                        </a>
                        </li>
                        <li>
                        <i className="fa fa-envelope-o" />Support@htmlcs.com
                        </li>
                        <li>
                        <i className="fa fa-globe" />http://www.ndktheme.com
                        </li>
                    </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                    <div className="newsletter text-left">
                        <div className="heading-1">
                        <h3>Newsletter</h3>
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod temp incidunt ut{" "}
                        </p>
                        <form>
                        <div className="form-group">
                            <input
                            type="email"
                            className="form-control form-item"
                            id="Email1"
                            placeholder="Email"
                            />
                        </div>
                        <button type="submit" className="ht-btn ht-btn-default">
                            Subscribe
                        </button>
                        </form>
                    </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                    <div className="heading-1">
                        <h3>Quick Link</h3>
                    </div>
                    <ul className="list-default">
                        <li>
                        <i className="fa fa-angle-right" />
                          Privacy Policy
                        </li>
                        <li>
                        <a  >
                        <i className="fa fa-angle-right" />
                          Community
                        </a>
                        </li>
                        <li>
                        <a href="http://localhost:3001/" >
						  <i className="fa fa-angle-right" />Blog
                        </a>
                        </li>
                        <li>
                        <i className="fa fa-angle-right" />
                          Guide Use
                        </li>
                        <li>
                        <i className="fa fa-angle-right" />
                          Our Services
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="footer-bt color-inher">
            <div className="container">
                <div className="bg-gray-0c p-l-r">
                <div className="row">
                    <div className="col-md-6">

                    </div>
                    <div className="col-md-6">
                    <ul className="social-icon list-inline pull-right">
                        <li>
                        <a  >
                            <i className="fa fa-facebook" />
                        </a>
                        </li>
                        <li>
                        <a  >
                            <i className="fa fa-google" />
                        </a>
                        </li>
                        <li>
                        <a  >
                            <i className="fa fa-youtube" />
                        </a>
                        </li>
                        <li>
                        <a  >
                            <i className="fa fa-facebook" />
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
      </footer>
    );
};

export default Footer;