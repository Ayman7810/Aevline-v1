import React from 'react'
import { Link } from 'react-router-dom'

const AdminAllOrders = () => {
  return (
    <main className="admin-create-coupon-wrapper">
    <div className="header">
    <div className="left">
      <h1>لوحة التحكم</h1>
      <ul className="breadcrumb">
        <li>
          <Link to="/Admin/index">لوحة التحكم</Link>
        </li>
        <span>/</span>
        <li>
          <a href="#" className="active">
            ادارة الطلبات
          </a>
        </li>
      </ul>
    </div>
  </div> 
  <div>لا توجد طبات لعرضها</div>
</main>
  )
}

export default AdminAllOrders
