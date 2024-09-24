import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Collapse } from 'react-bootstrap';
import { BsFillFullscreenExitFill, BsBell, BsEnvelope } from 'react-icons/bs';
import { RiMenuFill } from 'react-icons/ri';
import { FaHome, FaLock, FaTable, FaChartBar, FaCog, FaCalendar } from 'react-icons/fa';
import './NavAfterLogin.css'; // تأكد من استيراد ملف CSS

const NavAfterLogin = () => {
  return (
    <div className="container-scroller">
      <Navbar className="default-layout-navbar" expand="lg">
        <Navbar.Brand href="index.html">
          <img src="assets/images/logo.svg" alt="logo" />
          <img src="assets/images/logo-mini.svg" alt="logo mini" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <RiMenuFill />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex align-items-center h-100">
            <FormControl type="text" placeholder="Search projects" className="me-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
          <Nav className="ms-auto">
            <NavDropdown title={<img src="assets/images/faces/face1.jpg" alt="profile" />} id="profileDropdown">
              <NavDropdown.Item href="#">
                <i className="mdi mdi-cached me-2 text-success"></i> Activity Log
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <i className="mdi mdi-logout me-2 text-primary"></i> Signout
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              <BsFillFullscreenExitFill />
            </Nav.Link>
            <NavDropdown title={<BsEnvelope />} id="messageDropdown">
              <NavDropdown.Header>Messages</NavDropdown.Header>
              <NavDropdown.Item href="#">Mark send you a message</NavDropdown.Item>
              <NavDropdown.Item href="#">Cregh send you a message</NavDropdown.Item>
              <NavDropdown.Item href="#">Profile picture updated</NavDropdown.Item>
              <NavDropdown.Item href="#">See all messages</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<BsBell />} id="notificationDropdown">
              <NavDropdown.Header>Notifications</NavDropdown.Header>
              <NavDropdown.Item href="#">Event today</NavDropdown.Item>
              <NavDropdown.Item href="#">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#">Launch Admin</NavDropdown.Item>
              <NavDropdown.Item href="#">See all notifications</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              <i className="mdi mdi-power"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container-fluid page-body-wrapper">
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item nav-profile">
              <Nav.Link href="#">
                <div className="nav-profile-image">
                  <img src="assets/images/faces/face1.jpg" alt="profile" />
                </div>
                <div className="nav-profile-text d-flex flex-column">
                  <span className="font-weight-bold mb-2">David Grey. H</span>
                  <span className="text-secondary text-small">Project Manager</span>
                </div>
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="index.html">
                <span className="menu-title">Dashboard</span>
                <FaHome className="menu-icon" />
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link onClick={() => document.getElementById('ui-basic').classList.toggle('show')}>
                <span className="menu-title">Basic UI Elements</span>
                <i className="menu-arrow"></i>
                <FaTable className="menu-icon" />
              </Nav.Link>
              <Collapse id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Nav.Link href="pages/ui-features/buttons.html">Buttons</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link href="pages/ui-features/dropdowns.html">Dropdowns</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link href="pages/ui-features/typography.html">Typography</Nav.Link>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li className="nav-item">
              <Nav.Link onClick={() => document.getElementById('icons').classList.toggle('show')}>
                <span className="menu-title">Icons</span>
                <FaHome className="menu-icon" />
              </Nav.Link>
              <Collapse id="icons">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Nav.Link href="pages/icons/font-awesome.html">Font Awesome</Nav.Link>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li className="nav-item">
              <Nav.Link onClick={() => document.getElementById('forms').classList.toggle('show')}>
                <span className="menu-title">Forms</span>
                <FaTable className="menu-icon" />
              </Nav.Link>
              <Collapse id="forms">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Nav.Link href="pages/forms/basic_elements.html">Form Elements</Nav.Link>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li className="nav-item">
              <Nav.Link onClick={() => document.getElementById('charts').classList.toggle('show')}>
                <span className="menu-title">Charts</span>
                <FaChartBar className="menu-icon" />
              </Nav.Link>
              <Collapse id="charts">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Nav.Link href="pages/charts/chartjs.html">ChartJs</Nav.Link>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li className="nav-item">
              <Nav.Link onClick={() => document.getElementById('tables').classList.toggle('show')}>
                <span className="menu-title">Tables</span>
                <FaTable className="menu-icon" />
              </Nav.Link>
              <Collapse id="tables">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Nav.Link href="pages/tables/basic-table.html">Basic table</Nav.Link>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li className="nav-item">
              <Nav.Link onClick={() => document.getElementById('auth').classList.toggle('show')}>
                <span className="menu-title">User Pages</span>
                <FaLock className="menu-icon" />
              </Nav.Link>
              <Collapse id="auth">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Nav.Link href="pages/samples/blank-page.html">Blank Page</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link href="pages/samples/login.html">Login</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link href="pages/samples/register.html">Register</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link href="pages/samples/error-404.html">404</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link href="pages/samples/error-500.html">500</Nav.Link>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li className="nav-item">
              <Nav.Link href="docs/documentation.html" target="_blank">
                <span className="menu-title">Documentation</span>
                <FaCog className="menu-icon" />
              </Nav.Link>
            </li>
          </ul>
        </nav>

        <div className="main-panel">
          <div className="content-wrapper">
            {/* Your content here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavAfterLogin;
