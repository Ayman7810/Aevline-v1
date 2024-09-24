/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../NotifcationHook";
import { ApplyCouponToCart } from "../../redux/action/cartAction";

const ApplyCouponToCartHook = (coupon) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const [couponName, setCouponName] = useState("");

  const handleCouponName = (e) => {
    setCouponName(e.target.value);
  };

  useEffect(() => {
    if (coupon) {
      setCouponName(coupon);
    }

    if(coupon === couponName){
        notify("لقد تم ادخال هذا الكوبون من قبل", "warn");
        return
    }
  }, [coupon]);

  const onApplyCoupon = async () => {
    if (couponName === "") {
      notify("ادخل كوبون الخصم", "warn");
      return;
    }
    if(coupon === couponName){
        notify("لقد تم ادخال هذا الكوبون من قبل", "warn");
        return
    }
    setLoading(true);
    await dispatch(
      ApplyCouponToCart({
        couponName: couponName,
      })
    );
    setLoading(false);
  };

  const resCoupon = useSelector((state) => state.cart.couponCart);
  useEffect(() => {
    if (loading === false) {
      if (resCoupon && resCoupon.status === 200) {
        notify("تم خصم المبلغ بنجاح", "success");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else if (
        resCoupon?.data?.message === "Coupon is invalid or has expired"
      ) {
        notify("هذا الكوبون غير موجود", "error");
      } else {
        notify("فشلت عملية الخصم", "error");
      }
    }
  }, [loading]);

  return [couponName, setCouponName,handleCouponName, onApplyCoupon, resCoupon];
};

export default ApplyCouponToCartHook;
