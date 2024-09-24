/** @format */

import React, { useState } from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import EditDataUserHook from "../../../hook/userData/edit-data-user-hook";
import EditPasswordUserHook from "../../../hook/userData/edit-password-user-hook";
import { ToastContainer } from "react-toastify";

const UserProfile = () => {
  const [
    userName,
    userPhone,
    userEmail,
    handleUserName,
    handleUserPhone,
    handleUserEmail,
    showEdit,
    handleCloseEdit,
    handleShowEdit,
    showModelEdite,
    onEdite,
  ] = EditDataUserHook();

  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    if (isEditing) {
      onEdite(); // استدعاء onEdite عند الحفظ
    }
    setIsEditing(!isEditing);
  };

  const [
    currentPassword,
    password,
    passwordConfirm,
    handleCurrentPassword,
    handlePassword,
    handlePasswordConfirm,
    handleSubmite,
    resulte,
  ] = EditPasswordUserHook();

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
                البيانات الشخصية
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Container>
        <div style={{ minHeight: "600px", direction: "rtl" }}>
          <Card className="my-3">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <div className="fw-bold  text-end">الاسم:</div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userName}
                      onChange={handleUserName}
                      className="form-control mt-1"
                    />
                  ) : (
                    <div className="item-delete-edit mt-1">{userName}</div>
                  )}
                </div>
                <div>
                  <Button
                    variant="outline-primary ms-2"
                    onClick={handleEditToggle}
                    className="me-2">
                    <AiFillEdit className="me-1" size={18} />
                    {isEditing ? "حفظ" : "تعديل"}
                  </Button>
                  <Button variant="outline-danger">
                    <AiFillDelete className="me-1" size={18} />
                    ازاله
                  </Button>
                </div>
              </div>

              <div className="mb-3 text-end">
                <div className="fw-bold">رقم الهاتف:</div>
                {isEditing ? (
                  <input
                    type="text"
                    value={userPhone}
                    onChange={handleUserPhone}
                    className="form-control mt-1"
                  />
                ) : (
                  <div className="item-delete-edit mt-1">{userPhone}</div>
                )}
              </div>

              <div className="mb-3 text-end">
                <div className="fw-bold">الايميل:</div>
                {isEditing ? (
                  <input
                    type="email"
                    value={userEmail}
                    onChange={handleUserEmail}
                    className="form-control mt-1"
                  />
                ) : (
                  <div className="item-delete-edit mt-1">{userEmail}</div>
                )}
              </div>
            </Card.Body>
          </Card>

          <Card>
          <div className="m-3 ">
            <input
              type="password"
              className="input-form d-block mt-1 px-3"
              placeholder=" كلمة المرور القديمة"
              value={currentPassword}
              onChange={handleCurrentPassword}
            />
            <input
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder=" كلمة المرور الجديده"
              value={password}
              onChange={handlePassword}
            />
            <input
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="  تاكيد  كلمة المرور الجديده"
              value={passwordConfirm}
              onChange={handlePasswordConfirm}
            />
          <button
            className="btn-save d-inline mt-2 w-100"
            onClick={handleSubmite}>
            حفظ كلمة السر
          </button>
          </div>

          </Card>
          <ToastContainer />
        </div>
      </Container>
    </main>
  );
};

export default UserProfile;
