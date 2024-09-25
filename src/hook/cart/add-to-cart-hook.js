import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../redux/action/cartAction";
import { useEffect, useState } from "react";
import notify from "../NotifcationHook";

const AddToCartHook = (id, color) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  
  const handelAddToCart = async () => {
    if(!localStorage.getItem('token')){
      notify("يرجى تسجيل أولاً", "error");
      return;
    }
    setLoading(true);
    const response = await dispatch(AddToCart({ productId: id, color }));
    setLoading(false);
    return response;
  };

  const res = useSelector((state) => state.cart.addCart) || {};

  useEffect(() => {
    if (!loading && res) {
      if (res.status === 200) {
        notify("تم إضافة المنتج الى العربة", "success");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else if (res.status === 400) {
        notify("فشلت عملية الاضافة", "error");
      }
    }
  }, [loading, res]);

  return [handelAddToCart, res];
};

export default AddToCartHook;
