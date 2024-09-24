/** @format */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditCountCart } from "../../redux/action/cartAction";
import notify from "../NotifcationHook";

const EditCountCartHook = (id, count) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const [countProd, setCountProd] = useState(count);

  const handleCountProd = (e) => {
    setCountProd(e.target.value);
  };

  const onEditCount = async () => {
    setLoading(true);
    await dispatch(
      EditCountCart(id, {
        count: countProd,
      })
    );
    setLoading(false);
  };

  const reslute = useSelector((state) => state.cart.EditCart);
  useEffect(() => {
    if (loading === false) {
      if (reslute && reslute.status === 200) {
        notify("تم تعديل كمية المنتج", "success");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        notify("فشلت عملية الحذف", "error");
      }
    }
  }, [loading]);

  return [countProd, handleCountProd, onEditCount, reslute];
};

export default EditCountCartHook;
