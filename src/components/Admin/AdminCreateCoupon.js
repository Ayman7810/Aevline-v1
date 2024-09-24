/** @format */

import React, { useRef } from "react";
import { ToastContainer } from "react-toastify";
import AdminCreateNewCouponHook from "../../hook/Coupon/admin-create-new-coupon-hook";
// import AdminAllCouponCard from "./AdminAllCouponCard";
import AdminAllCouponHook from "../../hook/Coupon/admin-all-coupon-hook";
import Pagenation from "../../components/Uitilty/Pagenation/Pagenation";
import "./AdminCreateCoupon.css"; // تأكد من إضافة ملف CSS
import { Link } from "react-router-dom";
import AdminAllCouponCard from "./AdminAllCouponCard";

const AdminCreateCoupon = () => {
  const refDate = useRef();

  const [
    couponDate,
    couponName,
    couponValue,
    handleDate,
    handleName,
    handleValue,
    handleSubmit,
  ] = AdminCreateNewCouponHook();

  const [coupon, pageCount, noPress] = AdminAllCouponHook();
  return (
    <main className="admin-create-coupon-wrapper">
      <div className="header">
        <div className="left">
          <h1>لوحة التحكم</h1>
          <ul className="breadcrumb">
            <li>
              <Link to="/Admin/index">لوحة التحكم</Link>
            </li>
            <span>/</span>
            <li>
              <a href="#" className="active">
                إضافة كوبون
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="form-group">
        <input
          type="text"
          className="input-form"
          placeholder="اسم الكوبون"
          onChange={handleName}
          value={couponName}
        />
      </div>

      <div className="form-group">
        <input
          ref={refDate}
          type="text"
          className="input-form"
          placeholder="تاريخ انتهاء الكوبون"
          onFocus={() => (refDate.current.type = "date")}
          onBlur={() => (refDate.current.type = "text")}
          onChange={handleDate}
          value={couponDate}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          className="input-form"
          placeholder="النسبة المئوية للخصم"
          onChange={handleValue}
          value={couponValue}
        />
      </div>

      <button className="btn-save" onClick={handleSubmit}>
        حفظ التعديلات
      </button>

      <div className="coupons-list">
        {coupon.data && coupon.data.length > 0 ? (
          coupon.data.map((item) => (
            <AdminAllCouponCard coupon={item} key={item.id} />
          ))
        ) : (
          <h2>لا يوجد كوبونات</h2>
        )}
      </div>

      {pageCount > 0 && <Pagenation noPress={noPress} PageCount={pageCount} />}

      <ToastContainer />
    </main>
  );
};

export default AdminCreateCoupon;
