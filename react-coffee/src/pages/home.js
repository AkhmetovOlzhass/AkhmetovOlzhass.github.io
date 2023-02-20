import { Component } from 'react';
import Navbar from '../components/navbar/index';
import Footer from '../components/footer/index';

import CoffeeWhite from "../img/icons/cofee-icon-white.png";
import CoffeeBlack from "../img/icons/cofee-icon-black.png";
import Best1 from "../img/icons/best1.png";
import Best2 from "../img/icons/best2.png";
import Best3 from "../img/icons/best3.png";
class Home extends Component {
    render() {
        return (
            <>
                <section class="promo">
                    <div class="container">
                        <div class="row">
                            <Navbar></Navbar>
                            <h1 class="promo__title">Everything You Love About Coffee</h1>
                            <div class="promo__icon icon">
                                <img src={CoffeeWhite} alt="icon"></img>
                            </div>
                            <div class="promo__text">
                                We makes every day full of energy and taste <br></br>
                                Want to try our beans?
                            </div>
                            <a href="/our-coffee" class="promo__button">More</a>
                        </div>
                    </div>
                </section>

                <section class="about">
                    <div class="container">
                        <div class="row">
                            <h2 class="title about__title">About Us</h2>
                            <div class="about__icon icon">
                                <img src={CoffeeBlack} alt="icon"></img>
                            </div>
                            <div class="about__text">
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br></br>
                                Afraid at highly months do things on at. Situation recommend objection do intention <br></br>
                                so questions. As greatly removed calling pleased improve an. Last ask him cold feel <br></br>
                                met spot shy want. Children me laughing we prospect answered followed. At it went <br></br>
                                is song that held help face. <br></br><br></br>

                                Now residence dashwoods she excellent you. Shade being under his bed her, Much <br></br>
                                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant <br></br>
                                horrible but confined day end marriage. Eagerness furniture set preserved far <br></br>
                                recommend. Did even but nor are most gave hope. Secure active living depend son <br></br>
                                repair day ladies now.
                            </div>
                        </div>
                    </div>
                </section>

                <section class="best">
                    <div class="container">
                        <div class="row">
                            <h2 class="title about__title">Our best</h2>
                            <div class="col-4">
                                <div class="best__block">
                                    <div class="best__block-img">
                                        <img src={Best1} alt="item1"></img>
                                    </div>
                                    <div class="best__block-title"><a href="/our-coffee-block">Solimo Coffee Beans 2 kg</a></div>
                                    <div class="best__block-price">10.73$</div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="best__block">
                                    <div class="best__block-img">
                                        <img src={Best2} alt="item2"></img>
                                    </div>
                                    <div class="best__block-title"><a href="/our-coffee-block">Presto Coffee Beans 1 kg</a></div>
                                    <div class="best__block-price">15.99$</div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="best__block">
                                    <div class="best__block-img">
                                        <img src={Best3} alt="item3"></img>
                                    </div>
                                    <div class="best__block-title"><a href="/our-coffee-block">AROMISTICO Coffee 1 kg</a></div>
                                    <div class="best__block-price">6.99$</div>
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
 
export default Home;