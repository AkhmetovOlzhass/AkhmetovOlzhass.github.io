import { Component } from 'react';
import Navbar from '../components/navbar/index';
import Footer from '../components/footer/index';

import CoffeeBlockItem from '../components/our-coffee-block/index';
import SearchPanel from '../components/search-panel/index';
import AppFilter from '../components/app-filter/index';

import CoffeeBlack from "../img/icons/cofee-icon-black.png";
import AboutBeans from "../img/about-beans-img.png";

const OurCoffee = ({coffeeBlockData, onUpdateSearch, onFilter, filter}) => {
    const elements = coffeeBlockData.map(item => {
        const {...itemProps} = item;
        return(<CoffeeBlockItem {...itemProps}></CoffeeBlockItem>);
    });
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
                            <img src={AboutBeans} alt="coffee"></img>
                        </div>
                        <div class="col-4">
                            <div class="about-beans__title title">
                                About our beans
                            </div>
                            <div class="about-beans__icon icon">
                                <img src={CoffeeBlack} alt="icon"></img>
                            </div>
                            <div class="about-beans__text">
                                Extremity sweetness difficult behaviour he of. On <br></br> disposal of as landlord horrible. <br></br><br></br>

                                Afraid at highly months do things on at. Situation <br></br> recommend objection do intention <br></br>
                                so questions.  <br></br>
                                As greatly removed calling pleased improve an. <br></br> Last ask him cold feel <br></br>
                                met spot shy want. Children me laughing we <br></br> prospect answered followed. At it went <br></br>
                                is song that held help face.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="buy">
                <div class="container">
                    <div class="row">
                        <div class="offset-2 col-4 buy__wrapper">
                            <div class="buy__wrapper-text">Lookiing for</div>
                            <SearchPanel onUpdateSearch = {onUpdateSearch}></SearchPanel>
                        </div>
                        <div class="offset-1 col-4 buy__wrapper">
                            <div class="buy__wrapper-text">Or filter</div>
                            <AppFilter filter = {filter} onFilter = {onFilter}></AppFilter>
                            {/* <div class="buy__wrapper-btns">
                                <button class="buy__wrapper-button">Brazil</button>
                                <button class="buy__wrapper-button">Kenya</button>
                                <button class="buy__wrapper-button">Columbia</button>
                            </div> */}
                        </div>
                    </div>

                    <div class="row">
                        {elements}
                        {/* <div class="col-4">
                            <div class="buy__block">
                                <div class="buy__block-img">
                                    <img src={BuyWrapper} alt="coffee-img"></img>
                                </div>
                                <div class="buy__block-title"><a href="/our-coffee-block">AROMISTICO Coffee 1 kg</a> <br></br>Brazil</div>
                                <div class="buy__block-price">6.99$</div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="buy__block">
                                <div class="buy__block-img">
                                    <img src={BuyWrapper} alt="coffee-img"></img>
                                </div>
                                <div class="buy__block-title"><a href="/our-coffee-block">AROMISTICO Coffee 1 kg</a> <br></br>Brazil</div>
                                <div class="buy__block-price">6.99$</div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="buy__block">
                                <div class="buy__block-img">
                                    <img src={BuyWrapper} alt="coffee-img"></img>
                                </div>
                                <div class="buy__block-title"><a href="/our-coffee-block">AROMISTICO Coffee 1 kg</a> <br></br>Brazil</div>
                                <div class="buy__block-price">6.99$</div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="buy__block">
                                <div class="buy__block-img">
                                    <img src={BuyWrapper} alt="coffee-img"></img>
                                </div>
                                <div class="buy__block-title"><a href="/our-coffee-block">AROMISTICO Coffee 1 kg</a> <br></br>Brazil</div>
                                <div class="buy__block-price">6.99$</div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="buy__block">
                                <div class="buy__block-img">
                                    <img src={BuyWrapper} alt="coffee-img"></img>
                                </div>
                                <div class="buy__block-title"><a href="/our-coffee-block">AROMISTICO Coffee 1 kg</a> <br></br>Brazil</div>
                                <div class="buy__block-price">6.99$</div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </>

    );
};

export default OurCoffee;