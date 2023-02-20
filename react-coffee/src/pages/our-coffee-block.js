import { Component } from 'react';
import Navbar from '../components/navbar/index';
import Footer from '../components/footer/index';

import CoffeeBlock from "../img/about-coffee-block.jpg";
import CoffeeBlack from "../img/icons/cofee-icon-black.png";

class OurCoffeeBlock extends Component {
    render(){
        return (
            <>
                <section class="promo our-coffee">
                    <div class="container">
                        <div class="row">
                            <Navbar></Navbar>
                            <div class="promo__title">Our Coffee</div>
                        </div>
                    </div>
                </section>

                <section class="about-beans">
                    <div class="container">
                        <div class="row">
                            <div class="col-6 about-beans__img">
                                <img src={CoffeeBlock} alt="coffee"></img>
                            </div>
                            <div class="col-5">
                                <div class="about-beans__title about-beans__coffee title">
                                    About it
                                </div>
                                <div class="about-beans__icon icon">
                                    <img src={CoffeeBlack} alt="icon"></img>
                                </div>
                                <div class="about-beans__text about-beans__coffee-text">
                                    <span>Country:</span> Brasil <br></br><br></br>

                                    <span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br><br></br><br></br>

                                    <span>Price: </span><b>16.99$</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer></Footer>
            </>
    
        );
    }
};

export default OurCoffeeBlock;