/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddressById } from "../../redux/action/addressAction";

const UserGetAddressByIdHook = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getAddressById(id));
    };

    run();
  }, []);
  const res = useSelector((state) => state.address?.address?.data?.data) || {};

  return [res];
};

export default UserGetAddressByIdHook;
