/** @format */

import React from "react";
import NavMovePage from "../../../components/Uitilty/NavMovePage/NavMovePage";
import { Col, Container, Dropdown, Pagination, Row } from "react-bootstrap";
import FilterProductes from "../../../components/Product/FilterProduces/FilterProductes";
import ContDrobdown from "../../../components/Product/ContDrobdown/ContDrobdown.js";
import ProductContainerGrid from "../../../components/Product/ProductContinerGrid/ProductContinerGrid";
import "./style.css";
import NavBar from "../../../components/Uitilty/NavBarLogin/NavBar";
import { FaFilter } from "react-icons/fa";
import Footer from "../../../components/Uitilty/Footer/Footer";
import VeiwAllProducteHook from "../../../hook/Producte/view-all-producte-hook";
import Pagenation from "../../../components/Uitilty/Pagenation/Pagenation";

const ProductesFilterPage = () => {
  const [items, pagenaiton, noPress, getProdecte, resulte] =
  VeiwAllProducteHook();

var pageCout = 0;

if (pagenaiton) {
  pageCout = pagenaiton.numberOfPages;
}
  return (
    <>
      <NavBar />
      <div>
        <NavMovePage category={true} title="كل المنتجات" page="المنتجات" />
        <Container>
          <ContDrobdown onClick={getProdecte}/>
          <Row>
            <Col sm="2">
              <FilterProductes   />
            </Col>
            <Col sm="10">
              <ProductContainerGrid products={items} nulll={1} />
             
            </Col>
          </Row>
          <Pagenation PageCount={pageCout} noPress={noPress} />
        </Container>
      </div>
      <Footer/>
    </>
  );
};

export default ProductesFilterPage;
