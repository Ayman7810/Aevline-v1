/** @format */

import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import UserEditAddress from "../../components/User/UserEditAddress/UserEditAddress.js";
const UserEditAddressPage = () => {
  return (
    <div dir="ltr">
      <Sidebar active={3} />
      <div className="content">
        <Navbar />
        <UserEditAddress />
      </div>
    </div>
  );
};

export default UserEditAddressPage;
