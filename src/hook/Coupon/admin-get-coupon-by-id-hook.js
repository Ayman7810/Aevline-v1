/** @format */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCouponById } from "../../redux/action/couponAction";

const AdminGetCouponByIdHook = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getCouponById(id));
    };

    run();
  }, []);
  const res = useSelector((state) => state.coupon?.coupon?.data?.data) || {};

  return [res];
};

export default AdminGetCouponByIdHook;
