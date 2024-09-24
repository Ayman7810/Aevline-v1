/** @format */

import React, { useState } from "react";
import {
  FaStore,
  FaChartBar,
  FaComments,
  FaUsers,
  FaCog,
  FaSignOutAlt,
  FaCode,
  FaBars,
  FaDashcube,
  FaClipboardList,
  FaTasks,
  FaPlusSquare,
  FaTags,
  FaHome,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../images/dashbord/admin/logo.jpg";

const Sidebar = ({ active }) => {
  const [activeIndex, setActiveIndex] = useState(active);
  const [isClosed, setIsClosed] = useState(true);

  const sideLinks = [
    { name: "الرئيسية", icon: <FaHome />, path: "/" },
    { name: "لوحة التحكم", icon: <FaDashcube />, path: "/Admin/index" },
    {
      name: "اداره الطلبات",
      icon: <FaClipboardList />,
      path: "/Admin/all-orders",
    },
    { name: "اداره المنتجات", icon: <FaTasks />, path: "/Admin/all-productes" },
    {
      name: "اضافة منتج",
      icon: <FaPlusSquare />,
      path: "/Admin/add-productes",
    },
    { name: "اضف ماركه", icon: <FaTags />, path: "/Admin/add-brand" },
    { name: "اضف تصنيف", icon: <FaChartBar />, path: "/Admin/add-category" },
    {
      name: "اضف تصنيف فرعي",
      icon: <FaChartBar />,
      path: "/Admin/add-sub-category",
    },
    { name: "اضف كوبون", icon: <FaTags />, path: "/Admin/create-coupon" },
  ];

  const handleLinkClick = (index) => {
    setActiveIndex(index);
  };

  const toggleSidebar = () => {
    setIsClosed(!isClosed);
  };

  return (
    <div className={`sidebar ${isClosed ? "close" : ""}`}>
      <Link
        className="logo "
        onClick={toggleSidebar}
        style={{ marginTop: "15px " }}>
        {isClosed ? (
          <FaBars className="toggle-icon" />
        ) : (
          <>
            <div className="logo-name">
              <img src={logo} alt="logo" height={"70px"} width={"100%"} />
            </div>
            <FaBars className="toggle-icon" />
          </>
        )}
      </Link>

      <ul className="side-menu">
       
        {sideLinks.map((link, index) => (
          <li key={index} className={activeIndex === index ? "active" : ""}>
            <Link to={`${link.path}`} onClick={() => handleLinkClick(index)}>
              {!isClosed && link.name}{" "}
              {/* يظهر الاسم فقط إذا كان الشريط مفتوحًا */}
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>

      {/* <ul className="side-menu">
        <li className="active">
          <a href="#">
            Dashboard
            <FaDashcube />
          </a>
        </li>

        <li>
          <a href="#">
            Shop
            <FaStore />
          </a>
        </li>

        <li>
          <a href="#">
            Analytics
            <FaChartBar />
          </a>
        </li>
      </ul> */}
      <ul className="side-menu">
        <li>
          <a href="#" className="logout">
            {!isClosed && "تسجيل الخروج"} <FaSignOutAlt />
            {/* يظهر الاسم فقط إذا كان الشريط مفتوحًا */}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
