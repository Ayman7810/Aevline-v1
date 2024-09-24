/** @format */

import React from "react";
import "./CartPage.css"; // افترض أن CSS موجود هنا
import NavBar from "../../components/Uitilty/NavBarLogin/NavBar";
import CartItem from "../../components/Cart/CartItem";
import GetAllCartHook from "../../hook/cart/get-all-cart-hook";
import CartActions from "../../components/Cart/CartActions"; // استيراد المكون الجديد
import { ToastContainer } from "react-toastify";
import { Container, Row, Col, Alert } from "react-bootstrap"; // استيراد المكونات من Bootstrap

const CartPage = () => {
  const [res] = GetAllCartHook();
  const products = res?.data?.products || [];
  const totalCartPrice = res?.data?.totalCartPrice || 0;
  const totalAfterDiscount = res?.data?.totalAfterDiscount || 0;

  return (
    <>
      <NavBar />
      <section className="cart-section">
        <Container>
          <h3 className="text-center">سلة التسوق</h3>
          <Row className="pb-2" style={{background:'#f5f5f56b' , borderRadius:'10px '}}>
            {products.map((item) => (
              <Col xs={12} md={12} lg={6} key={item._id} className="mt-2">
                <CartItem item={item} className="mt-2" />
              </Col>
            ))}
          </Row>
          {products.length === 0 ? (
            <Alert variant="info" className="text-center ">
              <h2>قم بإضافة منتجات إلى السلة</h2>
            </Alert>
          ) : (
            <>
              <div className="total-cost mb-4">
                <h6>
                  الإجمالي:
                  {totalAfterDiscount > 0 ? (
                    <span className="mx-2">
                      بعد الخصم: {totalAfterDiscount} ريال
                    </span>
                  ) : (
                    <span>{totalCartPrice} ريال</span>
                  )}
                </h6>
              </div>
              <CartActions numOfCartItems={res.numOfCartItems} />
            </>
          )}
    
        </Container>
      </section>
      <ToastContainer />
    </>
  );
};

export default CartPage;
