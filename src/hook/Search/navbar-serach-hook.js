import { useEffect, useState } from "react";
import VeiwAllProducteHook from "../Producte/view-all-producte-hook";
import { useNavigate } from "react-router";

const NavbarSerachHook = () => {
  const [items, pagination, noPress, getProdecte, resultCount] = VeiwAllProducteHook();
  const [searchWord, setSearchWord] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedSearchWord = localStorage.getItem('searchWord');
    if (storedSearchWord) {
      setSearchWord(storedSearchWord);
    }
  }, [searchWord]);
  
  // console.log('czxc')
  const handelChangeSearch = (e) => {
    const value = e.target.value;
    localStorage.setItem('searchWord', value);
    setSearchWord(value);

    let path = window.location.pathname;
    if (path !== '/products' && localStorage.getItem('searchWord') !== null) {
      setTimeout(() => {
        navigate('/products');
      }, 1000);
    }
  };

  const clearSearchWord = () => {
    localStorage.removeItem('searchWord');
    setSearchWord('');
  };

  useEffect(() => {
    setTimeout(() => {
      getProdecte();
    }, 1000);
  }, [searchWord]);

  return [searchWord, handelChangeSearch, clearSearchWord];
};

export default NavbarSerachHook;
