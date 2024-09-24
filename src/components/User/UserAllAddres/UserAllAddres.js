/** @format */

import React from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import UserGetAllAddressHook from "../../../hook/userAddress/user-get-all-address-hook";
import UserDeleteAddressHook from "../../../hook/userAddress/user-delete-address-hook";
import { ToastContainer } from "react-toastify";

const UserAllAddress = () => {
  const [res] = UserGetAllAddressHook();

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
                دفتر العنوانين
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Container>
        {res.data && res.data.length > 0 ? (
          res.data.map((item, index) => (
            <UserAddressCard key={index} address={item} />
          ))
        ) : (
          <h2>لا توجد عناوين</h2>
        )}

        <Row className="justify-content-center">
          <Link to="/User/add-address" style={{ textDecoration: "none" }}>
            <button className="btn-save my-1" style={{ width: "100%" }}>
              اضافه عنوان جديد
            </button>
          </Link>
        </Row>
      </Container>
    </main>
  );
};

const UserAddressCard = ({ address }) => {
  const [onDelete, showModel, setShowModel] = UserDeleteAddressHook(address._id);
  const [showAlert, setShowAlert] = React.useState(false);

  const handleDelete = () => {
    onDelete();
    setShowAlert(false);
  };

  return (
    <Card className="user-address-card my-3">
      <Card.Body>
        <Row className="d-flex flex-column flex-sm-row justify-content-between">
          <Col xs="12" sm="8" className="mb-3 mb-sm-0">
            <div className="fw-bold">{address.alias}</div>
            <div className="text-muted">{address.details}</div>
            <div className="mt-2" dir="rtl">
              <span className="text-secondary">رقم الهاتف: </span>
              <span className="text-muted">{address.phone}</span>
            </div>
          </Col>
          <Col xs="12" sm="4" className="d-flex justify-content-center justify-content-sm-end align-items-center">
            <Link to={`/User/edit-address/${address._id}`} style={{ textDecoration: "none" }}>
              <Button variant="outline-primary" className="mx-2">
                <AiFillEdit size={18} /> تعديل
              </Button>
            </Link>
            <Button variant="outline-danger" onClick={() => setShowAlert(true)}>
              <AiFillDelete size={18} /> ازاله
            </Button>
          </Col>
        </Row>
      </Card.Body>

      {showAlert && (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>تحذير!</strong> هل أنت متأكد من حذف العنوان؟
          <Button type="button" className="btn-close" aria-label="Close" onClick={() => setShowAlert(false)}></Button>
          <div className="mt-2">
            <Button variant="danger" onClick={handleDelete}>
              نعم
            </Button>
            <Button variant="secondary" onClick={() => setShowAlert(false)} className="ms-2">
              لا
            </Button>
          </div>
        </div>
      )}
      <ToastContainer />
    </Card>
  );
};

export default UserAllAddress;
