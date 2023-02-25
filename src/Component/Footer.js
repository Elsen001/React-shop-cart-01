import React from 'react'
import master from "../img/Mastercard_logo.jpg"
import visa from "../img/visa-logo-1.jpg"
import neteller from "../img/neteller-logo-big.jpg"
import skrill from "../img/unnamed.png"

const Footer = () => {
    return (
        <footer>
            <div className="footer-head">
                <div className="footer-head-list">
                    <h4>MAIN MENU</h4>
                    <ul>
                        <li><a href="">SHOP</a></li>
                        <li><a href="">PAGES</a></li>
                        <li><a href="">BLOGS</a></li>
                        <li><a href="">ABOUT</a></li>
                        <li><a href="">SEARCH</a></li>
                    </ul>
                </div>
                <div className="text">
                    <h4>TEXT COLUMN</h4>
                    <p>Share store details,promotions,or brand content with your customers</p>
                </div>
                <div className="newsteller">
                    <h4>NEWSTELLER</h4>
                    <p>Subscribe to get special offers, free giveaways,and once-in-a-lifetime deals.</p>
                    <div className="input-group">
                        <input type="text" placeholder='your-email@example.com' />
                        <button>JOIN</button>
                    </div>
                </div>
            </div>
            <div className="link-footer">
                <ul>
                    <li><a href="">ACCOUNT</a></li>
                    <li><a href="">SEARCH</a></li>
                    <li><a href="">PRIVACY POLICY</a></li>
                    <li><a href="">TERMS AND CONDITIONS</a></li>
                    <li><a href="">POWERED BY SHOP</a></li>
                </ul>
                <div className="payment">
                    <img src={master} alt="" />
                    <img src={visa} alt="" />
                    <img src={neteller} alt="" />
                    <img src={skrill} alt="" />
                </div>
                <div className="social-link">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
        </footer>
    )
}

export default Footer
