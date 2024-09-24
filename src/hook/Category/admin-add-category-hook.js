/** @format */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../NotifcationHook";
import { createCategory } from "../../redux/action/categoryAction";
import avatar from "../../images/dashbord/admin/avatar.png";
const AdminAddCategoryHook = () => {
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(avatar);
  const [laoding, setLaoding] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispach = useDispatch();

  // change value name
  const SetName = (e) => {
    setName(e.target.value);
  };
  // get img from files
  const onImgeChaing = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };

  const res = useSelector((state) => state.allCategory.category);

  const handleSubmite = async (e) => {
    e.preventDefault();
    // check conncted to internet
    // if (!navigator.onLine) {
    //   notify(" تأكد من انك متصل بالانترنت ", "warn");
    //   return;
    // }

    if (name === "" || selectedFile === null) {
      notify("من فضلك أكمل البيانات", "warn");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);
    setLaoding(true);
    setIsPress(true);
    await dispach(createCategory(formData));
    setLaoding(false);
  };

  useEffect(() => {
    if (laoding === false) {
      setImg(avatar);
      setSelectedFile(null);
      setName("");
      setLaoding(true);
      setIsPress(false);
      if (res.status === 201) {
        notify("تمت الاضافة بنجاح", "success");
      } else {
        notify("فشلت الاضافة", "error");
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [laoding]);

  return [img, name, laoding, isPress, onImgeChaing, handleSubmite, SetName];
  
};

export default AdminAddCategoryHook;
