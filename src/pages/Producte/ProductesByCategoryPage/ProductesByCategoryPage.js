/** @format */

import React from "react";
import { Container, Row } from "react-bootstrap";
import NavBar from "../../../components/Uitilty/NavBarLogin/NavBar";
import Footer from "../../../components/Uitilty/Footer/Footer";
import ViewProductsByCategoryHook from "../../../hook/Producte/view-products-by-category-hook.js";
import Pagenation from "../../../components/Uitilty/Pagenation/Pagenation.js";
import { useParams } from "react-router";
import ProductContainerGrid from "../../../components/Product/ProductContinerGrid/ProductContinerGrid";

const ProductesByCategoryPage = () => {
  const { id } = useParams();
  const [items, pageCount, noPress] = ViewProductsByCategoryHook(id);
  return (
    <>
      {/* <NavBar /> */}

      <Container>
        <Row>
          <ProductContainerGrid products={items} nulll={1} />
        </Row>
        {pageCount > 0 ? (
          <Pagenation PageCount={pageCount} noPress={noPress} />
        ) : null}
      </Container>

      <Footer />
    </>
  );
};

export default ProductesByCategoryPage;
