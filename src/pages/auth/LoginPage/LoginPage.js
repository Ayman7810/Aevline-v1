/* eslint-disable jsx-a11y/anchor-is-valid */
/** @format */

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../../../components/Uitilty/NavBarLogin/NavBar";
import LoginHook from "../../../hook/auth/login-hook";
import { ToastContainer, toast } from "react-toastify";
import { Bounce, Fade } from "react-reveal";
import img from "../../../images/abaya/14.jpg";
import { AiOutlineGooglePlus } from "react-icons/ai";
import "../../../hook/NotifcationHook";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../../components/Uitilty/Footer/Footer";

const LoginPage = () => {
  const [email, password, loading, handleEmail, handlePassword, handleSubmit] =
    LoginHook();

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // منع إرسال النموذج بشكل افتراضي
    const success = await handleSubmit(e); // تمرير الحدث هنا
    if (success) {
      toast.success("تم تسجيل الدخول بنجاح!");
    }
  };

  return (
    <>
      <NavBar />
      <Fade>
        <div className="react-reveal">
          <div className="section-title mt-4">
            <h2>تسجيل الدخول</h2>
          </div>
          <div className="wrapper">
            <main className="authentication-content">
              <Container style={{ minHeight: "650px" }}>
                <Row className="py-5 d-flex justify-content-center ">
                  <Col sm="6" className="d-flex flex-column ">
                    <form className="form-body" onSubmit={handleFormSubmit}>
                      <div className="d-grid">
                        <a
                          tabIndex="0"
                          className="btn btn-white radius-30 border rounded-pill mb-3"
                          dir="rtl">
                          <span className="d-flex justify-content-center align-items-center">
                            <AiOutlineGooglePlus
                              className="fa fa-google ms-2"
                              style={{ color: "rgb(240, 128, 128)" }}
                            />
                            <span>تسجيل الدخول عبر جوجل</span>
                          </span>
                        </a>
                      </div>
                      <div className="login-separater text-center mb-4">
                        <span>تسجيل الدخول عبر الايميل</span>
                        <hr />
                      </div>
                      <div className="row g-3">
                        <div className="col-12 text-end">
                          <label
                            htmlFor="inputEmailAddress"
                            className="form-label">
                            الايميل
                          </label>
                          <input
                            type="email"
                            className="form-control radius-30 ps-5"
                            id="inputEmailAddress"
                            dir="rtl"
                            placeholder="الايميل"
                            value={email}
                            onChange={handleEmail}
                          />
                        </div>
                        <div className="col-12 text-end">
                          <label
                            htmlFor="inputChoosePassword"
                            className="form-label">
                            كلمة المرور
                          </label>
                          <input
                            type="password"
                            className="form-control radius-30 ps-5"
                            id="inputChoosePassword"
                            dir="rtl"
                            placeholder="كلمة المرور"
                            value={password}
                            onChange={handlePassword}
                          />
                        </div>
                        <div className="col-5 d-flex">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked">
                              تذكرني
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-grid">
                            <button
                              type="submit"
                              className="btn btn-primary radius-30"
                              style={{
                                background: "rgb(240, 128, 128)",
                                border: "none",
                              }}
                              disabled={loading}>
                              {loading ? "جاري التحميل..." : "تسجيل الدخول"}
                            </button>
                          </div>
                        </div>
                        <div className="col-6 ">
                          <p className="mb-0 fs-6">
                            <Link to="/Regester" className="mx-2 moveLink">
                              أنشاء حساب جديد
                            </Link>
                          </p>
                        </div>
                        <div className="col-6 ">
                          <Link to="/Reset-password" className="mx-2 moveLink">
                            نسيت كلمة المرور
                          </Link>
                        </div>
                        {/* <div className="col-6 ">
                          <p className="mb-0 fs-6">
                            <Link to="/Admin/index" className="mx-2 moveLink">
                              تسجيل الدخول كادمن
                            </Link>
                          </p>
                        </div>
                        <div className="col-6 ">
                          <Link to="/User/index" className="mx-2 moveLink">
                            تسجيل الخدول كمستخدم
                          </Link>
                        </div> */}
                      </div>
                    </form>
                  </Col>
                  <Col
                    sm="6"
                    className="bg-login d-flex justify-content-center">
                    <Bounce>
                      <img src={img} className="img-fluid" alt="Login" />
                    </Bounce>
                  </Col>
                </Row>
              </Container>
            </main>
          </div>
        </div>
      </Fade>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default LoginPage;
