// Banner.js
import React from 'react';
import Slider from 'react-slick';
import './Banner.css'; // تأكد من وجود ملف CSS
import img1 from '../../../images/banner-1.jpg';
import img2 from '../../../images/banner-2.jpg';
import img3 from '../../../images/banner-3.jpg';

// إعدادات السلايدر
const sliderSettings = {
  dots: false, // عرض الدوتس
  infinite: true, // التكرار اللانهائي
  speed: 500, // سرعة الانتقال
  autoplay: true, // التحرك التلقائي
  autoplaySpeed: 3000, // سرعة التكرار التلقائي
  slidesToShow: 1, // عدد الشرائح المعروضة
  slidesToScroll: 1, // عدد الشرائح التي تتحرك في كل مرة
  arrows: false, // إخفاء الأسهم
};

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <Slider {...sliderSettings} className="slider-container">
          <div className="slider-item">
            <img src={img1} alt="تخفيضات أحدث الأزياء النسائية" className="banner-img" />
            <div className="banner-content">
              <p className="banner-subtitle">المنتجات الرائجة</p>
              <h2 className="banner-title">تخفيضات أحدث الأزياء النسائية</h2>
              <p className="banner-text">ابتداءً من $ <b>20</b>.00</p>
              <a href="#" className="banner-btn">تسوق الآن</a>
            </div>
          </div>

          <div className="slider-item">
            <img src={img2} alt="نظارات شمسية عصرية" className="banner-img" />
            <div className="banner-content">
              <p className="banner-subtitle">الإكسسوارات الرائجة</p>
              <h2 className="banner-title">نظارات شمسية عصرية</h2>
              <p className="banner-text">ابتداءً من $ <b>15</b>.00</p>
              <a href="#" className="banner-btn">تسوق الآن</a>
            </div>
          </div>

          <div className="slider-item">
            <img src={img3} alt="تخفيضات الأزياء الصيفية الجديدة" className="banner-img" />
            <div className="banner-content">
              <p className="banner-subtitle">عرض التخفيضات</p>
              <h2 className="banner-title">تخفيضات الأزياء الصيفية الجديدة</h2>
              <p className="banner-text">ابتداءً من $ <b>29</b>.99</p>
              <a href="#" className="banner-btn">تسوق الآن</a>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
