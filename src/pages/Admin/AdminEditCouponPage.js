import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import AdminEditCoupon from '../../components/Admin/AdminEditCoupon.js'

const AdminEditCouponPage = () => {
  return (
    <div dir='ltr'>
    <Sidebar active={7}/>
    <div className="content">
      <Navbar />
   <AdminEditCoupon/>
    </div>
  </div>
  )
}

export default AdminEditCouponPage
