/** @format */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editDataUser } from "../../redux/action/userDataAction";
import notify from "../NotifcationHook";
import { result } from "lodash";

const EditDataUserHook = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [loading, setLoading] = useState(true);

  let user = [];
  if (JSON.parse(localStorage.getItem("user")) !== null) {
    user = JSON.parse(localStorage.getItem("user"));
  }
  useEffect(() => {
    setUserName(user.name);
    setUserPhone(user.phone);
    setUserEmail(user.email);
  }, []);

  const handleUserName = (e) => setUserName(e.target.value);
  const handleUserPhone = (e) => setUserPhone(e.target.value);
  const handleUserEmail = (e) => setUserEmail(e.target.value);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const showModelEdite = () => {
    setShowEdit(true);
  };

  let body = {};

  if (user.email === userEmail) {
    body = {
      name: userName,
      phone: userPhone,
    };
  } else {
    body = {
      name: userName,
      email: userEmail,
      phone: userPhone,
    };
  }
  const onEdite = async () => {
    if (userEmail === "" || userName === "" || userPhone === "") {
      notify("الرجاء إكمال البيانات", "warn");
      return;
    }

    setLoading(true);
    await dispatch(editDataUser(body));
    setLoading(false);
    setShowEdit(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const resulte = useSelector((state) => state?.user.editUser) || {};

  useEffect(() => {
    if (loading === false) {
      if (resulte && resulte?.status === 200) {
        localStorage.setItem("user", JSON.stringify(resulte.data.data?.user));
        notify("تم التعديل بنجاح", "success");
        setTimeout(() => {
          window.location.reload()
        }, 1500);
      } else if (
        resulte?.data?.errors[0]?.msg === "accept only egypt phone numbers"
      ) {
        notify("يسمح لارقام مصر والسعودية فقط", "error");
      } else if (resulte?.data?.errors[0]?.msg === "E-mail already in use") {
        notify("هذا الايميل موجود مسبقاً", "error");
      } else {
        notify("هناك مشكلة في التعديل", "error");
      }
    }
  }, [loading, resulte]);

  return [
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
    resulte,
    loading,
  ];
};

export default EditDataUserHook;
