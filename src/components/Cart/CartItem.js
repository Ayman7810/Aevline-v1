import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Button, Alert } from "react-bootstrap";
import DeleteItemFromCartHook from "../../hook/cart/delete-item-from-cart-hook";
import EditCountCartHook from "../../hook/cart/edit-count-cart-hook";
import { url } from "../../Api/baseURL";

const CartItem = ({ item }) => {
  const product = item?.product;
  const [onDelete] = DeleteItemFromCartHook(item?._id);
  const [countProd, handleCountProd, onEditCount] = EditCountCartHook(item?._id, item?.count);
  const [showAlert, setShowAlert] = useState(false);

  const handleDeleteConfirmation = () => {
    setShowAlert(true);
  };

  const handleDelete = () => {
    onDelete();
    setShowAlert(false);
  };

  return (
    <>
     {showAlert && (
        <Alert variant="warning" onClose={() => setShowAlert(false)} dismissible>
          <Alert.Heading>تحذير</Alert.Heading>
          <p>هل أنت متأكد من حذف المنتج من العربة؟</p>
          <Button className="mx-2" variant="danger" onClick={handleDelete}>نعم</Button>
          <Button variant="secondary" onClick={() => setShowAlert(false)}>إغلاق</Button>
        </Alert>
      )}
      <div className="cart-item flex-sm-row-reverse flex-sm-column">
      <img src={product ? `${url}/products/${product.imageCover}` : ""} alt={product ? product.title : "Product"} />
      <div className="cart-item-details">
        <h4>{product ? product.title : "اسم المنتج"}</h4>
        <p><b>السعر:</b> {item?.price} ريال</p>
        <p><b>الماركة:</b> {item?.product?.brand?.name}</p>
        <p><b>التصنيف:</b> {item?.product?.category?.name}</p>
      </div>
      <div className="quantity-control">
        <input type="number" value={countProd} onChange={handleCountProd} />
        <Button variant="primary" onClick={onEditCount} className="p-1 me-1  px-2" style={{background:'#333333' , border:'none'}}>تعديل الكمية</Button>
      </div>
      <div className="remove-icon me-4 m-2">
        <FaTrash onClick={handleDeleteConfirmation} />
      </div>
     
    </div>
    </>
    
  );
};

export default CartItem;
