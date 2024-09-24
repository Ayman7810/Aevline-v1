/** @format */

import React from "react";
import img from "../../../images/abaya/14.jpg";
import "./style.css";
import { Fade, Roll } from "react-reveal";
import NavBar from "../../../components/Uitilty/NavBarLogin/NavBar";
import { Link } from "react-router-dom";
import Footer from "../../../components/Uitilty/Footer/Footer";
import RegesterHook from "../../../hook/auth/regester-hook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // استيراد CSS الخاص بـ react-toastify
import { Container } from "react-bootstrap";

const RegesterPage = () => {
  const [
    name,
    email,
    phone,
    password,
    confitmPassword,
    handleName,
    handleEmail,
    handlePhone,
    handlePassword,
    handleConfitmPassword,
    handleSubmit,
    loading,
  ] = RegesterHook();

  return (
    <>
      <NavBar />
      <Container>
        <Fade>
          <div>
            <div className="section-title mt-4">
              <h2>أنشاء حساب</h2>
            </div>
            <div className="wrapper">
              <main className="authentication-content">
                <div className="container-fluid">
                  <div className="authentication-card">
                    <div
                      className="card shadow rounded-0 overflow-hidden"
                      style={{ direction: "ltr" }}>
                      <div className="row g-0">
                        <div className="col-lg-6">
                          <div className="card-body p-4 p-sm-5 text-end">
                            <p className="card-text mb-5">
                              ! قم بإنشاء حساب واحصل على الدعم الاستشاري
                            </p>
                            <form className="form-body" onSubmit={handleSubmit}>
                              <div className="row g-3">
                                <div className="col-12">
                                  <label
                                    htmlFor="inputName"
                                    className="form-label">
                                    الاسم
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control radius-30 ps-5"
                                    id="inputName"
                                    dir="rtl"
                                    placeholder="ادخل الاسم"
                                    value={name}
                                    onChange={handleName}
                                  />
                                </div>
                                <div className="col-12">
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
                                    placeholder="ادخل الايميل"
                                    value={email}
                                    onChange={handleEmail}
                                  />
                                </div>
                                <div className="col-12">
                                  <label
                                    htmlFor="inputPhone"
                                    className="form-label">
                                    الهاتف
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control radius-30 ps-5"
                                    id="inputPhone"
                                    dir="rtl"
                                    placeholder="ادخل الهاتف"
                                    value={phone}
                                    onChange={handlePhone}
                                  />
                                </div>
                                <div className="col-12">
                                  <label
                                    htmlFor="inputPassword"
                                    className="form-label">
                                    كلمة المرور
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control radius-30 ps-5"
                                    id="inputPassword"
                                    dir="rtl"
                                    placeholder="ادخل كلمة المرور"
                                    value={password}
                                    onChange={handlePassword}
                                  />
                                </div>
                                <div className="col-12">
                                  <label
                                    htmlFor="inputConfirmPassword"
                                    className="form-label">
                                    تأكيد كلمة المرور
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control radius-30 ps-5"
                                    id="inputConfirmPassword"
                                    dir="rtl"
                                    placeholder="تأكيد كلمة المرور"
                                    value={confitmPassword}
                                    onChange={handleConfitmPassword}
                                  />
                                </div>
                                <div className="col-12 ">
                                  <div className="d-grid">
                                    <button
                                      type="submit"
                                      className="btn btn-primary radius-30"
                                      style={{
                                        background: "rgb(240, 128, 128)",
                                        border: "none",
                                      }}
                                      disabled={loading} // تعطيل الزر أثناء التحميل
                                    >
                                      {loading
                                        ? "جاري التحميل..."
                                        : "أنشاء حساب"}
                                    </button>
                                  </div>
                                </div>
                                <div className="col-12 ">
                                  <p className="mb-0">
                                    لديك حساب من قبل اضغط
                                    <Link to="/login" className="mx-2 moveLink">
                                      تسجيل الدخول
                                    </Link>
                                  </p>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="col-lg-6 bg-login d-flex justify-content-center">
                          <Roll>
                            <img src={img} className="img-fluid" alt="" />
                          </Roll>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </Fade>
      </Container>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default RegesterPage;
