/** @format */

import React, { useRef, useEffect } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import { useParams } from "react-router";
import AdminGetCouponByIdHook from "../../hook/Coupon/admin-get-coupon-by-id-hook";
import { format } from "date-fns";
import AdminEditCouponHook from "../../hook/Coupon/admin-edit-coupon-hook";
import { ToastContainer } from "react-toastify";
import "./AdminEditCoupon.css"; // تأكد من إضافة ملف CSS
import { Link } from "react-router-dom";

const AdminEditCoupon = () => {
  const { id } = useParams();
  const refDate = useRef();
  const [res] = AdminGetCouponByIdHook(id);
  const [
    handleDate,
    handleName,
    handleValue,
    handleSubmit,
    couponDate,
    couponValue,
    couponName,
    loading,
  ] = AdminEditCouponHook(id, res.name, res.expire, res.discount);

  // التحقق من صحة التاريخ
  const formattedDate = couponDate
    ? format(new Date(couponDate), "yyyy-MM-dd")
    : "";

  useEffect(() => {
    if (res) {
      handleName({ target: { value: res.name } });
      handleDate({ target: { value: res.expire } });
      handleValue({ target: { value: res.discount } });
    }
  }, [res]);

  return (
    <main className="admin-create-coupon-wrapper">
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
                 تعديل الكوبون
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Container className="admin-edit-coupon">
        <Row className="justify-content-center">
          <Col sm="8">
            <Form>
              <Form.Group controlId="formCouponName">
                <Form.Label>اسم الكوبون</Form.Label>
                <Form.Control
                  type="text"
                  value={couponName}
                  onChange={handleName}
                  placeholder="أدخل اسم الكوبون"
                  className="input-form"
                />
              </Form.Group>
              <Form.Group controlId="formCouponDate" className="mt-3">
                <Form.Label>تاريخ انتهاء الكوبون</Form.Label>
                <Form.Control
                  ref={refDate}
                  type="text"
                  placeholder="أدخل تاريخ انتهاء الكوبون"
                  onFocus={() => (refDate.current.type = "date")}
                  onBlur={() => (refDate.current.type = "text")}
                  onChange={handleDate}
                  value={formattedDate}
                  className="input-form"
                />
              </Form.Group>
              <Form.Group controlId="formCouponValue" className="mt-3">
                <Form.Label>قيمة الخصم (%)</Form.Label>
                <Form.Control
                  type="text"
                  value={couponValue}
                  onChange={handleValue}
                  placeholder="أدخل الخصم بالنسبة المئوية"
                  className="input-form"
                />
              </Form.Group>
            </Form>
            <Row className="mt-4">
              <Col className="d-flex justify-content-end">
                <Button style={{width:'100%' , background:'#ff8f9c' , border:'none'}}
                  className="btn-save"
                  onClick={handleSubmit}
                  disabled={loading}>
                  {loading ? "جارٍ الحفظ..." : "حفظ التعديلات"}
                  
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </main>
  );
};

export default AdminEditCoupon;
