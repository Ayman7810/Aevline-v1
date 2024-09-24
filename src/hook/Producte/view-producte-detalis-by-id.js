import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetProducteById,
  GetSimilarProductes,
} from "../../redux/action/producteAction";
import mobile from "../../images/abaya/jacket-2.jpg";
import { GetCategoryById } from "../../redux/action/categoryAction";
import { GetBrandById } from "../../redux/action/brandAction";

const ViewProducteDetalisById = (id) => {
  const dispatch = useDispatch();

  // الحصول على بيانات المنتج، الفئة، العلامة التجارية، والمنتجات المشابهة من الـ Redux store
  const producteData = useSelector((state) => state.productes.OneProducte);
  const catagoryData = useSelector((state) => state.allCategory.OneCatygory);
  const brandData = useSelector((state) => state.allBrands.OneBrand);
  const similarProductes = useSelector(
    (state) => state.productes.SimilarProductes
  );

  // تحميل بيانات المنتج بناءً على id
  useEffect(() => {
    const run = async () => {
      await dispatch(GetProducteById(id));
    };

    run();
  }, [id, dispatch]);

  // تحميل بيانات الفئة والعلامة التجارية والمنتجات المشابهة بناءً على البيانات المحملة
  useEffect(() => {
    const item = producteData?.data || {}; // استخدام البيانات الحالية أو كائن فارغ
    const run = async () => {
      if (item.category) await dispatch(GetCategoryById(item.category));
      if (item.brand) await dispatch(GetBrandById(item.brand));
      if (item.category) await dispatch(GetSimilarProductes(item.category));
    };

    run();
  }, [producteData?.data, dispatch]);

  const item = producteData?.data || {}; // استخدام البيانات الحالية أو كائن فارغ
  const images = item.images
    ? item.images.map((img) => ({ original: img }))
    : [{ original: mobile }];
  // معالجة بيانات الفئة والعلامة التجارية والمنتجات المشابهة
  const cat = catagoryData?.data || [];
  const brand = brandData?.data || [];
  const prod = similarProductes?.data || [];

  // لجلب المنتجات المشابهه من دون المننتج المعروض
  var newarr = prod.filter(val => val._id !== id)

  // إرجاع البيانات المطلوبة
  return [item, images, cat, brand, newarr];
};

export default ViewProducteDetalisById;
