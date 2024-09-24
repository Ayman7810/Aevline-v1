/* eslint-disable react-hooks/exhaustive-deps */
/** @format */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategory } from "../../redux/action/categoryAction";
import { GetAllBrands } from "../../redux/action/brandAction";
import { GetSubCategories } from "../../redux/action/subCategoryAction";
import notify from "../NotifcationHook";
import {
  createProducte,
  editProducte,
  GetProducteById,
} from "../../redux/action/producteAction";

const AdminEditProducteHook = (id) => {
  //   get data categoey from db

  const dispatch = useDispatch();
  useEffect(() => {
   
    dispatch(GetProducteById(id));
    dispatch(GetAllCategory());
    dispatch(GetAllBrands());
  }, []);

  const brandData = useSelector((state) => state.allBrands?.brand) || {};
  const categoryData =
    useSelector((state) => state.allCategory?.category) || {};
  const subCategoryData =
    useSelector((state) => state.subCategory?.subCategory) || {};

  const itme = useSelector((state) => state.productes?.OneProducte?.data);
   
  //   states the form inputs
  const [images, setImages] = useState([]);
  const [prodName, setProdName] = useState("");
  const [prodDrecription, setProdDrecription] = useState("");
  const [priceBefor, setPriceBefor] = useState("السعر قبل الخصم");
  const [priceAfter, setPriceAfter] = useState("السعر بعد الخصم");
  const [qty, setQty] = useState("الكمية المتاحة ");
  const [mainCategory, setMainCategory] = useState("");
  const [lodaing, setLoding] = useState(true);
  const [selectedSub, setSelectedSub] = useState([]);
  const [options, setOptions] = useState([]);
  const [brand, setBrand] = useState("");
  const [prodColors, setProdColors] = useState([]);
  //   show color
  const [showColor, setShowColors] = useState(false);

  useEffect(() => {
    if (itme) {
      setProdName(itme?.title);
      setImages(itme?.images);
      setSelectedSub(itme?.subcategory);
      setProdDrecription(itme?.description);
      setPriceBefor(itme.price);
      setQty(itme?.quantity);
      setMainCategory(itme?.category);
      setBrand(itme?.brand);
      setProdColors(itme?.availableColors);
    }
  }, [itme]);

  const handelShowColor = (color) => {
    setShowColors(!showColor);
    setProdColors([...prodColors, color.hex]);
  };

  const reomveColor = (color) => {
    const newColor = prodColors.filter((e) => e !== color);
    setProdColors(newColor);
  };

  const onSelect = (selectedList) => {
    setSelectedSub(selectedList);
  };
  const onRemove = (selectedList) => {
    setSelectedSub(selectedList);
  };

  // get valus from input form
  const handelProdName = (e) => {
    setProdName(e.target.value);
  };
  const handelProdDrecription = (e) => {
    setProdDrecription(e.target.value);
  };
  const handelPriceBefor = (e) => {
    setPriceBefor(e.target.value);
    // console.log(e.target.value);
  };
  const handelPriceAfter = (e) => {
    setPriceAfter(e.target.value);
  };
  const handelQty = (e) => {
    setQty(e.target.value);
  };
  const handelBrand = (e) => {
    setBrand(e.target.value);
  };
  const handeltMainCategory = (e) => {
    setMainCategory(e.target.value);
  };

  useEffect(() => {
    if (mainCategory !== 0) {
      const run = async () => {
        await dispatch(GetSubCategories(mainCategory));
      };

      run();
    }
  }, [mainCategory]);

  useEffect(() => {
    if (subCategoryData.data) {
      setOptions(subCategoryData.data);
    }
  }, [subCategoryData]);

  //   convert base64 image to file
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  //convert url to file
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
  };

  //   handel submite
  const handelSubmite = async (e) => {
    // console.log(images)
    e.preventDefault();
    if (
      (prodName === "",
      priceBefor <= 0 ||
        prodDrecription === "" ||
        mainCategory === 0 ||
        images.length <= 0)
    ) {
      notify("الرجاء اكمال البيانات", "warn");
      return;
    }

    let imgCover;
    if (images[0].length <= 1000) {
      await convertURLtoFile(images[0]).then((val) => (imgCover = val));
    } else {
      imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    }


    let itemImages = [];
    //convert array of base 64 image to file
    Array.from(Array(Object.keys(images).length).keys()).map((item, index) => {
      if (images[index].length <= 1000) {
        convertURLtoFile(images[index]).then((val) => itemImages.push(val));
        // console.log(images[index])
      }

      if (images[index].length > 1000) {
        // console.log(images[index])
        itemImages.push(dataURLtoFile(images[index], Math.random() + ".png"));
      }
    });

    const formData = new FormData();

    formData.append("title", prodName);
    formData.append("description", prodDrecription);
    formData.append("quantity", qty);
    formData.append("price", priceBefor);
    formData.append("category", mainCategory);
    formData.append("brand", brand);

    prodColors.map((color) => {
      formData.append("availableColors", color);
    });

    selectedSub.map((sub) => {
      formData.append("subcategory", sub._id);
    });


    setTimeout(() => {
      formData.append("imageCover", imgCover);
      itemImages.map((item) => {
        formData.append("images", item);
       
      });
    }, 1000);

    //  console.log(prodName)
    //  console.log(prodDrecription)
    //  console.log(qty)
    //  console.log(priceBefor)
    setTimeout(async () => {
      setLoding(true);
        // console.log(prodName )
      await dispatch(editProducte( id,formData));
      setLoding(false);
    }, 1000);
  };

  const producteData =useSelector((state) => state.productes.editProducte) ;
  // console.log(producteData)
  
  useEffect(() => {
    // console.log(producteData)
    if (lodaing === false) {
    
      setProdName("");
      setProdDrecription("");
      setMainCategory("");
      setBrand("");
      setPriceBefor("السعر قبل الخصم");
      setPriceAfter("السعر بعد الخصم");
      setQty("الكمية المتاحة ");
      setSelectedSub([]);
      setOptions([]);
      setProdColors([]);
      setImages([]);
      setTimeout(() => {
        setLoding(true);
      }, 2000);

      if (producteData) {
    
        if (producteData?.status === 200) {
          notify("تم التعديل  بنجاح", "success");
        } else {
          notify("هناك مشكلة في التعديل", "error");
        }
      }
    }
  }, [lodaing]);

  return [
    producteData,
    images,
    setImages,
    prodName,
    handelProdName,
    prodDrecription,
    handelProdDrecription,
    priceBefor,
    handelPriceBefor,
    priceAfter,
    handelPriceAfter,
    qty,
    handelQty,
    handeltMainCategory,
    categoryData,
    options,
    onSelect,
    onRemove,
    handelBrand,
    brandData,
    prodColors,
    reomveColor,
    setShowColors,
    showColor,
    handelShowColor,
    handelSubmite,
    mainCategory,
    brand,
  ];
};

export default AdminEditProducteHook;
