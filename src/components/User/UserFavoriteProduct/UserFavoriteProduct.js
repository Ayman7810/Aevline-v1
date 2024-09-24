/** @format */

import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProductes } from "../../../redux/action/producteAction.js";
import ProductCard from "./ProductCard.js"; // استيراد المكون الجديد
import getAllWishListHhook from "../../../hook/wishList/get-all-wish-list-hook.js";
import { ToastContainer } from "react-toastify";

const UserFavoriteProduct = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllProductes());
  }, [dispatch]);

  const items = useSelector((state) => state.productes.allProduct.data);
  const [Prod, fivProd] = getAllWishListHhook(items);
  const filteredItems = items?.filter((item) => fivProd?.includes(item._id));
  // console.log(filteredItems.length)
  return (
    <main>
      <div className="header">
        <div className="left">
          <h1>الصفحة الشخصية</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">الصفحة الشخصية</a>
            </li>
            <span>/</span>
            <li>
              <a href="#" className="active">
              قائمة المفضلة
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
      
          <Row className="justify-content-start">
            {filteredItems && filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <ProductCard key={item._id} item={item} isFavorite={fivProd} />
              ))
            ) : (
              <div>لا توجد منتجات مفضلة</div>
            )}
          </Row>
          <ToastContainer />
        
      </div>
    </main>
  );
};

export default UserFavoriteProduct;
