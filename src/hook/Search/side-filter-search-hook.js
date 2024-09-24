import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategory } from "../../redux/action/categoryAction";
import { GetAllBrands } from "../../redux/action/brandAction";
import VeiwAllProducteHook from "../Producte/view-all-producte-hook";

const SideFilterSearchHook = () => {
  const dispatch = useDispatch();
  const [items, pagination, noPress, getProdecte, resultCount] = VeiwAllProducteHook();
  
  useEffect(() => {
    const run = async () => {
      await dispatch(GetAllCategory());
      await dispatch(GetAllBrands());
    };
    run();
  }, [dispatch]);

  const brandData = useSelector((state) => state.allBrands?.brand) || {};
  const catData = useSelector((state) => state.allCategory?.category) || {};

  const [catChecked, setCatChecked] = useState([]);
  const [brandChecked, setBrandChecked] = useState([]);
  const [from, setFrom] = useState(localStorage.getItem("priceForm") || 0);
  const [to, setTo] = useState(localStorage.getItem("priceTo") || 0);

  const handelCat = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setCatChecked([]);
    } else {
      setCatChecked(e.target.checked ? [...catChecked, value] : catChecked.filter((e) => e !== value));
    }
  };

  const handelBrand = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setBrandChecked([]);
    } else {
      setBrandChecked(e.target.checked ? [...brandChecked, value] : brandChecked.filter((e) => e !== value));
    }
  };

  useEffect(() => {
    const queryCat = catChecked.map((val) => "category[in][]=" + val).join("&");
    localStorage.setItem("catChecked", queryCat);
    getProdecte();
  }, [catChecked]);

  useEffect(() => {
    const queryBrand = brandChecked.map((val) => "brand[in][]=" + val).join("&");
    localStorage.setItem("brandChecked", queryBrand);
    getProdecte();
  }, [brandChecked]);

  const handelfromPrice = (e) => {
    setFrom(e.target.value);
    localStorage.setItem("priceForm", e.target.value);
  };

  const handelToPrice = (e) => {
    setTo(e.target.value);
    localStorage.setItem("priceTo", e.target.value);
  };

  useEffect(() => {
    getProdecte();
  }, [from, to]);

  return [
    catData,
    brandData,
    handelCat,
    handelBrand,
    handelfromPrice,
    handelToPrice,
  ];
};

export default SideFilterSearchHook;
