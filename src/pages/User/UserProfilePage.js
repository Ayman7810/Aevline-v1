/** @format */

import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import UserProfile from "../../components/User/UserProfile/UserProfile";
const UserProfilePage = () => {
  return (
    <div dir="ltr">
      <Sidebar active={5} />
      <div className="content">
        <Navbar />
        <UserProfile />
      </div>
    </div>
  );
};

export default UserProfilePage;
