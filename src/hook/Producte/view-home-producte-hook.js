/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  GetAllProductes, GetLimitProductes } from "../../redux/action/producteAction";

const VeiwHomeProducteHook = () => {
  const dispach = useDispatch();

  useEffect(() => {
    dispach(GetLimitProductes(4));
    dispach(GetAllProductes());
  }, []);

  const producteData = useSelector((state) => state.productes.allProduct);
  const ProducteLimit = useSelector((state) => state.productes.producteLimit);

  let items  = [];
  if(ProducteLimit){
    items = ProducteLimit.data
  }else {
    items = []
  }


  let prod  = [];
  if(producteData){
    prod  = producteData.data
  }else {
    prod = []
  }
  

  return [items ,prod]
};

export default VeiwHomeProducteHook;
