import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import AdminAddSubCategory from '../../components/Admin/AdminAddSubCategory.js'

const AdminAddSubCategoryPage = () => {
  return (
    <div dir='ltr'>
    <Sidebar active={7}/>
    <div className="content">
      <Navbar />
   <AdminAddSubCategory/>
    </div>
  </div>
  )
}

export default AdminAddSubCategoryPage
