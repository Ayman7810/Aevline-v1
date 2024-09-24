/** @format */

import  { useEffect, useState } from "react";
import { createBrand } from "../../redux/action/brandAction";
import { useDispatch, useSelector } from "react-redux";
import notify from "../NotifcationHook";
import avatar from "../../images/dashbord/admin/avatar.png";
const AdminAddBrandHook = () => {
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [lodaing, setlodaing] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispach = useDispatch();

  const handelName = (e) => {
    setName(e.target.value);
  };

  const onImgeChaing = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };

  const handelSubmite = async (e) => {
    e.preventDefault();
    if (name === "" || img === avatar) {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);
    setlodaing(true);
    setIsPress(true);
    await dispach(createBrand(formData));
    setlodaing(false);
  };

  const res = useSelector((state) => state.allBrands.brand);

  useEffect(() => {
    if (lodaing === false) {
      if (res.status === 201) {
        notify("تمت الاضافة بنجاح", "success");
        setName("");
        setImg(avatar);
      } else {
        notify("فشلت الاضافة", "error");
      }
      setlodaing(true);
      setIsPress(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lodaing]);

  return [img, onImgeChaing, handelName, name, handelSubmite, lodaing, isPress];
};

export default AdminAddBrandHook;
