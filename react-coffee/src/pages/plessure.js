import { Component } from 'react';
import Navbar from '../components/navbar/index';
import Footer from '../components/footer/index';

import CoffeeBlockItem from '../components/our-coffee-block/index';

import CoffeeBlack from "../img/icons/cofee-icon-black.png";
import AboutPlessure from "../img/plessure-img.png";

const Plessure = ({coffeeBlockData}) => {
    const elements = coffeeBlockData.map(item => {
        const {...itemProps} = item;
        return(<CoffeeBlockItem {...itemProps}></CoffeeBlockItem>);
    });
    return (
        <>
            <section class="promo our-coffee plessure">
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
                            <img src={AboutPlessure} alt="coffee"></img>
                        </div>
                        <div class="col-4">
                            <div class="about-beans__title title">
                                About our goods
                            </div>
                            <div class="about-beans__icon icon">
                                <img src={CoffeeBlack} alt="icon"></img>
                            </div>
                            <div class="about-beans__text">
                                Extremity sweetness difficult behaviour he of. On <br></br>  disposal of as landlord horrible. <br></br> <br></br> 

                                Afraid at highly months do things on at. Situation <br></br>  recommend objection do intention <br></br> 
                                so questions.  <br></br> 
                                As greatly removed calling pleased improve an. <br></br>  Last ask him cold feel <br></br> 
                                met spot shy want. Children me laughing we <br></br>  prospect answered followed. At it went <br></br> 
                                is song that held help face.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="buy">
                <div class="container">
                    <div class="row">
                        {elements}
                    </div>
                </div>
            </section>


            <Footer></Footer>
        </>

    );
};

export default Plessure;