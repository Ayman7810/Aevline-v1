/** @format */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteAllItemsCart } from "../../redux/action/cartAction";
import notify from "../NotifcationHook";

const DeleteAllCartHook = () => {
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
    await dispatch(DeleteAllItemsCart());
    setShow(false);
    setLoading(false);
  };

  const reslute = useSelector((state) => state.cart);
  useEffect(() => {
    if (loading === false) {
      if (reslute && reslute.DeleteCart === "" && reslute.done === true) {
        notify("تم حذف المنتجات من العربة", "success");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        notify("فشلت عملية الحذف", "error");
      }
    }
  }, [loading]);
  return [onDelete, showModel, show, handleClose, reslute];
};

export default DeleteAllCartHook;
