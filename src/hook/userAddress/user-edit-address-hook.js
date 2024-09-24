/** @format */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../NotifcationHook";
import { editAddress } from "../../redux/action/addressAction";
import { useNavigate } from "react-router";

const UserEditAddressHook = (
  id,
  initialAlias,
  initialDetails,
  initialPhone
) => {
  const dispatch = useDispatch();
  const [alias, setAlias] = useState();
  const [details, setDetails] = useState();
  const [phone, setPhone] = useState();
  const [loading, setLoading] = useState(false);
  const navegite = useNavigate()

  useEffect(() => {
    setAlias(initialAlias);
    setDetails(initialDetails);
    setPhone(initialPhone);
  }, [initialAlias, initialDetails, initialPhone]);

  const handleAlisa = (e) => {
    setAlias(e.target.value);
  };

  const handleDetails = (e) => {
    setDetails(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);

    await dispatch(
      editAddress(id, {
        alias: alias,
        details: details,
        phone: phone,
      })
    );
    setLoading(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const address = useSelector((state) => state.address.editAddress) || {};
 
  useEffect(() => {
    if (loading === false && address.status !== undefined) {
      if (address.status === 200) {
        notify("تم التعديل بنجاح", "success");
        setTimeout(() => {
         navegite('/User/addresses')
         window.location.reload(false)
        }, 1500);
      } else {
        notify("هناك مشكلة في التعديل", "error");
      }
    }
  }, [loading, address]);

  return [
    handleAlisa,
    handleDetails,
    handlePhone,
    handleSubmit,
    alias,
    details,
    phone,
    loading,
    address,
  ];
};

export default UserEditAddressHook;
