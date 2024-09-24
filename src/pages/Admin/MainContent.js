/** @format */

import React from "react";
import { FaClipboardCheck, FaUsers, FaTags, FaDollarSign } from 'react-icons/fa';

const MainContent = () => {
  return (
    <main>
      <div className="header">
        <div className="left">
          <h1>لوحة التحكم</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">لوحة التحكم</a>
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
          <i className="bx bx-show-alt">
            <FaUsers />
          </i>
          <span className="info">
            <h3>3,944</h3>
            <p>عدد المستخدمين</p>
          </span>
        </li>
        <li>
          <i className="bx bx-line-chart">
            <FaTags />
          </i>
          <span className="info">
            <h3>14,721</h3>
            <p>عدد المنتجات</p>
          </span>
        </li>
        <li>
          <i className="bx bx-dollar-circle">
            <FaDollarSign />
          </i>
          <span className="info">
            <h3>$6,742</h3>
            <p>عدد الماركات</p>
          </span>
        </li>
      </ul>
      {/* End of Insights */}
    </main>
  );
};

export default MainContent;
