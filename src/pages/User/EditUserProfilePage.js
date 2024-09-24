/** @format */

import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import EditUserProfile from "../../components/User/UserProfile/EditUserProfile";

const EditUserProfilePage = () => {
  return (
    <div dir="ltr">
      <Sidebar active={3} />
      <div className="content">
        <Navbar />
        <EditUserProfile />
      </div>
    </div>
  );
};

export default EditUserProfilePage;
