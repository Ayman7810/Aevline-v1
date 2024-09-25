import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.js";
import LoginPage from "./pages/auth/LoginPage/LoginPage.js";
import RegesterPage from "./pages/auth/Regester/Regester.js";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage/ForgotPasswordPage.js";
import ProducteDetilsPage from "./pages/Producte/productDetilesPage/productDetilesPage.js";
import ProductesFilterPage from "./pages/Producte/productesFilterPage/productesFilterPage.js";
import CartPage from "./pages/Cart/CartPage.js";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.js";
import AdminIndex from "./pages/Admin/AdminIndexPage.js";
import AdminAddProductPage from "./pages/Admin/AdminAddProductPage.js";
import AdminAddBrandPage from "./pages/Admin/AdminAddBrandPage.js";
import AdminAddCategoryPage from "./pages/Admin/AdminAddCategoryPage.js";
import AdminAddSubCategoryPage from "./pages/Admin/AdminAddSubCategoryPage.js";
import AdminCreateCouponPage from "./pages/Admin/AdminCreateCouponPage.js";
import AdminAllProductsPage from "./pages/Admin/AdminAllProductsPage.js";
import AdminEditProductsPage from "./pages/Admin/AdminEditProductsPage.js";
import AdminEditCouponPage from "./pages/Admin/AdminEditCouponPage.js";
import AdminAllOrdersPage from "./pages/Admin/AdminAllOrdersPage.js";
import UserIndexPage from "./pages/User/UserIndexPage.js";
import UserFavoriteProductPage from "./pages/User/UserFavoriteProductPage.js";
import UserAddAddressPage from "./pages/User/UserAddAddressPage.js";
import UserAllAddresPage from "./pages/User/UserAllAddresPage.js";
import UserEditAddressPage from "./pages/User/UserEditAddressPage.js";
import UserProfilePage from "./pages/User/UserProfilePage.js";
import EditUserProfilePage from "./pages/User/EditUserProfilePage.js";
import ProductesByCategoryPage from "./pages/Producte/ProductesByCategoryPage/ProductesByCategoryPage.js";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="text-center">
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Regester" element={<RegesterPage />} />
          <Route path="/Reset-password" element={<ForgotPasswordPage />} />
          <Route path="/producte-detalis/:id" element={<ProducteDetilsPage />} />
          <Route path="/products" element={<ProductesFilterPage />} />
          <Route path="/productes-by-category/:id" element={<ProductesByCategoryPage />} />
          <Route path="/cart" element={<CartPage />} />

          {/* Admin Routes */}
          <Route path="/Admin/index" element={<AdminIndex />} />
          <Route path="/Admin/add-productes" element={<AdminAddProductPage />} />
          <Route path="/Admin/add-brand" element={<AdminAddBrandPage />} />
          <Route path="/Admin/add-category" element={<AdminAddCategoryPage />} />
          <Route path="/Admin/add-sub-category" element={<AdminAddSubCategoryPage />} />
          <Route path="/Admin/create-coupon" element={<AdminCreateCouponPage />} />
          <Route path="/Admin/all-productes" element={<AdminAllProductsPage />} />
          <Route path="/Admin/edit-Products/:id" element={<AdminEditProductsPage />} />
          <Route path="/Admin/edit-coupon/:id" element={<AdminEditCouponPage />} />
          <Route path="/Admin/all-orders" element={<AdminAllOrdersPage />} />

          {/* User Routes */}
          <Route path="/User/index" element={<UserIndexPage />} />
          <Route path="/User/favorite-products" element={<UserFavoriteProductPage />} />
          <Route path="/User/add-address" element={<UserAddAddressPage />} />
          <Route path="/User/addresses" element={<UserAllAddresPage />} />
          <Route path="/User/edit-address/:id" element={<UserEditAddressPage />} />
          <Route path="/User/Profile" element={<UserProfilePage />} />
          <Route path="/User/edit-profile" element={<EditUserProfilePage />} />
        </Routes>
      </HashRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
