import React, { Fragment, useEffect } from 'react';
import '../App.css';

const SinglePost = props => {
  useEffect(() => {
    props.getSingleProduct(props.match.params.id);
  });
  const { post_title, price, images } = props.product;
  return (
    <div className="single_product-container">
      <div className="single_product-main">
        <h2 className="single-post-title">{post_title}</h2>
        <p className="single-post-price">Price: AED {price}</p>
        <img src={images} className="single_product-image" />
      </div>
      <div className="details">
        <div className="tabs">
          <p>Details</p>
          <p>Specifications</p>
          <p>Review</p>
          <p>Questions & Answers</p>
        </div>
        <div className="details-container">
          {post_title}
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
