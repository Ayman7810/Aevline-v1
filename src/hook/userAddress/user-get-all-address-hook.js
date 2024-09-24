/** @format */

import { useDispatch, useSelector } from "react-redux";
import { GetAlladdress } from "../../redux/action/addressAction";
import { useEffect } from "react";

const UserGetAllAddressHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(GetAlladdress());
    };

    run();
  }, [dispatch]);
  
  const res = useSelector((state) => state.address?.allAddress) || {};

  return[res] 
};

export default UserGetAllAddressHook;
