/** @format */

import  { useState } from "react";

const GetColorHook = () => {
  const [indexColor, setIndexColor] = useState();
  const [valColor, setValColor] = useState();
  const getColor = (index, color) => {
    setIndexColor(index);
    setValColor(color);
  };

  return [getColor, indexColor, valColor];
};

export default GetColorHook;
