import { useEffect, useState } from "react";
import notify from "../NotifcationHook";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/action/authAction";
import { useNavigate } from "react-router";

const RegesterHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("01012545441");
  const [password, setPassword] = useState('');
  const [confitmPassword, setConfitmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Handler functions to update state variables
  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleConfitmPassword = (e) => setConfitmPassword(e.target.value);

  // Validate the input values before submitting
  const validateValues = () => {
    if (name === "") {
      notify("من فضلك ادخل اسم المستخدم", "error");
      return false;
    }
    if (email === "") {
      notify("من فضلك ادخل الايميل", "error");
      return false;
    }
    if (phone === "") {
      notify("من فضلك ادخل رقم الهاتف", "error");
      return false;
    }
    if (password !== confitmPassword) {
      notify("كلمة المرور غير متطابقة", "error");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    if (!validateValues()) {
      return;
    }

    setLoading(true);
    try {
      await dispatch(createUser({
        name,
        email,
        password,
        passwordConfirm: confitmPassword,
        phone,
      }));
    } catch (error) {
      notify("حدث خطأ أثناء التسجيل، يرجى المحاولة لاحقاً", "error");
    } finally {
      setLoading(false);
    }
  };

  const resCreateUser = useSelector((state) => state.auth);

  useEffect(() => {
    if (!loading && resCreateUser) {
      const { createUser } = resCreateUser;
      if (createUser?.data?.token) {
        notify("تم انشاء الحساب بنجاح", "success");
        localStorage.setItem("token", createUser.data.token);
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setConfitmPassword("");
        setTimeout(() => navigate("/login"), 3000);
      } else if (createUser?.data?.errors[0]?.msg === "E-mail already in use") {
        notify("هذا الايميل مستخدم مسبقاً", "error");
      } else if (createUser?.data?.errors[0]?.msg === "Invalid email format") {
        notify("هذا الايميل غير مقبول", "error");
      }
    }
  }, [loading, resCreateUser, navigate]);

  return [
    name,
    email,
    phone,
    password,
    confitmPassword,
    handleName,
    handleEmail,
    handlePhone,
    handlePassword,
    handleConfitmPassword,
    handleSubmit,
    loading
  ];
};

export default RegesterHook;
