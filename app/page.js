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

                {/* ADRES SATIRI */}
                <div className="address-row">
                  48-17 Skillman Ave, Sunnyside, New York, NY 11104
                </div>
              </div>

              <h1 className="main-logo">
                AZIME<br/>
                <span className="sub-logo">BEAUTY</span>
              </h1>

              <p className="clinic-slogan">
                Permanent Makeup & Skin Specialist
              </p>

              {/* SOSYAL MEDYA - RENKLENDİRİLDİ */}
              <div className="social-icons">
                <a 
                  href="https://www.instagram.com/azimebeautynyc" 
                  target="_blank" 
                  className="social-link instagram"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="https://www.facebook.com/azime.ozkaya.12" 
                  target="_blank" 
                  className="social-link facebook"
                  rel="noopener noreferrer"
                >
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

        .top-info-block {
          margin-bottom: 40px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-row {
          color: #ffffff;
          font-size: clamp(14px, 1.5vw, 18px); 
          letter-spacing: 1px;
          font-weight: 500;
        }

        .address-row {
          color: #ffffff;
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

        /* SOSYAL MEDYA ÖZEL RENKLER */
        .social-icons { display: flex; gap: 35px; margin-top: 40px; }
        
        .social-link { 
          font-size: 32px; 
          transition: transform 0.3s ease, filter 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-link:hover {
          transform: scale(1.15);
        }

        .instagram {
          color: #E4405F; /* Instagram Marka Rengi */
          filter: drop-shadow(0 0 8px rgba(228, 64, 95, 0.4));
        }

        .facebook {
          color: #1877F2; /* Facebook Marka Rengi */
          filter: drop-shadow(0 0 8px rgba(24, 119, 242, 0.4));
        }

        @media (max-width: 768px) {
          .top-info-block {
            margin-bottom: 25px;
            gap: 10px;
          }
          .contact-row {
            display: flex;
            flex-direction: column;
            gap: 8px;
            font-size: 16px;
          }
          .separator { display: none; }
          .main-logo { letter-spacing: 12px; }
          .sub-logo { letter-spacing: 15px; }
          .clinic-slogan { white-space: normal; line-height: 1.6; padding: 0 20px; }
          .address-row { padding: 0 15px; }
          .social-icons { gap: 40px; }
        }
      `}</style>
    </main>
  );
}