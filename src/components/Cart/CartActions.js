/** @format */

import React, { useState } from "react";
import { FaCreditCard, FaTrashAlt } from "react-icons/fa";
import DeleteAllCartHook from "../../hook/cart/delete-all-cart-hook";
import ApplyCouponToCartHook from "../../hook/cart/apply-coupon-to-cart-hook";
import GetAllCartHook from "../../hook/cart/get-all-cart-hook";
import { Button, Alert } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

const CartActions = ({ numOfCartItems }) => {
  const [res] = GetAllCartHook();
  const [onDelete] = DeleteAllCartHook();
  const [
    couponName,
    setCouponName,
    handleCouponName,
    onApplyCoupon,
    resCoupon,
  ] = ApplyCouponToCartHook(res?.data?.coupon);
  
  const [showAlert, setShowAlert] = useState(false);

  const handleDeleteConfirmation = () => {
    setShowAlert(true);
  };

  const handleDelete = () => {
    onDelete();
    setShowAlert(false);
  };

  return (
    <div className="card-right">
      {showAlert && (
        <Alert className="mt-3" variant="warning" onClose={() => setShowAlert(false)} dismissible>
          <Alert.Heading>تحذير</Alert.Heading>
          <p>هل أنت متأكد من حذف العربة؟</p>
          <Button className="mx-2" variant="danger" onClick={handleDelete}>
            نعم
          </Button >
          <Button variant="secondary" onClick={() => setShowAlert(false)}>
            إغلاق
          </Button>
        </Alert>
      )}
      <form className="promo-code-form">
        <input
          type="text"
          placeholder="أدخل كود الخصم"
          value={couponName}
          onChange={handleCouponName}
        />
        <Button type="button" onClick={onApplyCoupon}>
          تطبيق
        </Button>
      </form>
      <button className="site-btn checkout-btn">
        <FaCreditCard className="btn-icon" />
        الانتقال إلى الدفع
      </button>
      {numOfCartItems > 0 ? (
        <button className="site-btn sb-dark empty-cart-btn" onClick={handleDeleteConfirmation}>
          <FaTrashAlt className="btn-icon" />
          تفريغ السلة
        </button>
      ) : (
        ""
      )}
      <ToastContainer/>
    </div>
  );
};

export default CartActions;
