/** @format */

import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteReview } from "../../redux/action/reviewAction";
import notify from "../NotifcationHook";

const DeleteRateHook = (rateID, userRateID, userID) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showModel = () => {
    setShow(true);
  };

  const onDelete = async () => {
    if (userID === userRateID) {
      await dispatch(deleteReview(rateID));
      setShow(false);
    }
    notify("تم حذف التقييم بنجاح", "success");
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  return [onDelete, showModel, show, handleClose];
};

export default DeleteRateHook;
