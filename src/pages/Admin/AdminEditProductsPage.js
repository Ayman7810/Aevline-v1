import React from 'react'
import './style.css'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import AdminEditProduct from '../../components/Admin/AdminEditProduct';
const AdminEditProductsPage = () => {
    return (
        <div dir='ltr'>
          <Sidebar active={0} />
          <div className="content">
            <Navbar />
            <AdminEditProduct/>
          </div>
        </div>
      );
}

export default AdminEditProductsPage
