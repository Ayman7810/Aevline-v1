/** @format */

import React from "react";
import img from "../../../images/abaya/14.jpg";

import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-reveal";
import NavBar from "../../../components/Uitilty/NavBarLogin/NavBar";
import Footer from "../../../components/Uitilty/Footer/Footer";

const ForgotPasswordPage = () => {
  return (
    <>
      <NavBar />
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
                            ادخل الايميل الخاص بك لاعادة تعيين كلمة السر
                          </p>
                          <form className="form-body">
                            <div className="row g-3">
                              <div className="col-12">
                                <label
                                  htmlFor="inputEmailid"
                                  className="form-label">
                                  الايميل الخاص بك
                                </label>
                                <input
                                  type="email"
                                  className="form-control form-control-lg radius-30"
                                  id="inputEmailid"
                                  placeholder="الايميل"
                                  dir="rtl"
                                />
                              </div>
                              <div className="col-12">
                                <div className="d-grid gap-3">
                                  <button
                                    type="submit"
                                    className="btn btn-lg btn-primary radius-30"
                                    style={{
                                      background: "rgb(240, 128, 128)",
                                      border: "none",
                                    }}>
                                    ارسال
                                  </button>
                                  <Link
                                    to="/login"
                                    className="btn btn-lg btn-light radius-30">
                                    العودة الى الصفحة السابقة
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>

                      <div className="col-lg-6 bg-login d-flex  justify-content-center">
                        <Zoom>
                          <img src={img} className="img-fluid" alt="" />
                        </Zoom>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </Fade>
      <Footer/>
    </>
  );
};

export default ForgotPasswordPage;
