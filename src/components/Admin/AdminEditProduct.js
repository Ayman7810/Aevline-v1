import React from "react";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import { ToastContainer } from "react-toastify";
import { CompactPicker } from "react-color";
import adminEditProducteHook from "../../hook/Producte/admin-edit-producte-hook";
import "./AdminEditProduct.css"; // تأكد من إضافة ملف CSS
import add from "../../images/dashbord/admin/add.png";
import { Link, useParams } from "react-router-dom";

const AdminEditProduct = () => {
  const { id } = useParams();
  const [
    producteData, images, setImages, prodName, handelProdName,
    prodDrecription, handelProdDrecription, priceBefor, handelPriceBefor,
    priceAfter, handelPriceAfter, qty, handelQty, handeltMainCategory,
    categoryData, options, onSelect, onRemove, handelBrand, brandData,
    prodColors, reomveColor, setShowColors, showColor, handelShowColor,
    handelSubmite,
  ] = adminEditProducteHook(id);

  return (
    <main>
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
                تعديل المنتج
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="admin-edit-product-wrapper">
        <div className="form-group">
          <label className="text-form">صور المنتج</label>
          <MultiImageInput
            images={images}
            setImages={setImages}
            theme={"light"}
            cropConfig={false}
            allowCrop={false}
            max={4}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="input-form"
            placeholder="اسم المنتج"
            value={prodName}
            onChange={handelProdName}
          />
        </div>

        <div className="form-group">
          <textarea
            className="input-form-area"
            rows="4"
            placeholder="وصف المنتج"
            value={prodDrecription}
            onChange={handelProdDrecription}
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            className="input-form"
            placeholder="السعر قبل الخصم"
            value={priceBefor}
            onChange={handelPriceBefor}
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            className="input-form"
            placeholder="سعر المنتج"
            value={priceAfter}
            onChange={handelPriceAfter}
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            className="input-form"
            placeholder="الكمية المتاحة"
            value={qty}
            onChange={handelQty}
          />
        </div>

        <div className="form-group">
          <select
            className="select input-form-area"
            onChange={handeltMainCategory}
          >
            <option value="0">اختار التصنيف الرئيسي</option>
            {categoryData.data && categoryData.data.length >= 1 ? (
              categoryData.data.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))
            ) : (
              <option value="0">لا يوجد تصنيفات</option>
            )}
          </select>
        </div>

        <div className="form-group">
          <Multiselect
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
          />
        </div>

        <div className="form-group">
          <select
            className="select input-form-area"
            onChange={handelBrand}
          >
            <option value="0">الماركة</option>
            {brandData?.data ? (
              brandData?.data?.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))
            ) : (
              <option value="0">لا يوجد ماركات</option>
            )}
          </select>
        </div>

        <div className="form-group">
          <label className="text-form">الألوان المتاحة للمنتج</label>
          <div className="color-container">
            {prodColors.map((color) => (
              <div
                key={color}
                onClick={() => reomveColor(color)}
                className="color"
                style={{ backgroundColor: color }}
              />
            ))}
            <img
              src={add}
              alt="إضافة لون"
              className="add-color-icon"
              onClick={() => setShowColors(!showColor)}
            />
            {showColor && <CompactPicker onChange={handelShowColor} />}
          </div>
        </div>

        <button className="btn-save" onClick={handelSubmite}>
          حفظ التعديلات
        </button>

        <ToastContainer />
      </div>
    </main>
  );
};

export default AdminEditProduct;
