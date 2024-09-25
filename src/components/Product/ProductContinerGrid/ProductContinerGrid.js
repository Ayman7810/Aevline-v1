import React from "react";
import ProductGrid from "./ProductGrid"; // تأكد من صحة المسار
import "./style.css"; // تأكد من تضمين ملف CSS
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import GetAllWishListHook from "../../../hook/wishList/get-all-wish-list-hook";
import { ToastContainer } from "react-toastify";

const ProductContainerGrid = ({ products = [], title, btn }) => {
  const [Prod, fivProd] = GetAllWishListHook(products);
 

  return (
    <div className="container">
      <div className="product-header">
        <h2>{title}</h2>
        {btn && (
          <Button className="rounded-pill btn-more" style={{ backgroundColor: "#ff66b2", border: "none" }}>
            <Link to="/products" style={{ textDecoration: "none", color: "#fff" }}>
              المزيد
            </Link>
          </Button>
        )}
      </div>
      <div className="row">
       
           {products && products.length > 0 ? (
          products.map((item) => (
            <ProductGrid
            products={Prod}
            key={item._id}
            id={item._id}
            imgSrcDefault={item.images[0]}
            imgSrcHover={item.images[1]}
            title={item.title}
            price={item.price}
            priceAfterDiscount={item.priceAfterDiscount}
            ratingsAverage={item.ratingsAverage}
            fivProd={fivProd}
            ratingsQuantity={item.ratingsQuantity}
           
            />
          ))
        ) : (
          <div>
            لا يوجد منتجات لعرضها
            </div>
        )}
      </div>
    </div>
  );
};

export default ProductContainerGrid;
