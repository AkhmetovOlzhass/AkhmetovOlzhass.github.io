import React from "react";
import CoffeeBlack from "../../img/icons/cofee-icon-black.png";
const Footer = () => {
    return (
    <>
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer__wrapper">
                        <ul class="footer__menu menu">
                            <li><a href="/">Coffee house</a></li>
                            <li><a href="/our-coffee">Our coffee</a></li>
                            <li><a href="/plessure">For your pleasure</a></li>
                        </ul>
                    </div>
                    <div class="about__icon icon">
                        <img src= {CoffeeBlack} alt="icon"></img>
                    </div>
                </div>
            </div>
        </footer>
    </>
    );
};
export default Footer;