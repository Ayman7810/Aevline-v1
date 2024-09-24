/** @format */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPasswordUser } from "../../redux/action/userDataAction";
import notify from "../NotifcationHook";
import { useNavigate } from "react-router";

const EditPasswordUserHook = () => {
  const dispatch = useDispatch();
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false); // تم التغيير إلى false كقيمة ابتدائية
  const navigate = useNavigate();

  const handleCurrentPassword = (e) => setCurrentPassword(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handlePasswordConfirm = (e) => setPasswordConfirm(e.target.value);

  const handleSubmit = async () => {
    setLoading(true);
    await dispatch(
      editPasswordUser({
        currentPassword,
        password,
        passwordConfirm,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.user.password);

  useEffect(() => {
    if (!loading) {
      if (res && res.status === 200) {
        notify("تم تعديل كلمة المرور بنجاح", "success");

        // الانتقال إلى صفحة تسجيل الدخول بعد التعديل
        setTimeout(async () => {
          await navigate("/");
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          window.location.reload();
        }, 1500);
      } else if (res && res.status === 401) {
        notify("قم بتسجيل الدخول أولاً", "error");
      }
    }
  }, [loading, res, navigate]);

  return [
    currentPassword,
    password,
    passwordConfirm,
    handleCurrentPassword,
    handlePassword,
    handlePasswordConfirm,
    handleSubmit,
    res,
  ];
};

export default EditPasswordUserHook;
