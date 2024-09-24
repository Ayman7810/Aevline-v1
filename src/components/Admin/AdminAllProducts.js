/** @format */

import React, { useState } from "react";
import { Button, Card, Col, Container, Row, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DeleteProducte } from "../../redux/action/producteAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './AdminAllProducts.css'
import Pagenation from "../Uitilty/Pagenation/Pagenation";

const AdminAllProducts = ({ Product  , pagination ,noPress}) => {
  const [confirmDelete, setConfirmDelete] = useState(null);
  const dispatch = useDispatch();

  const handleDelete = async (productId) => {
    await dispatch(DeleteProducte(productId));
    toast.success("تم حذف المنتج بنجاح!");
    setConfirmDelete(null); // لإخفاء رسالة التأكيد
    window.location.reload();
  };

  // الحصول على عدد الصفحات
  const pageCount = pagination ? pagination.numberOfPages : 0;

  return (
    <main>
      <div className="header">
        <div className="left">
          <h1>لوحة التحكم</h1>
          <ul className="breadcrumb">
            <li>
              <Link to="/Admin/index">لوحة التحكم</Link>
            </li>
            <span>/</span>
            <li>
              <a href="#" className="active">
               إدارة المنتجات
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ToastContainer />
        <div className="justify-content-center ">
          <div className="d-flex justify-content-center">
            {confirmDelete && (
              <Alert
                variant="warning"
                dismissible
                onClose={() => setConfirmDelete(null)}
                style={{ position: "fixed", zIndex: "100", width: "50%" }}>
                هل أنت متأكد من الحذف؟
                <div>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(confirmDelete)}
                    className="ms-2">
                    نعم
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => setConfirmDelete(null)}
                    className="ms-2">
                    لا
                  </Button>
                </div>
              </Alert>
            )}
          </div>

          <Row>
            {Product && Product.length > 0 ? (
              Product.map((item) => (
                <Col xs="12" sm="6" md="4" lg="4" key={item._id}>
                  <Card className="product-card my-2">
                    <div className="position-relative">
                      <div className="showcase-actions-AdminAllProducts d-flex justify-content-between mt-2">
                        <Button
                          className="btn-action"
                          onClick={() => setConfirmDelete(item._id)}>
                          إزالة
                        </Button>
                        <Link
                          to={`/Admin/edit-Products/${item._id}`}
                          style={{ textDecoration: "none" }}>
                          <Button className="btn-action">تعديل</Button>
                        </Link>
                      </div>
                      <Link
                        to={`/producte-detalis/${item._id}`}
                        style={{ textDecoration: "none" }}>
                        <Card.Img
                          style={{ height: "228px", width: "100%" }}
                          src={item.imageCover}
                          alt={item.title}
                        />
                      </Link>
                    </div>
                    <Card.Body>
                      <Card.Title>
                        <div className="card-title">{item.title}</div>
                      </Card.Title>
                      <Card.Text>
                        <div className="d-flex justify-content-between">
                          <div className="card-rate">{item.rating}</div>
                          <div className="d-flex">
                            <div className="card-currency mx-1">ريال</div>
                            <div className="card-price">{item.price}</div>
                          </div>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <div>لا توجد منتجات لعرضها</div>
            )}
          </Row>
        </div>
      {pageCount > 0 && <Pagenation PageCount={pageCount} noPress={noPress} />}
    </main>
  );
};

export default AdminAllProducts;
