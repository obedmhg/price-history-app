import React from 'react';
import './ProductCard.css';

const productCard = (props) => {
return (
<div className="product-card">

<img width="250px" height="250px" src={props.imageUrl} alt={props.name}/>
<h2>{props.name}</h2>
<h3>{props.currentPrice}</h3>

</div>

 );

}
export default productCard;