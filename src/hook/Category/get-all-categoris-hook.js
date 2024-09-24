/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllCategory,
  GetCategoryPage,
  GetLimitCategory,
} from "../../redux/action/categoryAction";

const GetAllCategoryHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllCategory());
    dispatch(GetLimitCategory(6));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const colors = [
    "#e39aec",
    "#ffaf96",
    "#03a9f4",
    "#c3ffcd",
    "#a4fff7",
    "#ff9877",
  ];

  const categoryData = useSelector((state) => state.allCategory);
  const limitCategoryData = useSelector((state) => state.allCategory);


  // الحصول على عدد الصفحات لاستخدامه في التصفح

  let pageCout = 0;
  if (limitCategoryData) {
    // pageCout = limitCategoryData.limitCategory.paginationResult.numberOfPages;
  }

  // الحصول على البيانات عند الضغط على صفحة جديدة

  const noPress = (page) => {
    dispatch(GetCategoryPage(6, page));
  };

  return [categoryData, limitCategoryData, colors, pageCout, noPress];
};

export default GetAllCategoryHook;
