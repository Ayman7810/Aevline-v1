import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import AdminAddBrand from '../../components/Admin/AdminAddBrand.js'

const AdminAddBrandPage = () => {
  return (
    <div dir='ltr'>
    <Sidebar active={5}/>
    <div className="content">
      <Navbar />
   <AdminAddBrand/>
    </div>
  </div>
  )
}

export default AdminAddBrandPage
