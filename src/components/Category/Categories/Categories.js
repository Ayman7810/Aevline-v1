/** @format */

import React, { useState, useEffect } from "react";
import CategoryItem from "./CategoryItem";
import "./style.css";
import GetAllCategoryHook from "../../../hook/Category/get-all-categoris-hook";

const Categories = () => {
  const [, limitCategoryData, colors] = GetAllCategoryHook();
  const categoriesData = Array.isArray(limitCategoryData?.category?.data)
    ? limitCategoryData?.category?.data
    : [];

  // console.log(categoriesData)
  const [displayedCategories, setDisplayedCategories] = useState([]);

  useEffect(() => {
    // تحديث الحالة عند تحميل البيانات
    if (categoriesData.length > 0) {
      setDisplayedCategories(categoriesData.slice(0, 4));
    }
  }, [categoriesData]); // تحديث الحالة عندما تتغير categoriesData

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedCategories((prevCategories) => {
        const newCategories = [
          ...prevCategories.slice(1),
          categoriesData[
            (categoriesData?.indexOf(prevCategories[3]) + 1) %
              categoriesData?.length
          ],
        ];
        return newCategories;
      });
    }, 3000); // تغيير كل 3 ثواني

    return () => clearInterval(interval);
  }, [categoriesData]);// إضافة dependancy على categoriesData

  return (
    <div className="category">
      <div className="container">
        <div className="category-item-container has-scrollbar">
          {displayedCategories?.map((category, index) => (
            <CategoryItem
              category={category}
              key={index}
              imgSrc={category.image}
              id={category._id}
              title={category.name}
              amount={category.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
