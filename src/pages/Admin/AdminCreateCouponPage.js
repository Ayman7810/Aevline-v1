import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import AdminCreateCoupon from '../../components/Admin/AdminCreateCoupon.js'

const AdminCreateCouponPage = () => {
  return (
    <div dir='ltr'>
    <Sidebar active={8}/>
    <div className="content">
      <Navbar />
   <AdminCreateCoupon/>
    </div>
  </div>
  )
}

export default AdminCreateCouponPage
