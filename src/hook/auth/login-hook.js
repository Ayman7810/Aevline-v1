/** @format */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import notify from "../NotifcationHook";
import { loginUser } from "../../redux/action/authAction";

const LoginHook = () => {
  const dispatch = useDispatch(); // الحصول على دالة dispatch من Redux
  const navigate = useNavigate(); // الحصول على دالة التنقل من React Router

  const [email, setEmail] = useState(""); // حالة لتخزين البريد الإلكتروني
  const [password, setPassword] = useState(""); // حالة لتخزين كلمة المرور
  const [loading, setLoading] = useState(false); // حالة لتتبع حالة التحميل

  // دالة لتحديث البريد الإلكتروني
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // دالة لتحديث كلمة المرور
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // التحقق من صحة البيانات المدخلة
  const validateValues = () => {
    if (!email) {
      notify("من فضلك ادخل الايميل", "error");
      return false;
    }

    if (!password) {
      notify("من فضلك ادخل كلمة المرور", "error");
      return false;
    }

    return true;
  };

  // دالة لمعالجة عملية تسجيل الدخول
  const handleSubmit = async (e) => {
    e.preventDefault(); // منع إرسال النموذج بشكل افتراضي
    if (!validateValues()) {
      return; // إذا كانت القيم غير صالحة، لا تتابع
    }

    setLoading(true); // تعيين حالة التحميل إلى true عند بدء عملية تسجيل الدخول
    try {
      await dispatch(
        loginUser({
          email: email, // البريد الإلكتروني
          password: password, // كلمة المرور
        })
      );
    } catch (error) {
      // عرض إشعار عند حدوث خطأ
      notify("حدث خطأ في تسجيل الدخول. يرجى المحاولة لاحقاً.", "error");
    } finally {
      setLoading(false); // تعيين حالة التحميل إلى false عند انتهاء العملية
    }
  };

  const res = useSelector((state) => state?.auth); // الحصول على حالة الاستجابة من Redux

  useEffect(() => {
    // التحقق من انتهاء حالة التحميل ووجود استجابة
    if (!loading && res) {
      const { loginUser } = res;
      if (loginUser?.data?.token ) {
        // إذا كانت الاستجابة تحتوي على توكن، تعني أن تسجيل الدخول تم بنجاح
        localStorage.setItem("token", loginUser.data.token); // تخزين التوكن في localStorage
        localStorage.setItem("user", JSON.stringify(loginUser.data.data)); // تخزين بيانات المستخدم في localStorage
        notify("تم تسجيل الدخول بنجاح", "success"); // عرض إشعار النجاح
        setTimeout(() => {
          navigate("/"); // الانتقال إلى الصفحة الرئيسية بعد تأخير
        }, 2000); // تأخير 6 ثوانٍ
      } else {
        // إذا لم يكن هناك توكن، تعني أن تسجيل الدخول فشل
        localStorage.removeItem("token"); // إزالة التوكن من localStorage
        localStorage.removeItem("user"); // إزالة بيانات المستخدم من localStorage

        const errors = loginUser?.data?.errors;
        const error = loginUser?.data?.message;

        if (error) {
          notify("الايميل او كلمة المرور غير صحيحة", "error"); // عرض إشعار عند وجود رسالة خطأ
        }
        if (errors && errors.length > 0) {
          // عرض إشعارات للأخطاء الموجودة في الاستجابة
          const errorMsg = errors[0]?.msg;
          if (errorMsg === "Invalid email formate") {
            notify("الايميل غير مقبول بهذا الشكل", "error");
          } else {
            notify("حدث خطأ غير معروف", "error");
          }
        }
      }
    }
  }, [loading, res, navigate]); // إضافة `loading` و `res` و `navigate` كمراقبين

  // التحقق من حالة تسجيل الدخول عند تحميل الصفحة
  useEffect(() => {
    // تحقق من التوكن فقط عند محاولة الوصول إلى صفحة تسجيل الدخول
    const token = localStorage.getItem("token");
    if (token) {
      // إذا كان هناك توكن، قم بإعادة التوجيه إلى الصفحة الرئيسية
      navigate("/"); // توجيه المستخدم إلى الصفحة الرئيسية
    }
  }, [navigate]); // إضافة `navigate` كمراقب

  return [email, password, loading, handleEmail, handlePassword, handleSubmit];
};

export default LoginHook;
