/** @format */

import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import UserAddAddress from "../../components/User/UserAddAddress/UserAddAddress.js";
const UserAddAddressPage = () => {
  return (
    <div dir="ltr">
      <Sidebar active={2} />
      <div className="content">
        <Navbar />
        <UserAddAddress />
      </div>
    </div>
  );
};

export default UserAddAddressPage;
