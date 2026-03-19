"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "./Assets/hero.webp"; 
import AboutSection from "./components/AboutSection"; 
import ServicesSection from "./services/page"; 
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function HomePage() {
  return (
    <main style={{ width: "100%", position: "relative" }}>
      
      {/* HERO SECTION */}
      <section style={{ height: "100vh", width: "100%", position: "relative", overflow: "hidden" }}>
        
        {/* ARKA PLAN RESMİ */}
        <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
          <Image
            src={heroImage}
            alt="Azime Beauty Hero"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
            quality={100}
          />
          <div style={{ 
            position: "absolute", 
            inset: 0, 
            background: "rgba(0,0,0,0.3)" 
          }} />
        </div>

        <div className="hero-container">
          <div className="hero-content">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="logo-wrapper"
            >
              {/* ÜST BİLGİ GRUBU */}
              <div className="top-info-block">
               
                
                {/* İLETİŞİM SATIRI */}
                <div className="contact-row">
                  <span>info@azimebeauty.com</span>
                  <span className="separator">|</span>
                  <span>+1 914-746-4232</span>
                </div>

                {/* ADRES SATIRI (YENİ EKLEDİK) */}
                <div className="address-row">
                  48-17 Skillman Ave, Sunnyside, New York, NY 11104
                </div>
              </div>

              <h1 className="main-logo">
                AZIME<br/>
                <span className="sub-logo">BEAUTY</span>
              </h1>

              <p className="clinic-slogan">
                PERMANENT MAKEUP & ADVANCED SKIN CLINIC
              </p>

              {/* SOSYAL MEDYA */}
              <div className="social-icons">
                <a href="https://www.instagram.com/azimebeautynyc" target="_blank" className="social-link">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com/azime.ozkaya.12" target="_blank" className="social-link">
                  <FaFacebookF />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <AboutSection />
      <ServicesSection />

      <style jsx>{`
        .hero-container {
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-content {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 0 8%;
          max-width: 1400px;
        }

        .logo-wrapper {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 10;
          text-shadow: 0 2px 15px rgba(0,0,0,0.4);
        }

        /* BİLGİ BLOĞU STİLLERİ */
       .top-info-block {
  margin-bottom: 40px; /* Biraz daha aşağı çektik logo ile arası açılsın */
  display: flex;
  flex-direction: column;
  gap: 12px; /* Satır arası boşluğu artırdık */
}

.contact-row {
  color: #ffffff;
  /* Mobilde 14px, Masaüstünde 18px olacak şekilde dinamik (Okunaklılık arttı) */
  font-size: clamp(14px, 1.5vw, 18px); 
  letter-spacing: 1px; /* Çok genişletmeden net okunsun */
  font-weight: 500;
  opacity: 1; /* Opaklığı artırdık ki daha beyaz ve net görünsün */
}

.address-row {
  color: #ffffff;
  /* Mobilde 12px, Masaüstünde 15px */
  font-size: clamp(12px, 1.2vw, 15px);
  opacity: 0.9;
  margin-top: 5px;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 1px;
}

.separator { 
  margin: 0 15px; 
  opacity: 0.6; 
  font-weight: 300;
}

/* MOBİL UYUMLULUK AYARLARI */
@media (max-width: 768px) {
  .top-info-block {
    margin-bottom: 25px;
    gap: 10px;
  }
  .contact-row {
    display: flex;
    flex-direction: column; /* Mobilde alt alta gelmesi okumayı kolaylaştırır */
    gap: 8px;
    font-size: 16px; /* Mobilde net okunması için sabit değer verdik */
  }
  .separator { display: none; } /* Mobilde çizgiye gerek yok, zaten alt alta */
  
  .address-row { 
    padding: 0 20px; 
    line-height: 1.4;
    font-size: 13px; 
  }
}

        /* LOGO STİLLERİ */
        .main-logo {
          font-size: clamp(40px, 8vw, 95px);
          font-weight: 300;
          letter-spacing: 18px;
          font-family: 'Cormorant Garamond', serif;
          text-transform: uppercase;
          line-height: 0.85;
          color: #ffffff;
          margin: 0;
        }
        .sub-logo { font-size: 0.7em; letter-spacing: 25px; }

        .clinic-slogan {
          font-size: clamp(9px, 1.3vw, 12px);
          letter-spacing: 5px;
          margin-top: 25px;
          font-weight: 600;
          text-transform: uppercase;
          color: #ffffff;
        }

        .social-icons { display: flex; gap: 30px; margin-top: 40px; }
        .social-link { color: #ffffff; font-size: 26px; transition: opacity 0.3s; }
        .social-link:hover { opacity: 0.6; }

        @media (max-width: 768px) {
          .contact-row {
            display: flex;
            flex-direction: column;
            gap: 5px;
          }
          .separator { display: none; }
          .main-logo { letter-spacing: 12px; }
          .sub-logo { letter-spacing: 15px; }
          .clinic-slogan { white-space: normal; line-height: 1.6; padding: 0 20px; }
          .address-row { padding: 0 15px; }
        }
      `}</style>
    </main>
  );
}