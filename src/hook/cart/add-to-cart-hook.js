import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../redux/action/cartAction";
import { useEffect, useState } from "react";
import notify from "../NotifcationHook";

const AddToCartHook = (id, color) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const handleAddToCart = async () => {
    setLoading(true);
    await dispatch(AddToCart({ productId: id, color }));
    setLoading(false);
  };

  const res = useSelector((state) => state.cart.addCart) || {};

  useEffect(() => {
    if (!loading && res) {
      if (res.status === 200) {
        notify("تم إضافة المنتج الى العربة", "success");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else if (res.data?.message === "Invalid Token. please login again") {
        notify("يرجى تسجيل الدخول", "warn");
      } else if (res.status === 400) {
        notify("فشلت عملية الاضافة", "error");
      }
    }
  }, [loading, res]);

  return [handleAddToCart, res];
};

export default AddToCartHook;
