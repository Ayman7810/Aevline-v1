/** @format */

import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import UserAllAddres from "../../components/User/UserAllAddres/UserAllAddres.js";
const UserAllAddresPage = () => {
  return (
    <div dir="ltr">
      <Sidebar active={4} />
      <div className="content">
        <Navbar />
        <UserAllAddres />
      </div>
    </div>
  );
};

export default UserAllAddresPage;
