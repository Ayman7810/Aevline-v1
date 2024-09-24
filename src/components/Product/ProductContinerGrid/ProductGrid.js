/** @format */

import React, { useState } from "react";
import {
  FaStar,
  FaRegStar,
  FaHeart,
  FaShoppingCart,
  FaEye,
  FaSync,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import AddToCartHook from "../../../hook/cart/add-to-cart-hook";
import WishListHook from "../../../hook/wishList/wish-list-hook";
import "./style.css";

const ProductGrid = ({
  imgSrcDefault,
  imgSrcHover,
  title,
  price,
  priceAfterDiscount,
  id,
  fivProd,
  products,
  ratingsAverage,
  ratingsQuantity,
}) => {
  const [HeartIcon, fill, handelFav] = WishListHook(id, fivProd, products);
  const [handelAddToCart] = AddToCartHook(id);

  return (

    <div className="col-md-3 mb-4">
      <div className="card product-card">
        <div className="position-relative">
          <Link to={`/producte-detalis/${id}`}>
            <img
              src={imgSrcDefault}
              alt={title}
              className="card-img-top product-img default"
            />
            <img
              src={imgSrcHover}
              alt={title}
              className="card-img-top product-img hover"
            />
          </Link>
          <div className="showcase-actions">
            <button
              className="btn-action"
              aria-label="Sync"
              onClick={handelAddToCart}>
              <FaShoppingCart />
            </button>
            <Link to={`/producte-detalis/${id}`}>
              <button className="btn-action" aria-label="View Details">
                <FaEye />
              </button>
            </Link>
            <button
              className="btn-action"
              aria-label="Add to Favorites"
              onClick={handelFav}
              style={{ color: HeartIcon ? "#ff8f9c" : "#777" }} // تغيير اللو
            >
              {HeartIcon ? <FaHeart /> : <FaHeart color="#7777" />}
            </button>
          </div>
        </div>

        <div className="card-body">
          <h5 className="card-title showcase-title">{title}</h5>
          <div className="product-rating">
            {Array.from({ length: Math.floor(ratingsAverage) }, (_, index) => (
              <FaStar key={index} />
            ))}
            {ratingsAverage % 1 !== 0 && (
              <FaStar key="half" className="half-star" />
            )}
            {Array.from(
              { length: 5 - Math.ceil(ratingsAverage) },
              (_, index) => (
                <FaRegStar key={index + Math.floor(ratingsAverage)} />
              )
            )}
          </div>
          <a href="#" className="showcase-category" style={{color:'#777'}}>
            عدد المقيمين
            <b className="mx-1"> {ratingsQuantity}</b>
          </a>
          <div className="price-box d-flex justify-content-center">
            <p className="price" dir="ltr">
              {priceAfterDiscount ? (
                <>
                  <span style={{ color: "#ff66b2" }} dir="rtl">
                    {priceAfterDiscount}
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
                    {price}
                    <b className="me-1">ريال</b>
                  </span>
                </>
              ) : (
                <span>{price} ريال</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
