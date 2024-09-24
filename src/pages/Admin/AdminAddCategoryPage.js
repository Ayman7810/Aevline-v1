import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import AdminAddCategory from '../../components/Admin/AdminAddCategory.js'

const AdminAddCategoryPage = () => {
  return (
    <div dir='ltr'>
    <Sidebar active={6}/>
    <div className="content">
      <Navbar />
   <AdminAddCategory/>
    </div>
  </div>
  )
}

export default AdminAddCategoryPage
