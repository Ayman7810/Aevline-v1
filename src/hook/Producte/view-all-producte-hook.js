import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductSearch } from "../../redux/action/producteAction";

const VeiwAllProducteHook = () => {
  const limit = 8;
  const dispatch = useDispatch();

  const sortData = () => {
    const sortType = localStorage.getItem("sortType") || "";
    switch (sortType) {
      case " السعر من الاعلى للاقل":
        return "-price";
      case "السعر من الاقل للاعلى":
        return "+price";
      case "بدون ترتيب":
        return "";
      case "الاكثر مبيعاً":
        return "-sold";
      case "الاكثر كمية":
        return "-quantity";
      case " الاعلى تقييماً":
        return "-ratingsQuantity";
      default:
        return "";
    }
  };

  const getStoreg = () => {
    const word = localStorage.getItem("searchWord") || "";
    const queryBrand = localStorage.getItem("brandChecked") || "";
    const queryCat = localStorage.getItem("catChecked") || "";
    const formPrice = localStorage.getItem("priceForm") || 0;
    const toPrice = localStorage.getItem("priceTo") || 0;

    const formPriceString = formPrice > 0 ? `&price[gte]=${formPrice}` : "";
    const toPriceString = toPrice > 0 ? `&price[lte]=${toPrice}` : "";

    return { word, queryBrand, queryCat, formPriceString, toPriceString };
  };

  const getProdecte = async () => {
    const { word, queryBrand, queryCat, formPriceString, toPriceString } = getStoreg();
    const sort = sortData();
    await dispatch(
      GetProductSearch(
        `sort=${sort}&limit=${limit}&keyword=${word}&${queryBrand}&${queryCat}${formPriceString}${toPriceString}`
      )
    );
  };

  useEffect(() => {
    getProdecte();
  }, []);

  const noPress = async (page) => {
    const { word, queryBrand, queryCat, formPriceString, toPriceString } = getStoreg();
    const sort = sortData();
    await dispatch(
      GetProductSearch(
        `page=${page}&sort=${sort}&limit=${limit}&keyword=${word}&${queryBrand}&${queryCat}${formPriceString}${toPriceString}`
      )
    );
  };

  const ProducteLimit = useSelector((state) => state.productes.producteLimit);
  const items = ProducteLimit?.data || [];
  const pagination = ProducteLimit?.paginationResult || [];
  const resultCount = ProducteLimit?.results || 0;

  return [items, pagination, noPress, getProdecte, resultCount];
};

export default VeiwAllProducteHook;
