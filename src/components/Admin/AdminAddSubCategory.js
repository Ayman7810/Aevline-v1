import React from "react";
import { ToastContainer } from "react-toastify";
import SubCategoryHook from "../../hook/SubCategory/sub-category-hook";
import "./AdminAddSubCategory.css"; // تأكد من إضافة ملف CSS
import { Link } from "react-router-dom";

const AdminAddSubCategory = () => {
  const [name, loading, isPressed, handleSetName, handleSelected, dataCategory, handleSubmit, idCat] = SubCategoryHook();

  return (
    <main className="admin-add-subcategory-wrapper">
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
                إضافة تصنيف فرعي
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="form-group">
        <input
          value={name}
          onChange={handleSetName}
          type="text"
          className="input-form"
          placeholder="اسم التصنيف الفرعي"
        />
      </div>

      <div className="form-group">
        <select
          name="category"
          id="category"
          className="select input-form"
          onChange={handleSelected}
          value={idCat}
        >
          <option value="0">أختار تصنيف رئيسي</option>
          {dataCategory.data && dataCategory.data.length >= 1 ? (
            dataCategory.data.map((item, index) => (
              <option key={index} value={item._id}>
                {item.name}
              </option>
            ))
          ) : (
            <option value="none">لا يوجد تصنيفات رئيسية</option>
          )}
        </select>
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

export default AdminAddSubCategory;
