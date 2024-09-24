/** @format */

import React, { useRef } from "react";
import { FaBell } from "react-icons/fa";
import NavbarSerachHook from "../../hook/Search/navbar-serach-hook";
const Navbar = () => {
  const [searchWord, handelChangeSearch] = NavbarSerachHook();
  const searchInputRef = useRef(null);
  return (
    <nav>
      <form action="#">
        <div className={`form-input show`}>
          <input
            type="search"
            placeholder="ابحث هنا"
            onChange={handelChangeSearch}
            value={searchWord}
            id="searchInput"
            ref={searchInputRef}
          />
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
