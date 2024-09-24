/** @format */

import React from "react";
import { ToastContainer } from "react-toastify";
import AdminAddBrandHook from "../../hook/Brand/admin-add-brand-hook";
import "./AdminAddBrand.css"; // تأكد من إضافة ملف CSS
import { Link } from "react-router-dom";

const AdminAddBrand = () => {
  const [
    img,
    onImageChange,
    handleName,
    name,
    handleSubmit,
    loading,
    isPressed,
  ] = AdminAddBrandHook();

  return (
    <main className="admin-add-brand-wrapper">
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
                اضافة ماركة
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="form-group">
        <label className="text-form">صورة الماركة</label>
        <div className="image-upload">
          <label htmlFor="upload-photo">
            <img src={img} alt="" className="brand-image" />
          </label>
          <input
            type="file"
            id="upload-photo"
            name="photo"
            onChange={onImageChange}
            className="image-input"
          />
        </div>
      </div>

      <div className="form-group">
        <input
          type="text"
          className="input-form"
          placeholder="اسم الماركة"
          onChange={handleName}
          value={name}
        />
      </div>

      <button className="btn-save" onClick={handleSubmit}>
        حفظ التعديلات
      </button>

      {loading ? (
        isPressed && (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )
      ) : (
        <h3>تم الانتهاء</h3>
      )}

      <ToastContainer />
    </main>
  );
};

export default AdminAddBrand;
