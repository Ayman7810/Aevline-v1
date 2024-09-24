import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductesByCategory } from "../../redux/action/producteAction";

const ViewProductsByCategoryHook = (id) => {
  const limit = 2;
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(GetProductesByCategory(limit, 1, id));
    };

    run();
  }, [id, dispatch]); // تأكد من تضمين dispatch في قائمة الاعتماد

  const noPress = async (page) => {
    await dispatch(GetProductesByCategory(limit, page, id));
  };

  const ProducteLimit = useSelector(
    (state) => state?.productes?.productsByCategory
  );

  // تأكد من أن ProducteLimit موجود
  const items = ProducteLimit ? ProducteLimit.data : [];
  const pagination = ProducteLimit ? ProducteLimit.paginationResult : {};
  const resultCount = ProducteLimit ? ProducteLimit.results : 0;

  const pageCount = pagination?.numberOfPages || 0;

  return [items, pageCount, noPress];
};

export default ViewProductsByCategoryHook;
