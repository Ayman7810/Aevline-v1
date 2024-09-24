/** @format */

import React, { useState } from "react";
import SideFilterSearchHook from "../../../hook/Search/side-filter-search-hook";
import "./style.css"; // تأكد من أن لديك الأنماط المناسبة

const FilterProductes = () => {
  const [
    catData,
    brandData,
    handelCat,
    handelBrand,
    handelfromPrice,
    handelToPrice,
  ] = SideFilterSearchHook();

  const [showMoreCats, setShowMoreCats] = useState(false);
  const [showMoreBrands, setShowMoreBrands] = useState(false);

  const displayedCats = showMoreCats
    ? catData?.data
    : catData?.data?.slice(0, 4);
  const displayedBrands = showMoreBrands
    ? brandData?.data
    : brandData?.data?.slice(0, 4);

  const toPrice = localStorage.getItem("priceTo");
  const fromPrice = localStorage.getItem("priceForm");

  return (
    <div className="mt-4 pt-4">
      {/* Category Filter */}
      <div className="filter-widget">
        <h2 className="fw-title">الفئات</h2>
        <ul className="category-menu">
          <li>
            <label>
              <input type="checkbox" value="0" onChange={handelCat} />
              <span className="custom-checkbox"></span>
              <a>الكل</a>
            </label>
          </li>
          {displayedCats?.map((item) => (
            <li key={item._id}>
              <label>
                <input type="checkbox" value={item._id} onChange={handelCat} />
                <span className="custom-checkbox"></span>
                <a>{item.name}</a>
              </label>
            </li>
          ))}
        </ul>
        {catData?.data?.length > 4 && (
          <button
            className="btn btn-toggle"
            onClick={() => setShowMoreCats(!showMoreCats)}  style={{color:'#ff66b2'}}>
            {showMoreCats ? "عرض أقل" : "عرض المزيد"}
          </button>
        )}
      </div>

      {/* Brand Filter */}
      <div className="filter-widget">
        <h2 className="fw-title">الماركات</h2>
        <ul className="brand-menu">
          <li>
            <label>
              <input type="checkbox" value="0" onChange={handelBrand} />
              <span className="custom-checkbox"></span>
              <a>الكل</a>
            </label>
          </li>
          {displayedBrands?.map((item) => (
            <li key={item._id}>
              <label>
                <input
                  type="checkbox"
                  value={item._id}
                  onChange={handelBrand}
                />
                <span className="custom-checkbox"></span>
                <a>{item.name}</a>
              </label>
            </li>
          ))}
        </ul>
        {brandData?.data?.length > 4 && (
          <button
            className="btn btn-toggle"
            onClick={() => setShowMoreBrands(!showMoreBrands)} style={{color:'#ff66b2'}}>
            {showMoreBrands ? "عرض أقل" : "عرض المزيد"}
          </button>
        )}
      </div>

      {/* Price Filter */}
      <div className="filter-widget mb-0">
        <h2 className="fw-title">تصفية بواسطة السعر</h2>
        <div className="price-range-wrap">
          <div className="price-range  mx-3">
            <label htmlFor="priceRangeFrom">من:</label>
            <input
              type="range"
              className="form-range"
              id="priceRangeFrom"
              min="0"
              max="50000" // Adjust as necessary
              step="10"
              value={fromPrice}
              onChange={handelfromPrice}
            />
            <input
              type="number"
              className="form-control"
              id="priceRangeFromValue"
              value={fromPrice}
              onChange={handelfromPrice}
            />

            <label htmlFor="priceRangeTo" >
              إلى:
            </label>
            <input
              type="range"
              className="form-range"
              id="priceRangeTo"
              min="0"
              max="50000"
              step="10"
              value={toPrice}
              onChange={handelToPrice}
            />
            <input
              type="number"
              className="form-control"
              id="priceRangeToValue"
              value={toPrice}
              onChange={handelToPrice}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProductes;
