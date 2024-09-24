/** @format */

import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import UserFavoriteProduct from "../../components/User/UserFavoriteProduct/UserFavoriteProduct";
const UserFavoriteProductPage = () => {
  return (
    <div dir="ltr">
      <Sidebar active={3} />
      <div className="content">
        <Navbar />
        <UserFavoriteProduct />
      </div>
    </div>
  );
};

export default UserFavoriteProductPage;
