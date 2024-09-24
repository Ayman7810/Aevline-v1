import React from "react";
import { FaInstagram, FaWhatsapp, FaPinterest, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import './style.css';
import cards from '../../../images/cards.png'
import baaner from '../../../images/banner-bg.jpg'
const Footer = () => {
  return (
    <div className="footer-section" >
      <div className="row m-0">
        {/* حول الموقع */}
        <div className="col-lg-3 col-sm-6">
          <div className="footer-widget about-widget">
            <h2>حول الموقع</h2>
            <p>
              مرحبًا بكم في متجرنا الإلكتروني، وجهتكم المثالية لتلبية جميع احتياجاتكم من أحدث المنتجات وأكثرها جودة. نحن ملتزمون بتقديم تجربة تسوق فريدة وسلسة، حيث يمكنكم العثور على مجموعة متنوعة من المنتجات التي تتناسب مع جميع الأذواق. من الأزياء العصرية والإكسسوارات الرائعة إلى الأدوات المنزلية المتقدمة، نقدم لكم كل ما تحتاجونه في مكان واحد. استمتعوا بخدمة عملاء متميزة وعروض خاصة مصممة لتلبية احتياجاتكم وتجاوز توقعاتكم.
            </p>
            <img src={cards} alt="طرق الدفع" className="footer-img" />
          </div>
        </div>

        {/* روابط هامة */}
        <div className="col-lg-3 col-sm-6">
          <div className="footer-widget about-widget">
            <h2>روابط هامة</h2>
            <div className="d-flex justify-content-between">
              <ul className="text-end">
                <li><a href="#">من نحن</a></li>
                <li><a href="#">تتبع الطلبات</a></li>
                <li><a href="#">وظائف</a></li>
                <li><a href="#">شحن</a></li>
              </ul>
              <ul className="text-end">
                <li><a href="#">الشركاء</a></li>
                <li><a href="#">المدونات</a></li>
                <li><a href="#">الدعم</a></li>
                <li><a href="#">شروط الاستخدام</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* أسئلة قد تراودك */}
        <div className="col-lg-3 col-sm-6">
          <div className="footer-widget about-widget">
            <h2>أسئلة قد تراودك</h2>
            <div className="fw-latest-post-widget">
              <div className="lp-item">
                <img src={baaner} alt="أحدث منشور 1" className="lp-thumb" />
                <div className="lp-content">
                  <h6>ماهي الأحذية التي يجب لبسها؟</h6>
                  <span>10 مايو 2024</span>
                  <a href="#" className="readmore">اقرأ أكثر</a>
                </div>
              </div>
              <div className="lp-item">
                <img src={baaner} alt="أحدث منشور 2" className="lp-thumb" />
                <div className="lp-content">
                  <h6>موضات هذا العام</h6>
                  <span>10 مايو 2024</span>
                  <a href="#" className="readmore">اقرأ أكثر</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* معلومات الاتصال */}
        <div className="col-lg-3 col-sm-6">
          <div className="footer-widget contact-widget">
            <h2>معلومات الاتصال</h2>
            <div className="con-info">
              <span>C.</span>
              <p>Your Company Ltd</p>
            </div>
            <div className="con-info">
              <span>B.</span>
              <p>1481 Creekside Lane Avila Beach, CA 93424, P.O. BOX 68</p>
            </div>
            <div className="con-info">
              <span>T.</span>
              <p>+77777777777</p>
            </div>
            <div className="con-info">
              <span>E.</span>
              <p>office@youremail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* روابط اجتماعية */}
      <div className="social-links-warp">
        <div className="container">
          <div className="social-links">
            <a href="#" className="instagram">
              <FaInstagram />
              <span>انستقرام</span>
            </a>
            <a href="#" className="google-plus">
              <FaWhatsapp />
              <span>واتساب</span>
            </a>
            <a href="#" className="pinterest">
              <FaPinterest />
              <span>بنترست</span>
            </a>
            <a href="#" className="facebook">
              <FaFacebook />
              <span>فيسبوك</span>
            </a>
            <a href="#" className="twitter">
              <FaTwitter />
              <span>تويتر</span>
            </a>
            <a href="#" className="youtube">
              <FaYoutube />
              <span>يوتيوب</span>
            </a>
          </div>

          <p className="text-white text-center mt-5">
            حقوق الطبع محفوظة | 
            <span className="m-1" style={{ color: '#f51167' }}>أيمن الأوزري</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
