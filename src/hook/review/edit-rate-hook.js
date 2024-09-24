/** @format */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editReview } from "../../redux/action/reviewAction";
import notify from "../NotifcationHook";

const DditRateHook = (rateID, userRateID, userID, rateVal, rateTxt) => {
  const [editRateTxt, setEditRateTxt] = useState("");
  const [EditRateVal, setEditRateVal] = useState();
  const [loading, setLoading] = useState(false);
  const [notificationStatus, setNotificationStatus] = useState(null); // حالة لتخزين حالة الإشعار
  const dispatch = useDispatch();

  useEffect(() => {
    setEditRateTxt(rateTxt);
    setEditRateVal(rateVal);
  }, [rateID, rateTxt, rateVal]);
  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const showModelEdite = () => {
    setShowEdit(true);
  };
  const hadelEditRateTxt = (e) => {
    setEditRateTxt(e.target.value);
    // console.log(e.target.value);
  };

  const handleEditRateVal = (val) => {
    setEditRateVal(val);
    // console.log(val);
  };

  const onEdite = async () => {
    if (userID === userRateID) {
      setLoading(true);
      try {
        await dispatch(
          editReview(rateID, {
            review: editRateTxt,
            rating: EditRateVal,
          })
        );
        setNotificationStatus("success"); // تعيين حالة الإشعار عند النجاح
      } catch (error) {
        setNotificationStatus("error"); // تعيين حالة الإشعار عند حدوث خطأ
        // console.error("Error occurred while creating review:", error);
      } finally {
        setLoading(false);
        setShowEdit(false);
      }
    }
  };

  //   const resEdit =;
  const editRate = useSelector((state) => state.review);

  useEffect(() => {
    if (loading === false && notificationStatus !== null) {
    
      if (editRate.done === true && editRate?.editRate?.status !== 400) {
        notify("تم التعديل  بنجاح", "success");

        setTimeout(() => {
            window.location.reload();
          }, 1500);
      } else {
        notify("هناك مشكلة في التعديل", "error");
        console.log(editRate);
      }
    }
 
    setLoading(true);
    
  
  }, [loading]);

  return [
    onEdite,
    editRateTxt,
    hadelEditRateTxt,
    EditRateVal,
    handleEditRateVal,
    showEdit,
    showModelEdite,
    handleShowEdit,
    handleCloseEdit,
  ];
};

export default DditRateHook;
