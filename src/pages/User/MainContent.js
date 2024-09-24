/** @format */

import React from "react";
import { FaClipboardCheck, FaHeart, FaClipboardList, FaCheckCircle } from 'react-icons/fa';

const MainContent = () => {
  return (
    <main>
      <div className="header">
        <div className="left">
          <h1>الصفحة الشخصية</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">الصفحة الشخصية</a>
            </li>
            <span>/</span>
            <li>
              <a href="#" className="active">
                الرئيسية
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Insights */}
      <ul className="insights">
        <li>
          <i className="bx bx-calendar-check">
            <FaClipboardCheck />
          </i>
          <span className="info">
            <h3>1,074</h3>
            <p>عدد الطلبات</p>
          </span>
        </li>
        <li>
          <i className="bx bx-heart">
            <FaHeart />
          </i>
          <span className="info">
            <h3>3,944</h3>
            <p>عدد المنتجات المفضلة</p>
          </span>
        </li>
        <li>
          <i className="bx bx-list-check">
            <FaClipboardList />
          </i>
          <span className="info">
            <h3>14,721</h3>
            <p>عدد المنتجات قيد التنفيذ</p>
          </span>
        </li>
        <li>
          <i className="bx bx-check-circle">
            <FaCheckCircle />
          </i>
          <span className="info">
            <h3>42</h3>
            <p>عدد المنتجات المكتملة</p>
          </span>
        </li>
      </ul>
      {/* End of Insights */}
    </main>
  );
};

export default MainContent;
