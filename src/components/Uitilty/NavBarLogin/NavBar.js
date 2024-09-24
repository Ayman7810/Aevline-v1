/**
 * eslint-disable jsx-a11y/anchor-is-valid
 *
 * @format
 */

/** @format */

import React, { useEffect, useRef, useState } from "react";
import {
  IoCloseOutline,
  IoMenuOutline,
  IoSearchOutline,
  IoPersonOutline,
  IoHeartOutline,
  IoBagHandleOutline,
  IoHomeOutline,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoFacebook,
  IoHome,
  IoMan,
  IoWoman,
  IoWine,
  IoCreate,
  IoLogIn,
  IoDiamond,
  IoSettings,
  IoPerson,
  IoSettingsOutline,
  IoBuild,
  IoRestaurant,
  IoEllipsisHorizontalCircleOutline,
} from "react-icons/io5";
import {
  GiFeatheredWing,
  GiFlipFlops,
  GiLipstick,
  GiMirrorMirror,
  GiShoebillStork,
} from "react-icons/gi";
import logo from "../../../images/logo/logo.png";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import GetAllCartHook from "../../../hook/cart/get-all-cart-hook";
import NavbarSerachHook from "../../../hook/Search/navbar-serach-hook";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProductes } from "../../../redux/action/producteAction";
import GetAllWishListHhook from "../../../hook/wishList/get-all-wish-list-hook";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [searchWord, handelChangeSearch] = NavbarSerachHook();
  const searchInputRef = useRef(null);
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const [res] = GetAllCartHook();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleSubmenu = (id) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handelLoguot = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
    window.location.reload();
  };

  const handelmovePage = () => {
    if (user?.role === "admin") {
      navigate("/admin/all-productes");
    } else if (user?.role === "user") {
      navigate("/User/Profile");
    }
  };

  // المفضلة

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllProductes());
  }, [dispatch]);

  const items = useSelector((state) => state?.productes?.allProduct?.data);
  const [Prod, fivProd] = GetAllWishListHhook(items);
  const filteredItems = items?.filter((item) => fivProd?.includes(item._id));

  var ContFivProd = filteredItems?.length || 0;

  return (
    <>
      <header>
        <div className="header-main">
          <div className="container">
            <Link to="/" className="header-logo">
              <img src={logo} alt="متجري" width="150" height="50" />
            </Link>
            <div className="header-search-container">
              <input
                type="search"
                name="search"
                className="search-field"
                placeholder="أدخل اسم المنتج..."
                onChange={handelChangeSearch}
                value={searchWord}
                id="searchInput"
                ref={searchInputRef}
              />
              <button className="search-btn">
                <IoSearchOutline />
              </button>
            </div>
            <div className="header-user-actions">
              <Dropdown className="dropdown-wrapper">
                <Dropdown.Toggle
                  className="action-btn"
                  variant="link"
                  id="dropdown-basic"
                  style={
                    user
                      ? {
                          fontSize: "20px",
                          paddingRight: "10px",
                          textDecoration: "none",
                        }
                      : {}
                  }>
                  {user ? user.name : <IoPersonOutline />}
                  <span className="dropdown-arrow"></span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {user ? (
                    <>
                      {user.role === "admin" ? (
                        <Dropdown.Item onClick={handelmovePage}>
                          لوحة التحكم
                        </Dropdown.Item>
                      ) : (
                        <Dropdown.Item onClick={handelmovePage}>
                          الصفحة الشخصية
                        </Dropdown.Item>
                      )}
                      <Dropdown.Item onClick={handelLoguot}>
                        تسجيل الخروج
                      </Dropdown.Item>
                    </>
                  ) : (
                    <>
                      <Dropdown.Item as={Link} to="/login">
                        تسجيل الدخول
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/Regester">
                        إنشاء حساب
                      </Dropdown.Item>
                    </>
                  )}
                </Dropdown.Menu>
              </Dropdown>

              {/* إظهار أيقونات القلب والسلة فقط إذا كان المستخدم مسجلاً للدخول ونوعه "user" */}
              {user && user.role === "user" ? (
                <>
                  <button className="action-btn">
                    <Link
                      to="/cart"
                      style={{ textDecoration: "none", color: "#333" }}>
                      <IoBagHandleOutline />
                      <span className="count">{res.numOfCartItems || 0}</span>
                    </Link>
                  </button>

                  <button className="action-btn">
                    <Link
                      to="/User/favorite-products"
                      style={{ textDecoration: "none", color: "#333" }}>
                      <IoHeartOutline />
                      <span className="count">{ContFivProd || 0}</span>
                    </Link>
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>

        <nav className="desktop-navigation-menu">
          <div className="container">
            <ul className="desktop-menu-category-list">
              <li className="menu-category">
                <Link to="/" className="menu-title">
                  الرئيسية
                </Link>
              </li>

              <li className="menu-category d-none"></li>
              <li className="menu-category ">
                <a href="#" className="menu-title">
                  الملابس
                </a>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">الملابس اليومية</a>
                    <a href="#">الملابس الرسمية</a>
                    <a href="#">ملابس السهرة </a>
                    <a href="#">الملابس الرياضية</a>
                  </li>
                </ul>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">
                  الأحذية
                </a>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">أحذية رسمية</a>
                    <a href="#">أحذية رياضية</a>
                    <a href="#">أحذية كاجول</a>
                    <a href="#">صنادل</a>
                  </li>
                </ul>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">
                  الإكسسوارات
                </a>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">مجوهرات</a>
                    <a href="#">حقائب اليد </a>
                    <a href="#">حقائب اليد </a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">نظارات شمسية</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">اوشحة</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">أحزمة</a>
                  </li>
                </ul>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">
                  مستحضرات التجميل
                </a>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">مكياج</a>
                    <a href="#">عناية بالبشرة</a>
                    <a href="#">عناية بالشعر</a>
                    <a href="#">عطور</a>
                  </li>
                </ul>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">
                  المنزل والمطبخ
                </a>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">ديكورات منزلية</a>
                    <a href="#">ادوات المطبخ</a>
                    <a href="#">مفروشات</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

        <div className="mobile-bottom-navigation">
          <button className="action-btn" onClick={toggleMobileMenu}>
            <IoMenuOutline />
          </button>

          {/* إظهار أيقونة السلة فقط إذا لم يكن المستخدم إداريًا */}
          {user && user.role === "user" && (
            <button className="action-btn">
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "#333" }}>
                <IoBagHandleOutline />
                <span className="count">{res.numOfCartItems || 0}</span>
              </Link>
            </button>
          )}

          {/* إظهار أيقونة إعدادات الإدارة فقط إذا كان المستخدم إداريًا */}
          {user?.role === "admin" && (
            <button className="action-btn">
              <Link
                to="/admin/all-productes"
                style={{ textDecoration: "none", color: "#333" }}>
                <IoSettingsOutline />
              </Link>
            </button>
          )}

          {/* إظهار أيقونة القلب فقط إذا لم يكن المستخدم إداريًا */}
          {user && user.role === "user" && (
            <button className="action-btn">
              <Link
                to="/User/favorite-products"
                style={{ textDecoration: "none", color: "#333" }}>
                <IoHeartOutline />
                <span className="count">{ContFivProd || 0}</span>
              </Link>
            </button>
          )}

          <button className="action-btn">
            <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
              <IoHomeOutline />
            </Link>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay">
            <nav className="mobile-navigation-menu has-scrollbar active">
              <div className="menu-top-mobile">
                <h2 className="menu-title">القائمة</h2>
                <button className="menu-close-btn" onClick={toggleMobileMenu}>
                  <IoCloseOutline />
                </button>
              </div>
              <ul className="mobile-menu-category-list text-end">
                {user ? (
                  user.role === "admin" ? (
                    <li className="menu-category">
                      <Link
                        to="/admin/all-productes"
                        className="menu-title mb-3">
                        <IoSettings />
                        لوحة التحكم
                      </Link>
                    </li>
                  ) : user.role === "user" ? (
                    <li className="menu-category">
                      <Link to="/User/Profile" className="menu-title mb-3">
                        <IoPersonOutline />
                        الصفحة الشخصية
                      </Link>
                    </li>
                  ) : null
                ) : null}

                <li className="menu-category">
                  <Link to="/" className="menu-title mb-3">
                    <IoHome />
                    الرئيسية
                  </Link>
                </li>

                <li className="menu-category">
                  <button
                    className="accordion-menu"
                    onClick={() => toggleSubmenu("الملابس")}>
                    <p className="menu-title">
                      <IoWoman />
                      الملابس
                    </p>
                    <div>
                      <ion-icon
                        name="add-outline"
                        className={`add-icon ${
                          openSubmenus["الملابس"] ? "hidden" : ""
                        }`}></ion-icon>
                      <ion-icon
                        name="remove-outline"
                        className={`remove-icon ${
                          openSubmenus["الملابس"] ? "" : "hidden"
                        }`}></ion-icon>
                    </div>
                  </button>
                  <ul
                    className={`submenu-category-list ${
                      openSubmenus["الملابس"] ? "active" : ""
                    }`}>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        الملابس اليومية
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        الملابس الرسمية
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        ملابس السهرة{" "}
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        الملابس الرياضية
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="menu-category">
                  <button
                    className="accordion-menu"
                    onClick={() => toggleSubmenu("الأحذية")}>
                    <p className="menu-title">
                      <GiFlipFlops />
                      الأحذية
                    </p>
                    <div>
                      <ion-icon
                        name="add-outline"
                        className={`add-icon ${
                          openSubmenus["الأحذية"] ? "hidden" : ""
                        }`}></ion-icon>
                      <ion-icon
                        name="remove-outline"
                        className={`remove-icon ${
                          openSubmenus["الأحذية"] ? "" : "hidden"
                        }`}></ion-icon>
                    </div>
                  </button>

                  <ul
                    className={`submenu-category-list ${
                      openSubmenus["الأحذية"] ? "active" : ""
                    }`}>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        أحذية رسمية
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        أحذية رياضية
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        أحذية كاجول
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        صنادل
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="menu-category">
                  <button
                    className="accordion-menu"
                    onClick={() => toggleSubmenu("الإكسسوارات")}>
                    <p className="menu-title">
                      <IoDiamond />
                      الإكسسوارات
                    </p>
                    <div>
                      <ion-icon
                        name="add-outline"
                        className={`add-icon ${
                          openSubmenus["الإكسسوارات"] ? "hidden" : ""
                        }`}></ion-icon>
                      <ion-icon
                        name="remove-outline"
                        className={`remove-icon ${
                          openSubmenus["الإكسسوارات"] ? "" : "hidden"
                        }`}></ion-icon>
                    </div>
                  </button>
                  <ul
                    className={`submenu-category-list ${
                      openSubmenus["الإكسسوارات"] ? "active" : ""
                    }`}>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        مجوهرات
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        حقائب اليد{" "}
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        نظارات شمسية
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        اوشحة
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        أحزمة
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="menu-category">
                  <button
                    className="accordion-menu"
                    onClick={() => toggleSubmenu("مستحضرات التجميل")}>
                    <p className="menu-title">
                      <GiMirrorMirror />
                      مستحضرات التجميل
                    </p>
                    <div>
                      <ion-icon
                        name="add-outline"
                        className={`add-icon ${
                          openSubmenus["مستحضرات التجميل"] ? "hidden" : ""
                        }`}></ion-icon>
                      <ion-icon
                        name="remove-outline"
                        className={`remove-icon ${
                          openSubmenus["مستحضرات التجميل"] ? "" : "hidden"
                        }`}></ion-icon>
                    </div>
                  </button>
                  <ul
                    className={`submenu-category-list ${
                      openSubmenus["مستحضرات التجميل"] ? "active" : ""
                    }`}>
                    {/*
                     */}
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        مكياج
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        عناية بالبشرة
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        عناية بالشعر
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        عطور
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-category">
                  <button
                    className="accordion-menu"
                    onClick={() => toggleSubmenu(" المنزل والمطبخ")}>
                    <p className="menu-title">
                      <IoRestaurant />
                      المنزل والمطبخ
                    </p>
                    <div>
                      <ion-icon
                        name="add-outline"
                        className={`add-icon ${
                          openSubmenus[" المنزل والمطبخ"] ? "hidden" : ""
                        }`}></ion-icon>
                      <ion-icon
                        name="remove-outline"
                        className={`remove-icon ${
                          openSubmenus[" المنزل والمطبخ"] ? "" : "hidden"
                        }`}></ion-icon>
                    </div>
                  </button>
                  <ul
                    className={`submenu-category-list ${
                      openSubmenus[" المنزل والمطبخ"] ? "active" : ""
                    }`}>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        ديكورات منزلية
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        ادوات المطبخ
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        مفروشات
                      </a>
                    </li>
                  </ul>
                </li>

                {user ? (
                  <li className="menu-category">
                    <button onClick={handelLoguot} className="menu-title">
                      <IoLogIn />
                      تسجيل الخروج
                    </button>
                  </li>
                ) : (
                  <>
                    <li className="menu-category">
                      <Link to="/Regester" className="menu-title">
                        <IoCreate />
                        انشاء حساب
                      </Link>
                    </li>
                    <li className="menu-category">
                      <Link to="/login" className="menu-title">
                        <IoLogIn />
                        تسجيل الدخول
                      </Link>
                    </li>
                  </>
                )}
              </ul>
              <div className="menu-bottom">
                <ul className="menu-social-container">
                  <li>
                    <a href="#" className="social-link">
                      <IoLogoFacebook style={{ color: "#ff8f9c" }} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <IoLogoTwitter style={{ color: "#ff8f9c" }} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <IoLogoInstagram style={{ color: "#ff8f9c" }} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <IoLogoLinkedin style={{ color: "#ff8f9c" }} />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;
