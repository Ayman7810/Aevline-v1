import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCategory } from '../../redux/action/categoryAction';

const GetHomeCategoryHook = () => {
    const dispach = useDispatch();
    useEffect(() => {
      dispach(GetAllCategory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const categoryData = useSelector((state) => state.allCategory);

    
    const colors = [
      "#e39aec",
      "#ffaf96",
      "#03a9f4",
      "#c3ffcd",
      "#a4fff7",
      "#ff9877",
    ];
  return [ categoryData , colors]
}

export default GetHomeCategoryHook
