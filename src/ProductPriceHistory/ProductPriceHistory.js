import React from 'react';
import './ProductPriceHistory.css';
import ProductCard from '../ProductCard/ProductCard.js';
import SitesPicker from '../SitesPicker/SitesPicker.js';
import PriceChart from '../PriceChart/PriceChart.js';


const productPriceHistory = (props) => {
return (
<div className="product-price-history">
<ProductCard imageUrl={props.imageUrl} name={props.title} currentPrice={props.price} />
<SitesPicker />
<PriceChart chartTitle="PriceChart"/>
</div>
 );

}
export default productPriceHistory;