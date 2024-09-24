import React from 'react'
import './style.css'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MainContent from './MainContent';
const AdminIndex = () => {
    return (
        <div dir='ltr'>
          <Sidebar active={1} />
          <div className="content">
            <Navbar />
            <MainContent/>
          </div>
        </div>
      );
}

export default AdminIndex
