import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import ProductSlider from "./ProductSlider";
import { Button } from "react-bootstrap";

import jacket1 from "../../../images/products/jacket-1.jpg";
import jacket2 from "../../../images/products/jacket-2.jpg";
import clothes1 from "../../../images/products/clothes-1.jpg";
import clothes2 from "../../../images/products/clothes-2.jpg";
import shorts1 from "../../../images/products/1.jpg";
import short2 from "../../../images/products/2.jpg";
import shorts3 from "../../../images/products/3.jpg";
import short4 from "../../../images/products/4.jpg";

const ProductContainerGridSlider = ({ title }) => {
  const products = [
    {
      imgSrcDefault: jacket1,
      imgSrcHover: jacket2,
      altText: "جاكيتات جلدية شتوية للرجال",
      badge: "15%",
      badgeClass: "angle black",
      category: "جكاكيت",
      title: "جاكيتات جلدية شتوية للرجال",
      rating: 3,
      price: "48.00 دولار",
      oldPrice: "75.00 دولار",
    },
    {
      imgSrcDefault: clothes1,
      imgSrcHover: clothes2,
      altText: "أحذية رسمية جلدية للرجال",
      badge: "",
      badgeClass: "",
      category: "رسمية",
      title: "أحذية رسمية جلدية للرجال",
      rating: 4,
      price: "50.00 دولار",
      oldPrice: "65.00 دولار",
    },
    {
      imgSrcDefault: shorts1,
      imgSrcHover: shorts3,
      altText: "شورتات فرينش تيري أساسية",
      badge: "تخفيض",
      badgeClass: "angle black",
      category: "شورتات",
      title: "شورتات فرينش تيري أساسية",
      rating: 3,
      price: "78.00 دولار",
      oldPrice: "85.00 دولار",
    },
    {
      imgSrcDefault: short2,
      imgSrcHover: short4,
      altText: "قبعة صيفية أنيقة",
      badge: "جديد",
      badgeClass: "pink",
      category: "إكسسوارات",
      title: "قبعة صيفية أنيقة",
      rating: 4,
      price: "25.00 دولار",
      oldPrice: "35.00 دولار",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container" style={{ marginBottom: '150px' }}>
      <div className="product-header row">
        <div className="col-12 d-flex justify-content-between align-items-center">
          {title ? <h2>{title}</h2> : <h2>الاكثر مبيعاً</h2>}
          <Button
            className="rounded-pill btn-more"
            style={{ backgroundColor: "#ff66b2", border: "none" }}>
            المزيد
          </Button>
        </div>
      </div>
      <div className="product-slider">
        <Slider {...settings}>
          {products.map((product, index) => (
            <ProductSlider
              key={index}
              imgSrcDefault={product.imgSrcDefault}
              imgSrcHover={product.imgSrcHover}
              altText={product.altText}
              badge={product.badge}
              badgeClass={product.badgeClass}
              category={product.category}
              title={product.title}
              rating={product.rating}
              price={product.price}
              oldPrice={product.oldPrice}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductContainerGridSlider;
