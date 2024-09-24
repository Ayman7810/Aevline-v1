/** @format */

import React from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaRegStar,
  FaHeart,
  FaShoppingCart,
  FaEye,
  FaSync,
} from "react-icons/fa";
import WishListHook from "../../../hook/wishList/wish-list-hook";

const ProductCard = ({ item, isFavorite }) => {
  const [HeartIcon, fill, handleFav] = WishListHook(item._id, isFavorite);

  return (
    <div className="col-md-3 mb-4">
      <div className="card product-card" >
        <div className="position-relative">
          <Link to={`/producte-detalis/${item._id}`}>
            <img
              src={item.images[0]}
              alt={item.title}
              className="card-img-top product-img default"
            />
            <img
              src={item.images[1]}
              alt={item.title}
              className="card-img-top product-img hover"
            />
          </Link>
          <div className="showcase-actions">
            <button className="btn-action" aria-label="Sync">
              <FaShoppingCart />
            </button>
            <Link to={`/producte-detalis/${item._id}`}>
              <button className="btn-action" aria-label="View Details">
                <FaEye />
              </button>
            </Link>
            <button
              className="btn-action"
              aria-label="Add to Favorites"
              onClick={handleFav}
              style={{ color: HeartIcon ? "#ff8f9c" : "#777" }} // تغيير اللون حسب الحالة
            >
              {HeartIcon ? <FaHeart /> : <FaRegStar />}
            </button>
            <button className="btn-action" aria-label="Add to Cart">
              <FaSync />
            </button>
          </div>
        </div>

        <div className="card-body">
          <h5 className="card-title showcase-title">{item.title}</h5>
          <div className="product-rating">
            {Array.from(
              { length: Math.floor(item.ratingsAverage) },
              (_, index) => (
                <FaStar key={index} />
              )
            )}
            {item.ratingsAverage % 1 !== 0 && (
              <FaStar key="half" className="half-star" />
            )}
            {Array.from(
              { length: 5 - Math.ceil(item.ratingsAverage) },
              (_, index) => (
                <FaRegStar key={index + Math.floor(item.ratingsAverage)} />
              )
            )}
          </div>
          <div className="price-box d-flex justify-content-center">
            <p className="price">
              {item.priceAfterDiscount ? (
                <>
                  <span style={{ color: "#ff66b2" }} dir="rtl">
                    {item.priceAfterDiscount}
                    <b className="me-1">ريال</b>
                  </span>
                  <span
                    dir="rtl"
                    style={{
                      textDecoration: "line-through",
                      fontWeight: "initial",
                      marginLeft: "10px",
                      color: "#777",
                    }}>
                    {item.price}
                    <b className="me-1">ريال</b>
                  </span>
                </>
              ) : (
                <span>{item.price} ريال</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
