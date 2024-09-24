import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import AdminAddProducts from '../../components/Admin/AdminAddProducts'

const AdminAddProductPage = () => {
  return (
    <div dir='ltr'>
    <Sidebar active={4}/>
    <div className="content">
      <Navbar />
   <AdminAddProducts/>
    </div>
  </div>
  )
}

export default AdminAddProductPage
