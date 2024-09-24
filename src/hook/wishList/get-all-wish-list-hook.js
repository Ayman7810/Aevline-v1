import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllWishList } from '../../redux/action/wishListAction';

const GetAllWishListHhook = (products) => {
  
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [fivProd, setFivProd] = useState([]);
    const [Prod, setProd] = useState([]);
  
    useEffect(() => {
      const run = async () => {
        setLoading(true);
        await dispatch(getAllWishList());
        setLoading(false);
      };
      run();
    }, [dispatch]);
  
    const res = useSelector((state) => state.wishList.allWishList);
    // console.log(res)
    useEffect(() => {
      if (!loading && res) {
        if (res.data && res.data.length >= 1) {
          setFivProd(res.data.map((item) => item._id));
          setProd(products.map((item) => item._id))
        }
      }
    }, [loading, res]);

    return [Prod, fivProd]
}

export default GetAllWishListHhook
