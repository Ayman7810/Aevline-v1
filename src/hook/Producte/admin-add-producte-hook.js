
import  { useEffect, useState } from "react";
import { GetAllCategory } from "../../redux/action/categoryAction";
import { GetAllBrands } from "../../redux/action/brandAction";
import { GetSubCategories } from "../../redux/action/subCategoryAction";
import notify from "../NotifcationHook";
import { createProducte } from "../../redux/action/producteAction";
import { useDispatch, useSelector  } from "react-redux";


const AdminAddProducteHook = () => {
  //   get data categoey from db

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllCategory());
    dispatch(GetAllBrands());
  }, []);

  
  const brandData = useSelector((state) => state.allBrands.brand);
  const categoryData = useSelector((state) => state.allCategory.category);
  const subCategoryData = useSelector((state) => state.subCategory.subCategory);

 

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
  const handeltMainCategory = async (e) => {
    if (e.target.value !== 0) {
      await dispatch(GetSubCategories(e.target.value));
    }
    setMainCategory(e.target.value);
  };

 
  useEffect(() => {
    //   console.log(subCategoryData.data);
    if (mainCategory !== "0") {
      if (subCategoryData.data) {
        setOptions(subCategoryData.data);
      }
    }
  }, [mainCategory]);
  //   console.log(mainCategory);

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

  //   handel submite
  const handelSubmite = async (e) => {
    e.preventDefault();

    if (
      (prodName === "",
      prodDrecription === "" ||
        priceBefor === 0 ||
        mainCategory === 0 ||
        images.length <= 0)
    ) {
      notify("الرجاء اكمال البيانات", "warn");
      return;
    }

    const convertIamge = dataURLtoFile(images[0], Math.random() + ".png");

    const arrImages = Array.from(Array(Object.keys(images).length).keys()).map(
      (item, index) => {
        
        return dataURLtoFile(images[index], Math.random() + ".png");
      }
    );
    const formData = new FormData();

    formData.append("title", prodName);
    formData.append("description", prodDrecription);
    formData.append("quantity", qty);
    formData.append("price", priceBefor);
    formData.append("priceAfterDiscount", priceAfter);
    formData.append("imageCover", convertIamge);
    formData.append("category", mainCategory);
    formData.append("brand", brand);

    prodColors.map((color) => {
      formData.append("availableColors", color);
    });

    selectedSub.map((sub) => {
      formData.append("subcategory", sub._id);
    });

    arrImages.map((img) => {
      formData.append("images", img);
    });

    
    setLoding(true);
    await dispatch(createProducte(formData));
    setLoding(false);
  };

  const producteData = useSelector((state) => state.productes.producte);
  useEffect(() => {
    if (lodaing === false) {
      setProdName("");
      setProdDrecription("");
      setMainCategory("");
      setPriceBefor("السعر قبل الخصم");
      setPriceAfter("السعر بعد الخصم");
      setQty("الكمية المتاحة ");
      setSelectedSub([]);
      setOptions([]);
      setProdColors([]);
      setImages([]);
      setTimeout(() => {
        setLoding(true);
      }, 1500);
      // console.log(mainCategory);

      if (producteData) {
        if (producteData.status === 201) {
          notify("تمت الاضافة بنجاح", "success");
        } else {
          notify("هناك مشكلة في الاضافة", "error");
        }
      }
    }
  }, [lodaing]);


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // منع التصرف الافتراضي للزر Enter
      handelSubmite(e);
    }
  };


  return [images ,setImages ,prodName ,handelProdName,prodDrecription,handelProdDrecription,priceBefor,handelPriceBefor,
    priceAfter, handelPriceAfter,qty,handelQty,handeltMainCategory,categoryData,options , onSelect ,onRemove ,handelBrand ,brandData ,prodColors ,reomveColor , setShowColors ,showColor , handelShowColor ,handelSubmite ,handleKeyDown];
};

export default AdminAddProducteHook;
