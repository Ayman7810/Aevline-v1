/** @format */

import React, { useState } from "react";
import {
  FaHome,
  FaClipboardCheck,
  FaHeart,
  FaAddressBook,
  FaUserCircle,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/dashbord/admin/logo.jpg";
import { IoSettings } from "react-icons/io5";

const Sidebar = ({ active }) => {
  const [activeIndex, setActiveIndex] = useState(active);
  const [isClosed, setIsClosed] = useState(true);
  const navigate = useNavigate();

  const sideLinks = [
    { name: "الرئيسية", icon: <FaHome />, path: "/" },
    { name: "لوحة التحكم", icon: <IoSettings />, path: "/User/index" },
    {
      name: "اداره الطلبات",
      icon: <FaClipboardCheck />,
      path: "/User/all-orders",
    },
    {
      name: "المنتجات المفضلة",
      icon: <FaHeart />,
      path: "/User/favorite-products",
    },
    {
      name: "العنوانين الشخصية",
      icon: <FaAddressBook />,
      path: "/User/addresses",
    },
    { name: "الملف الشخصي", icon: <FaUserCircle />, path: "/User/Profile" },
  ];

  const handleLinkClick = (index) => {
    setActiveIndex(index);
  };

  const toggleSidebar = () => {
    setIsClosed(!isClosed);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/"); // توجيه المستخدم إلى الصفحة الرئيسية بعد تسجيل الخروج
    window.location.reload(); // إعادة تحميل الصفحة
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
              {!isClosed && link.name} {link.icon}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="side-menu">
        <li>
          <a href="#" className="logout" onClick={handleLogout}>
            {!isClosed && "تسجيل الخروج"} <FaSignOutAlt />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
