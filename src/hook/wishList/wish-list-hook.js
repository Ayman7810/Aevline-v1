/** @format */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToWishList,
  deleteProductFromWishList,
  getAllWishList,
} from "../../redux/action/wishListAction";
import notify from "../NotifcationHook";

const WishListHook = (id, fivProd) => {
  const fill = true; // fill icon
  const outLine = false; // outline icon
  const [HeartIcon, setHeartIcon] = useState(outLine);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fivProd?.includes(id)) {
      setHeartIcon(fill);
    } else {
      setHeartIcon(outLine);
    }
  }, [fill, fivProd, id, outLine]);

  // const res = useSelector((state) => state.wishList);
  useEffect(() => {
    dispatch(getAllWishList);
  }, [dispatch]);

  const res = useSelector((state) => state.wishList) || {};
  // console.log(res);
  const handleFav = async () => {
    if (res) {
      if (
        res.allWishList?.message &&
        res.allWishList.message === "Invalid Token. please login again"
      ) {
        notify("يرجى تسجيل الدخول أولاً", "error");
      } else if (HeartIcon === outLine) {
        await addWishList();
        res.addWishList.status = res.addWishList.status || 200;
        if (res.addWishList.status && res.addWishList.status === 200) {
          notify("تمت إضافة المنتج إلى المفضلة", "success");
          setHeartIcon(fill);
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        } else {
          notify("حدث خطاء", "error");
        }
      } else {
        await deleteWishList();
        notify("تم ازالة المنتج من المفضلة", "warn");
        setHeartIcon(outLine);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    }
  };

  const addWishList = async () => {
    await dispatch(addProductToWishList({ productId: id }));
  };

  const deleteWishList = async () => {
    await dispatch(deleteProductFromWishList(id));
  };

  return [HeartIcon, fill, handleFav];
};

export default WishListHook;
