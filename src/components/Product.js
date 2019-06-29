import React from 'react';
import '../App.css';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

const ProductList = props => {
  const {
    post_id,
    post_title,
    price,
    images,
    regular_price,
    rating_reviews: { rating, reviews }
  } = props;
  return (
    <div className="product-container">
      <Link to={`/product/${post_id}`} className="link-to-product">
        <img src={images} alt="Product Photo" />
        <p className="title">{post_title}</p>
      </Link>
      <div className="rating">
        <StarRatings
          rating={rating}
          starRatedColor="orange"
          numberOfStars={5}
          name="rating"
          starDimension="15px"
          starSpacing="5px"
        />
        {reviews}
      </div>
      <p className="price">
        AED {price}
        <span className="discount">
          {regular_price === price ? null : `Discount: ${regular_price - price} AED`}
        </span>
      </p>
    </div>
  );
};
export default ProductList;
