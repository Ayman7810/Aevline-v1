/** @format */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCoupon } from "../../redux/action/couponAction";
import notify from "../NotifcationHook";

const AdminCreateNewCouponHook = () => {
  const dispatch = useDispatch();
  const [couponName, setCouponName] = useState("");
  const [couponDate, setCouponDate] = useState("");
  const [couponValue, setCouponValue] = useState("");
  const [loading, setLoading] = useState(true);

  const handleDate = (e) => {
    setCouponDate(e.target.value);
  };

  const handleName = (e) => {
    setCouponName(e.target.value);
  };

  const handleValue = (e) => {
    setCouponValue(e.target.value);
  };

  const handleSubmit = async () => {
    if (couponDate === "" || couponName === "" || couponValue === "") {
      notify("الرجاء اكمال البيانات", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      createCoupon({
        name: couponName,
        expire: couponDate,
        discount: couponValue,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.coupon.createCoupon);

  useEffect(() => {
    // console.log("Response:", res.status);
    if (!loading && res) {
      if (res.status && res.status === 201) {
        notify("تمت الاضافة بنجاح", "success");

        setCouponName("");
        setCouponDate("");
        setCouponValue("");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else if (res.status && res.status === 400) {
        notify("هذا الكوبون موجود من قبل", "error");
      } else if (res.status && res.status === 403) {
        notify("انت غير مسموح لك بالاضافة", "error");
      } else {
        notify("انت غير مسموح لك بالاضافة", "error");
      }
    }
    setLoading(true);
  }, [loading, res]);

  return [
    couponDate,
    couponName,
    couponValue,
    handleDate,
    handleName,
    handleValue,
    handleSubmit,
    res,
    loading,
  ];
};

export default AdminCreateNewCouponHook;
