import '../../app/app.css';
import BuyWrapper from "../../img/buy-wrapper-img.png";

const CoffeeBlockItem = (props) => {


    const {title, country, price} = props;
    let classNames = "col-4";
    return (
        <div className={classNames}>
            <div class="buy__block">
                <div class="buy__block-img">
                    <img src={BuyWrapper} alt="coffee-img"></img>
                </div>
                <div class="buy__block-title"><a href="/our-coffee-block">{title}</a> <br></br>{country}</div>
                <div class="buy__block-price">{price}</div>
            </div>
        </div>
    )
}

export default CoffeeBlockItem;