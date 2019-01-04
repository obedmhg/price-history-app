import React from 'react';
import './ProductPriceHistory.css';
import ProductCard from '../ProductCard/ProductCard.js';
import SitesPicker from '../SitesPicker/SitesPicker.js';
import PriceChart from '../PriceChart/PriceChart.js';


const productPriceHistory = (props) => {
return (
<div className="product-price-history">
<ProductCard imageUrl="https://ss423.liverpool.com.mx/xl/1077376891_1p.jpg" name="PS4" currentPrice="$6500.00" />
<SitesPicker />
<PriceChart chartTitle="PriceChart"/>
</div>
 );

}
export default productPriceHistory;