/** @format */

import React from "react";
import { Dropdown } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContDrobdown = ({ title, onClick }) => {
  const clickMe = (key) => {
    localStorage.setItem("sortType", key);
    onClick();
  };
  return (
    <div className="filter-menu mt-4 justify-content-end">
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          <FaFilter color="#ff8f9c" /> فلترة المنتجات
        </Dropdown.Toggle>
        <Dropdown.Menu className="text-end">
          <Dropdown.Item onClick={() => clickMe("بدون ترتيب")}>بدون ترتيب</Dropdown.Item>
          <Dropdown.Item onClick={() => clickMe(" الاعلى تقييماً")}>الأكثر تقييمًا</Dropdown.Item>
          <Dropdown.Item onClick={() => clickMe("الاكثر مبيعاً")}>الأكثر مبيعًا</Dropdown.Item>
          <Dropdown.Item onClick={() => clickMe("الاكثر كمية")}>الأكثر كمية</Dropdown.Item>
          <Dropdown.Item onClick={() => clickMe(" السعر من الاعلى للاقل")}>السعر من الأعلى إلى الأدنى</Dropdown.Item>
          <Dropdown.Item onClick={() => clickMe("السعر من الاقل للاعلى")}>السعر من الأدنى إلى الأعلى</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ContDrobdown;
