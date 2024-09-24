import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EditDataUserHook from "../../../hook/userData/edit-data-user-hook";
import { ToastContainer } from "react-toastify";

const EditUserProfile = () => {
  const navigate = useNavigate();
  const {
    userName,
    userPhone,
    userEmail,
    handleUserName,
    handleUserPhone,
    handleUserEmail,
    onEdit,
  } = EditDataUserHook();

  const handleSave = () => {
    onEdit();
    navigate("/User/Profile"); // إعادة التوجيه بعد الحفظ (إذا كان هناك حاجة لذلك)
  };

  return (
    <Container>
      <h1 className="text-center">تعديل البيانات الشخصية</h1>
      <Card className="my-3">
        <Card.Body>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="اسم المستخدم..."
            value={userName}
            onChange={handleUserName}
          />
          <input
            type="phone"
            className="form-control mb-3"
            placeholder="رقم الهاتف..."
            value={userPhone}
            onChange={handleUserPhone}
          />
          <input
            type="email"
            className="form-control mb-3"
            placeholder="الايميل ..."
            value={userEmail}
            onChange={handleUserEmail}
          />
          <Button variant="success" onClick={handleSave}>
            حفظ
          </Button>
        </Card.Body>
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default EditUserProfile;
