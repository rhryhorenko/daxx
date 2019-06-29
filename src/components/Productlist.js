import React, { useEffect } from 'react';
import '../App.css';
import Product from './Product';

const ProductList = props => {
  useEffect(() => {
    props.getAllProducts();
  }, []);
  const {
    products,
    products: { post_id }
  } = props;
  return (
    <div className="products-container">
      {products.map((product, i) => (
        <div className="col span_1_of_5" key={i}>
          <Product {...product} key={post_id} />
        </div>
      ))}
    </div>
  );
};
export default ProductList;
