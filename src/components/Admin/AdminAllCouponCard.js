import React, { useState } from "react";
import { Button, Col, Row, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import AdminDeleteCouponHook from "../../hook/Coupon/admin-delete-coupon-hook";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import "./AdminAllCouponCard.css"; // تأكد من إضافة ملف CSS

const AdminAllCouponCard = ({ coupon }) => {
  const isoString = coupon.expire;
  const date = new Date(isoString);
  const formattedDate = isNaN(date.getTime())
    ? "تاريخ غير صالح"
    : format(date, "yyyy-MM-dd");

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [onDelete] = AdminDeleteCouponHook(coupon._id);

  const handleDelete = async () => {
    await onDelete();
    setConfirmDelete(false); // لإخفاء رسالة التأكيد
    // يمكنك هنا إضافة إشعار نجاح الحذف
    window.location.reload(); // لإعادة تحميل الصفحة بعد الحذف
  };

  return (
    <div className="coupon-card my-3 px-3">
      <Row className="d-flex justify-content-between align-items-center">
        <Col xs="6" className="coupon-name">
          <div>{coupon.name}</div>
        </Col>
        <Col xs="6" className="d-flex justify-content-end">
          <Link to={`/Admin/edit-coupon/${coupon._id}`} className="edit-link">
            <AiOutlineEdit size={20} />
            <span className="action-text">تعديل</span>
          </Link>
          <div
            className="delete-link"
            onClick={() => setConfirmDelete(true)}
          >
            <AiOutlineDelete size={20} color="red" />
            <span className="action-text">ازالة</span>
          </div>
        </Col>
      </Row>

      {confirmDelete && (
        <Alert
          variant="warning"
          dismissible
          onClose={() => setConfirmDelete(false)}
          style={{ position: "relative", zIndex: "100" }}
        >
          هل أنت متأكد من حذف الكوبون؟
          <div className="mt-2">
            <Button
              variant="danger"
              onClick={handleDelete}
              className="ms-2"
            >
              نعم
            </Button>
            <Button
              variant="secondary"
              onClick={() => setConfirmDelete(false)}
              className="ms-2"
            >
              لا
            </Button>
          </div>
        </Alert>
      )}

      <Row className="coupon-details mt-3">
        <Col xs="12">
          <div className="detail-item">
            <span>تاريخ الانتهاء:</span>
            <span>{formattedDate}</span>
          </div>
        </Col>
        <Col xs="12">
          <div className="detail-item">
            <span>قيمة الخصم:</span>
            <span>{coupon.discount} %</span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAllCouponCard;
