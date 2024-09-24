import React from "react";
import { ToastContainer } from "react-toastify";
import AdminAddCategoryHook from "../../hook/Category/admin-add-category-hook";
import "./AdminAddCategory.css"; // تأكد من إضافة ملف CSS
import { Link } from "react-router-dom";

const AdminAddCategory = () => {
  const [img, name, loading, isPressed, onImageChange, handleSubmit, setName] = AdminAddCategoryHook();

  return (
    <main className="admin-add-category-wrapper">
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
                إضافة تصنيف
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="form-group">
        <label className="text-form">صورة التصنيف</label>
        <div className="image-upload">
          <label htmlFor="upload-photo">
            <img src={img} alt="تصنيف" className="category-image" />
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
          placeholder="اسم التصنيف"
          onChange={setName}
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
        <h3>تم التنفيذ</h3>
      )}

      <ToastContainer />
    </main>
  );
};

export default AdminAddCategory;
