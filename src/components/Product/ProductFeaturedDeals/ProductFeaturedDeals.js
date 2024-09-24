/** @format */

import React, { useState, useEffect } from 'react';
import './style.css'; // تأكد من تضمين ملف CSS
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

import shampoo from '../../../images/products/shampoo.jpg';

// تفاصيل المنتج
const product = {
  imgSrc: shampoo,
  altText: 'شامبو، بلسم وعبوات غسول الوجه',
  title: 'شامبو، بلسم وعبوات غسول الوجه',
  description: 'وصف المنتج هنا. يمكن أن يحتوي على تفاصيل إضافية حول المنتج.',
  price: '150.00 دولار',
  oldPrice: '200.00 دولار',
  sold: 20,
  available: 4,
  countdown: { days: 360, hours: 24, minutes: 59, seconds: 0 }
};

// مكون العد التنازلي
const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown d-flex gap-2">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div className="countdown-content p-2 bg-light rounded" key={unit}>
          <p className="display-number">{value}</p>
          <p className="display-text">
            {unit === 'days' ? 'أيام' :
             unit === 'hours' ? 'ساعات' :
             unit === 'minutes' ? 'دقائق' :
             'ثواني'}
          </p>
        </div>
      ))}
    </div>
  );
};

// مكون بطاقة المنتج
const ProductCard = ({ product }) => (
  <div className="product-card d-flex align-items-center" style={{border:'none' , boxShadow:'none'}}>
    <div className="product-img-container">
      <img src={product.imgSrc} alt={product.altText} className="product-img" />
    </div>
    <div className="product-info p-3">
      <div className="product-rating mb-2">
        {Array.from({ length: 3 }, (_, index) => (
          <FaStar key={index} />
        ))}
        {Array.from({ length: 2 }, (_, index) => (
          <FaRegStar key={index + 3} />
        ))}
      </div>
      <h3 className="product-title">{product.title}</h3>
      <p className="product-desc">{product.description}</p>
      <div className="price-box mb-2">
        <p className="price">{product.price}</p>
        <del>{product.oldPrice}</del>
      </div>
      <Button className="rounded-pill" style={{ backgroundColor: '#ff66b2', border: 'none' }}>أضف إلى السلة</Button>
      <div className="product-status mt-3">
        <div className="status-info d-flex justify-content-between mb-2">
          <p>تم بيع: <b>{product.sold}</b></p>
          <p>متوفر: <b>{product.available}</b></p>
        </div>
        <div className="status-bar"></div>
      </div>
      <div className="countdown-box mt-3">
        <p className="countdown-desc">بادر الآن! العرض ينتهي خلال:</p>
        <Countdown targetDate={new Date(Date.now() + product.countdown.days * 24 * 60 * 60 * 1000 + product.countdown.hours * 60 * 60 * 1000 + product.countdown.minutes * 60 * 1000 + product.countdown.seconds * 1000)} />
      </div>
    </div>
  </div>
);

// مكون العروض المميزة للمنتج
const ProductFeaturedDeals = () => (
  <div className="container product-featured py-3" style={{ marginTop: '20px', marginBottom: '20px' }}>
    <div className="product-slider">
      <ProductCard product={product} />
    </div>
  </div>
);

export default ProductFeaturedDeals;
