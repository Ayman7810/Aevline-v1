/** @format */

import { useEffect, useState } from "react";
import notify from "../NotifcationHook";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../redux/action/reviewAction";

const AddRateHook = (id) => {
  const [rateTxt, setRateTxt] = useState("");
  const [rateVal, setRateVal] = useState();
  const [loading, setLoading] = useState(false);
  const [notificationStatus, setNotificationStatus] = useState(null); // حالة لتخزين حالة الإشعار
  const dispatch = useDispatch();

  const handleRateTxt = (e) => {
    setRateTxt(e.target.value);
  };
  
  const handleRateVal = (val) => {
    setRateVal(val);
  };

  const user = JSON.parse(localStorage.getItem("user")) || "";

  const handleSubmite = async () => {
    if (rateTxt === "") {
      notify("يجب إدخال تعليق", "error");
      return;
    }

    setLoading(true);
    try {
      await dispatch(
        createReview(id, {
          review: rateTxt,
          rating: rateVal,
        })
      );
      setNotificationStatus('success'); // تعيين حالة الإشعار عند النجاح
    } catch (error) {
      setNotificationStatus('error'); // تعيين حالة الإشعار عند حدوث خطأ
      // console.error("Error occurred while creating review:", error);
    } finally {
      setLoading(false);
    }
  };

  const res = useSelector((state) => state.review.createRate);
// console.log(res)
  useEffect(() => {
    if (loading === false && notificationStatus !== null) {
      if (notificationStatus === 'success') {
        if (res.status === 201) {
          notify("تم نشر تقييمك بنجاح", "success");
          setRateTxt('')
          setRateVal('')
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
         else if (res?.data?.message === 'You are not allowed to perform this action') {
          notify("لا يسمح للادمن بتقييم المنتجات", "error");
        } 
         else if (res?.data?.message === 'Invalid Token. please login again') {
          notify('الرجاء تسجيل الدخول لتقييم المنتج', "error");
        } 
        else if (
          res?.data?.errors[0]?.msg === "You already added review on this product"
        ) {
          notify("لا يمكنك تقييم المنتج أكثر من مرة", "error");
        } else if (res?.data?.errors) {
          notify(res.data.errors[0].msg, "error");
        }
      } else if (notificationStatus === 'error') {
        notify("حدث خطأ أثناء إرسال التعليق", "error");
      }
      // إعادة تعيين حالة الإشعار
      setNotificationStatus(null);
    }
  }, [loading, notificationStatus, res]); // إضافة notificationStatus كمراقب

  return [user, rateTxt, rateVal, handleRateTxt, handleRateVal, handleSubmite , setRateTxt ,setRateVal];
};

export default AddRateHook;
