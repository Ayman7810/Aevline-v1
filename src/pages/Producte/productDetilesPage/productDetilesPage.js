/** @format */

import React, { useState } from "react";
import { Accordion, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // استيراد أيقونات النجوم
import NavMovePage from "../../../components/Uitilty/NavMovePage/NavMovePage";
import RateContainer from "../../../components/Rate/RateContainer";
import NavBar from "../../../components/Uitilty/NavBarLogin/NavBar";
import Zoom from "react-medium-image-zoom";
import ImageZoom from "react-image-zooom";
import "react-medium-image-zoom/dist/styles.css";
import "./style.css";
import ViewProducteDetalisById from "../../../hook/Producte/view-producte-detalis-by-id";
import cards from "../../../images/cards.png";
import ProductContainerGrid from "../../../components/Product/ProductContinerGrid/ProductContinerGrid";
import Footer from "../../../components/Uitilty/Footer/Footer";

const ProducteDetilsPage = () => {
  const { id } = useParams();
  const [activeIndex, setActiveIndex] = useState(null);
  const [item, images, cat, brand, newarr] = ViewProducteDetalisById(id);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  if (item) {
    var ratQty = item.ratingsQuantity;
    var ratAvg = item.ratingsAverage;
  }

  return (
    <>
      <NavBar />
      <NavMovePage title="تفاصيل المنتج" />
      <Container>
        <div className="back-link">
          <Link
            to="/products"
            style={{ textDecoration: "none", textAlign: "right" }}>
            &lt;&lt; كل المنتجات
          </Link>
        </div>
        <Row>
          <Col lg={6}>
            <div className="product-pic-zoom">
              {item && item.imageCover ? (
                <ImageZoom
                  className="product-big-img"
                  src={item.imageCover}
                  alt="Product image"
                  zoom="500"
                />
              ) : (
                <div>لا توجد صورة متاحة</div>
              )}
              <Row className="d-flex justify-content-between">
                {images?.map((img, index) => (
                  <Col
                    key={index}
                    className="card border-0 mt-4"
                    style={{ width: "10rem" }}>
                    <Zoom>
                      <img
                        src={img.original}
                        className="img-thumbnail"
                        alt={`Thumbnail ${index}`}
                      />
                    </Zoom>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col lg={6} className="product-details text-end">
            {item ? (
              <>
                <h2 className="p-title">{item.title}</h2>
                <h3 className="p-price">
                  {item.priceAfterDiscount ? (
                    <>
                      <span
                        style={{
                          textDecoration: "line-through",
                          fontWeight: "initial",
                          marginLeft: "10px",
                        }}>
                        {item.price} ريال
                      </span>
                      <span style={{ color: "#ff66b2" }}>
                        {item.priceAfterDiscount} ريال
                      </span>
                    </>
                  ) : (
                    <span>{item.price} ريال</span>
                  )}
                </h3>

                <div className="p-rating">
                  {/* {[...Array(5)].map((_, index) => {
                    const starType = index < item.ratingsAverage ? FaStar : FaRegStar;
                    return <starType key={index} />;
                  })} */}
                  <span style={{ fontWeight: "bold" }}> تقييم العملاء </span>
                  {item.ratingsAverage ? (
                    <span
                      className="me-2"
                      style={{ color: "#fe66b1 ", fontWeight: "bold" }}>
                      {item.ratingsAverage} <FaStar />
                    </span>
                  ) : (
                    <span className="me-2">لا توجد تقييمات </span>
                  )}
                </div>
                <div className="fw-size-choose">
                  <div className="color-container">
                    <p className="m-0">الألوان المتاحة</p>
                    {item.availableColors && item.availableColors.length > 0 ? (
                      item.availableColors.map((color, index) => (
                        <div
                          key={index}
                          className={`color-item ${
                            activeIndex === index ? "active" : ""
                          }`}
                          style={{ backgroundColor: color }}
                          onClick={() => handleClick(index)}>
                          <span></span>
                        </div>
                      ))
                    ) : (
                      <span>لا توجد ألوان متاحة</span>
                    )}
                  </div>
                </div>

                <div className="quantity">
                  <p className="ms-3 mb-2">الكمية المتاحة</p>
                  <div
                    className="border rounded-pill d-flex justify-content-center align-items-center"
                    style={{ width: "100px" }}>
                    <p className="mb-2 ms-3 text-center">{item.quantity}</p>
                  </div>
                </div>
                <Button
                  className="rounded-pill btn-more"
                  style={{ backgroundColor: "#ff66b2", border: "none" }}>
                  اشتري الان
                </Button>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>معلومات المنتج</Accordion.Header>
                    <Accordion.Body>
                      <p>{item.description}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>الشحن والإرجاع</Accordion.Header>
                    <Accordion.Body>
                      <h4>7 أيام إرجاع</h4>
                      <p>
                        الدفع عند الاستلام متاح
                        <br />
                        خدمة التوصيل للمنزل <span>3 - 4 أيام</span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>تفاصيل الدفع</Accordion.Header>
                    <Accordion.Body>
                      <img src={cards} alt="" />
                      <p>Lorem ipsum dolor sit amet...</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </>
            ) : (
              <div>لا توجد تفاصيل للمنتج</div>
            )}
          </Col>
        </Row>
        <RateContainer ratQty={ratQty} ratAvg={ratAvg} />
        <div className="mt-4" style={{ marginTop: "60px !important" }}>
          <ProductContainerGrid
            products={newarr}
            title={"منتجات قد تعجبك"}
            btn={"المزيد"}
          />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default ProducteDetilsPage;
