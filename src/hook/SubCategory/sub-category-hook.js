/** @format */

import { useEffect, useState } from "react";
import notify from "../NotifcationHook";
import { createSubCategory } from "../../redux/action/subCategoryAction";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategory } from "../../redux/action/categoryAction";

const SubCategoryHook = () => {
  const dispach = useDispatch();
  useEffect(() => {
    dispach(GetAllCategory());
  }, []);

  // get data category from api and show in dropdwon menu
  const dataCategory = useSelector((state) => state.allCategory.category);
  const dataSubCategory = useSelector((state) => state.subCategory.subCategory);

  const [idCat, setIdCat] = useState("0");
  const [name, setName] = useState("");
  const [laoding, setLaoding] = useState(true);
  const [isPress, setIsPress] = useState(false);
  // get value category from dropdwon menu
  const handelSelected = (e) => {
    setIdCat(e.target.value);
  };

  const handelSetName = (e) => {
    setName(e.target.value);
  };
  // handle button submit
  const handelSubmie = async (e) => {
    e.preventDefault();

    // check conncted to internet
    // if (!navigator.onLine) {
    //   notify(" تأكد من انك متصل بالانترنت ", "warn");
    //   return;
    // }

    // validation data phas 1
    if (idCat === "0" || name === "") {
      notify("الرجاء إكمال البيانات", "warn");
      return;
    }

    setIsPress(true);
    setLaoding(true)
    // create subCategory
    await dispach(
      createSubCategory({
        name: name,
        category: idCat,
      })
    );

    setLaoding(false);
  };

  // validation data phas 2
  useEffect(() => {
    if (laoding === false) {
      setName("");
      setIdCat("0");
      setIsPress(false);
      if (dataSubCategory) {
        if (dataSubCategory.status === 201) {
          notify("تم الاضافة بنجاح", "success");
          return;
        } else {
          notify("فشلت العملية", "error");

          return;
        }
      }

      setLaoding(true);
    }
  }, [laoding]);

  return [name ,laoding,isPress, handelSetName, handelSelected, dataCategory, handelSubmie,idCat];
};

export default SubCategoryHook;
