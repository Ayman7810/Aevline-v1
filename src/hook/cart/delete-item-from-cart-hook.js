/** @format */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../NotifcationHook";
import { DeleteOneItemsCart } from "../../redux/action/cartAction";

const DeleteItemFromCartHook = (id) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showModel = () => {
    setShow(true);
  };

  const onDelete = async () => {
    setLoading(true);
    await dispatch(DeleteOneItemsCart(id));
    setShow(false);
    setLoading(false);
  };

  const res = useSelector((state) => state.cart.DeleteOneCart) || {};
  useEffect(() => {
    if (loading === false) {
      if (res && res.status === "success") {
      
        notify("تم حذف المنتج من العربة بنجاح", "success");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    else{
        notify("فشلت عملية الحذف", "error");
    }
    }
  }, [loading,res]);

  return [onDelete, showModel, show, handleClose,];
};

export default DeleteItemFromCartHook;
