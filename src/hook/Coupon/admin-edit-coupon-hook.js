/** @format */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditCoupon } from "../../redux/action/couponAction";
import notify from "../NotifcationHook";

const AdminEditCouponHook = (id, initialName, initialDate, initialDiscount) => {
  const dispatch = useDispatch();
  const [couponName, setCouponName] = useState(initialName);
  const [couponDate, setCouponDate] = useState(initialDate);
  const [couponValue, setCouponValue] = useState(initialDiscount);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCouponName(initialName);
    setCouponDate(initialDate);
    setCouponValue(initialDiscount);
  }, [initialName, initialDate, initialDiscount]);

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
    setLoading(true);

    await dispatch(
      EditCoupon(id, {
        name: couponName,
        expire: couponDate,
        discount: couponValue,
      })
    );
    setLoading(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const coupon = useSelector((state) => state.coupon.EditCoupon) || {};

  useEffect(() => {
    if (loading === false && coupon.status !== undefined) {
      if (coupon.status === 200) {
        notify("تم التعديل بنجاح", "success");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        notify("هناك مشكلة في التعديل", "error");
      }
    }
  }, [loading, coupon]);

  return [
    handleDate,
    handleName,
    handleValue,
    handleSubmit,
    couponDate,
    couponValue,
    couponName,
    loading,
    coupon,
  ];
};

export default AdminEditCouponHook;
