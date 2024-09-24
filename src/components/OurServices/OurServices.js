import React from 'react';
import { FaShippingFast, FaRocket, FaPhoneAlt, FaUndoAlt, FaTicketAlt } from 'react-icons/fa'; // استخدام أيقونات مناسبة
import './style.css'; // تأكد من تضمين ملف CSS

// مكون خدمة واحد
const ServiceItem = ({ icon, title, description }) => (
  <a href="#" className="service-item">
    <div className="service-icon">
      {icon}
    </div>
    <div className="service-content mt-3">
      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{description}</p>
    </div>
  </a>
);

// مكون جميع الخدمات
const OurServices = () => (
  <div className="service">
    <h2 className="title">خدماتنا</h2>
    <div className="service-container">
      <ServiceItem 
        icon={<FaShippingFast />} 
        title="توصيل عالمي" 
        description="للطلبات فوق 100 دولار" 
      />
      <ServiceItem 
        icon={<FaRocket />} 
        title="توصيل في اليوم التالي" 
        description="للطلبيات في اليمن  فقط" 
      />
      <ServiceItem 
        icon={<FaPhoneAlt />} 
        title="أفضل دعم عبر الإنترنت" 
        description="ساعات العمل: 8 ص - 11 م" 
      />
      <ServiceItem 
        icon={<FaUndoAlt />} 
        title="سياسة الإرجاع" 
        description="إرجاع سهل ومجاني" 
      />
      <ServiceItem 
        icon={<FaTicketAlt />} 
        title="استرداد 30%" 
        description="لطلبات فوق 100 دولار" 
      />
    </div>
  </div>
);

export default OurServices;
