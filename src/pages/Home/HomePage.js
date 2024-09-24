import React from "react";
import NavBar from "../../components/Uitilty/NavBarLogin/NavBar";
import Banner from "../../components/Home/Banner/Banner";
import Categories from "../../components/Category/Categories/Categories";
import ProductContainerGrid from "../../components/Product/ProductContinerGrid/ProductContinerGrid";
import ProductFeaturedDeals from "../../components/Product/ProductFeaturedDeals/ProductFeaturedDeals";
import { Col, Row } from "react-bootstrap";
import OurServices from "../../components/OurServices/OurServices";
import Footer from "../../components/Uitilty/Footer/Footer";
import ViewHomeProductHook from "../../hook/Producte/view-home-producte-hook";

const HomePage = () => {
  const [items ,prod] = ViewHomeProductHook(); // تأكد من أن هذا يرجع مصفوفة

  return (
    <div>
      <NavBar />
      <Banner />
      {/* <Categories /> */}
      <ProductContainerGrid products={items} title={"احدث المنتجات"} btn={"المزيد"} />
      <Row className="m-0">
        <Col lg="9">
          <ProductFeaturedDeals />
        </Col>
        <Col lg="3">
          <OurServices />
        </Col>
      </Row>
      <ProductContainerGrid  products={prod?.slice(12,20)} title={"الاكثر مبيعا"} btn={"المزيد"} />
      <Footer />
    </div>
  );
};

export default HomePage;
