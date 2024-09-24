import React from 'react'

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MainContent from './MainContent';
const UserIndexPage = () => {
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

export default UserIndexPage
