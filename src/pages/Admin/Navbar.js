/** @format */

import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import imgProfile from "../../images/abaya/14.jpg";
const Navbar = () => {
  return (
    <nav>
      <form action="#">
        <div className={`form-input show`}>
          <input type="search" placeholder="ابحث هنا" />
          <button>بحث</button>
        </div>
      </form>

      <a href="#" className="notif">
        <FaBell />
        <span className="count">12</span>
      </a>
    </nav>
  );
};

export default Navbar;
