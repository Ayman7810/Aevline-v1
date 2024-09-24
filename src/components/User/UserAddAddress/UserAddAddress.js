/** @format */

import React from "react";
import { Col, Row } from "react-bootstrap";
import UserAddAddressHook from "../../../hook/userAddress/user-add-address-hook";
import { ToastContainer } from "react-toastify";
import "./UserAddAddress.css"; // تأكد من إضافة هذا الملف لتنسيق CSS

const UserAddAddress = () => {
  const [
    alias,
    details,
    phone,
    handelAlias,
    handelDetails,
    handelPhone,
    handelSubmite,
  ] = UserAddAddressHook();

  return (
    <main>
      <div className="header">
        <div className="left">
          <h1>الصفحة الشخصية</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">الصفحة الشخصية</a>
            </li>
            <span>/</span>
            <li>
              <a href="#" className="active">
                العنوانين الشخصية
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="add-address-container">
        <Row className="justify-content-start">
          <input
            type="text"
            className="input-form my-1"
            placeholder="تسمية العنوان (المنزل - العمل)"
            onChange={handelAlias}
            value={alias}
          />
          <textarea
            className="input-form-area my-1"
            rows="4"
            placeholder="العنوان بالتفصيل"
            onChange={handelDetails}
            value={details}
          />

          <input
            type="text"
            className="input-formm my-1"
            placeholder="رقم الهاتف"
            onChange={handelPhone}
            value={phone}
          />
        </Row>
        <Row>
          <button
            className="btn-save my-1"
            onClick={handelSubmite}
            style={{ width: "100%" }}>
            إضافة عنوان
          </button>
        </Row>
        <ToastContainer />
      </div>
    </main>
  );
};

export default UserAddAddress;
