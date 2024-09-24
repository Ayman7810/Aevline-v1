/** @format */

import React, { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useParams } from "react-router";
import UserGetAddressByIdHook from "../../../hook/userAddress/user-get-address-by-id-hook";
import UserEditAddressHook from "../../../hook/userAddress/user-edit-address-hook";
import { ToastContainer } from "react-toastify";

const UserEditAddress = () => {
  const { id } = useParams();
  const [res] = UserGetAddressByIdHook(id);
  const [
    handleAlias,
    handleDetails,
    handlePhone,
    handleSubmit,
    alias,
    details,
    phone,
    loading,
  ] = UserEditAddressHook(id, res.alias, res.details, res.phone);

  useEffect(() => {
    if (res) {
      handleAlias({ target: { value: res.alias } });
      handleDetails({ target: { value: res.details } });
      handlePhone({ target: { value: res.phone } });
    }
  }, [res]);

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
               تعديل العنوان
              </a>
            </li>
          </ul>
        </div>
      </div>
        <Row className="justify-content-start">
        
             <input
              type="text"
              className="input-form d-block mt-3 px-3"
              value={alias}
              onChange={handleAlias}
              placeholder="تسمية العنوان مثلا (المنزل - العمل)"
            />
            <textarea
              className="input-form-area p-2 mt-3"
              rows="4"
              cols="50"
              value={details}
              onChange={handleDetails}
              placeholder="العنوان بالتفصيل"
            />
            <input
              type="text"
              value={phone}
              onChange={handlePhone}
              className="input-form d-block mt-3 px-3"
              placeholder="رقم الهاتف"
            />
        
        </Row>
        <button
              className="btn-save d-inline mt-2"
              style={{width:'100%'}}
              onClick={handleSubmit}
              disabled={loading}>
              حفظ تعديل العنوان
            </button>
        <ToastContainer />
    </main>
  );
};

export default UserEditAddress;
