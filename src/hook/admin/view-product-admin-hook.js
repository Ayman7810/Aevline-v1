import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProductes, GetLimitProductes, GetProductPage } from "../../redux/action/producteAction";

const ViewProductAdminHook = () => {
  const dispatch = useDispatch();
  const limit = 8;

  useEffect(() => {
    dispatch(GetLimitProductes(limit));
  }, [ ]);



  const noPress = async (page) => {
    await dispatch(GetProductPage(limit, page));
  };

  const ProducteLimit = useSelector((state) => state.productes.producteLimit);
  // console.log(ProducteLimit)
  const items = ProducteLimit ? ProducteLimit.data : [];
  const pagination = ProducteLimit?.paginationResult || { numberOfPages: 0 };

  
  return [items, pagination, noPress];
};

export default ViewProductAdminHook;
