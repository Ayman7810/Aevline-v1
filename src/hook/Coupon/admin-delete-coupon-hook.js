/** @format */

import { useState } from "react";
import { useDispatch } from "react-redux";
import notify from "../NotifcationHook";
import { DeleteCoupon } from "../../redux/action/couponAction";


const AdminDeleteCouponHook = (id) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showModel = () => {
    setShow(true);
  };

  const onDelete = async () => {
    await dispatch(DeleteCoupon(id));
    setShow(false);
    notify("تم حذف الكوبون بنجاح", "success");
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  return [onDelete, showModel, show, handleClose];
};

export default AdminDeleteCouponHook;
