import React from 'react';
import {
  FaHeart,
  FaEye,
  FaSync,
  FaShoppingCart,
  FaStar,
  FaRegStar
} from 'react-icons/fa';
import './style.css'; 

const ProductSlider = ({
  imgSrcDefault,
  imgSrcHover,
  altText,
  badge,
  badgeClass,
  category,
  title,
  rating,
  price,
  oldPrice
}) => {
  return (
    <div className="product-card">
      <div className="product-img-container">
        <img
          src={imgSrcDefault}
          alt={altText}
          className="product-img default"
        />
        <img
          src={imgSrcHover}
          alt={altText}
          className="product-img hover"
        />
        {badge && (
          <p className={`showcase-badge ${badgeClass}`}>
            {badge}
          </p>
        )}
        <div className="showcase-actions">
          <button className="btn-action" aria-label="Add to Favorites">
            <FaHeart />
          </button>
          <button className="btn-action" aria-label="View Details">
            <FaEye />
          </button>
          <button className="btn-action" aria-label="Sync">
            <FaSync />
          </button>
          <button className="btn-action" aria-label="Add to Cart">
            <FaShoppingCart />
          </button>
        </div>
      </div>
      <div className="card-body">
        <a href="#" className="showcase-category">{category}</a>
        <a href="#">
          <h5 className="card-title showcase-title">{title}</h5>
        </a>
        <div className="product-rating">
          {Array.from({ length: rating }, (_, index) => (
            <FaStar key={index} />
          ))}
          {Array.from({ length: 5 - rating }, (_, index) => (
            <FaRegStar key={index + rating} />
          ))}
        </div>
        <div className="price-box">
          <p className="price">{price}</p>
          {oldPrice && <del>{oldPrice}</del>}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
