import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetLimitCoupon } from "../../redux/action/couponAction";

const AdminAllCouponHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoupons = async () => {
      setLoading(true);          //limat , page
      await dispatch(GetLimitCoupon(3,1));
      setLoading(false);
    };

    fetchCoupons();
  }, [loading, dispatch]);

  const coupon = useSelector((state) => state.coupon?.allCoupon) || {};
  const pageCout = coupon.paginationResult?.numberOfPages || 0;

  const noPress = async (page) => {
    dispatch(GetLimitCoupon( 3,page));
  };

  return [coupon, pageCout, noPress];
};

export default AdminAllCouponHook;
