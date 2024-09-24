/** @format */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCart } from "../../redux/action/cartAction";

const GetAllCartHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(GetAllCart());
    };

    run();
  }, []);

  const res = useSelector((state) => state.cart.allCart) || {};

  return [res];
};

export default GetAllCartHook;
