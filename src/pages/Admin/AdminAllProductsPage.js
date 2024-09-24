/** @format */

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import AdminAllProducts from "../../components/Admin/AdminAllProducts.js";
// import Pagenation from '../../components/Uitilty/Pagenation';
import ViewProductAdminHook from "../../hook/Producte/view-all-producte-hook";
import { Button, Modal } from "react-bootstrap";
import Pagenation from "../../components/Uitilty/Pagenation/Pagenation.js";

const AdminAllProductsPage = () => {
  const [items, pagination, noPress] = ViewProductAdminHook();

  // الحصول على عدد الصفحات
  const pageCount = pagination ? pagination.numberOfPages : 0;

  return (
    <div dir="ltr">
      <Sidebar active={3} />
      <div className="content">
        <Navbar />
        <AdminAllProducts Product={items} pagination={pagination} PageCount={pageCount} noPress={noPress} />
      </div>
    </div>
  );
};

export default AdminAllProductsPage;
