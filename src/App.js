import React, { Component } from 'react';
import axios from 'axios';
import ProductPriceHistory from './ProductPriceHistory/ProductPriceHistory.js';


class App extends Component {
  
  state = {
    products : []
  };
  
  componentDidMount() {
    const endpoint = '/products';
    axios.get(endpoint)
      .then(response => {
        this.setState({products: response.data})
      })
      .catch(error => {
        alert('Something went wrong at service : ' + endpoint);
      });
  }

  render() {
    const productsPriceHistory = this.state.products.map(product => {
      return <ProductPriceHistory title={product.title} imageUrl={product.imageUrl} price={product.price} />;
    });
    return (
      <div className="App">
          {productsPriceHistory}
      </div>
    );
  }
}

export default App;
