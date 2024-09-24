/** @format */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../../redux/action/addressAction";
import notify from "../NotifcationHook";
import { useNavigate } from "react-router";
const UserAddAddressHook = () => {
  const dispatch = useDispatch();
  const navegite = useNavigate();
  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);

  const handelAlias = (e) => {
    setAlias(e.target.value);
    // console.log(e.target.value);
  };
  const handelDetails = (e) => {
    setDetails(e.target.value);
  };
  const handelPhone = (e) => {
    setPhone(e.target.value);
  };

  const handelSubmite = async () => {
    if (alias === "" || details === "" || phone === "") {
      notify("الرجاء اكمال البيانات", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      addAddress({
        alias: alias,
        details: details,
        phone: phone,
        city: "",
        postalCode: "",
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.address.addAddress) || {};
  useEffect(() => {
    if (!loading && res) {
      if (res.status && res.status === 200) {
        notify("تمت الاضافة بنجاح", "success");
        setAlias("");
        setDetails("");
        setPhone("");
        setTimeout(() => {
            navegite('/User/addresses')
        }, 1500);
      } else {
        notify("لقد حدثت مشكلة اثناء الاضافة", "error");
      }
    }
    setLoading(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, res]);

  return [
    alias,
    details,
    phone,
    handelAlias,
    handelDetails,
    handelPhone,
    handelSubmite,
  ];
};

export default UserAddAddressHook;
