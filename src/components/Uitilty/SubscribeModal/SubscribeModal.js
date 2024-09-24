import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import './SubscribeModal.css'; // تأكد من أنك تستخدم نفس ملف CSS

const SubscribeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // عرض الـ Modal بعد ثلاث ثوانٍ
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // 3000 مللي ثانية = 3 ثواني

    // تنظيف التايمر إذا تم إلغاء مكون React
    return () => clearTimeout(timer);
  }, []); // يفترض أن يعمل مرة واحدة عند تحميل المكون

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className={`modal ${!isOpen ? 'closed' : ''}`} data-modal>
          <div className="modal-close-overlay" data-modal-overlay onClick={closeModal}></div>

          <div className="modal-content">
            <button className="modal-close-btn" data-modal-close onClick={closeModal}>
              <FaTimes />
            </button>

            <div className="newsletter-img">
              <img src="./assets/images/newsletter.png" alt="subscribe newsletter" width="400" height="400" />
            </div>

            <div className="newsletter">
              <form action="#">
                <div className="newsletter-header">
                  <h3 className="newsletter-title">Subscribe Newsletter.</h3>
                  <p className="newsletter-desc">
                    Subscribe the <b>Anon</b> to get latest products and discount update.
                  </p>
                </div>

                <input
                  type="email"
                  name="email"
                  className="email-field"
                  placeholder="Email Address"
                  required
                />

                <button type="submit" className="btn-newsletter">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubscribeModal;
