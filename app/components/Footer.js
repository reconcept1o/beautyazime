"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentYear, setCurrentYear] = useState(2026); // Statik başlangıç

  useEffect(() => {
    setMounted(true);
    setCurrentYear(new Date().getFullYear());
    
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const colors = {
    brandBg: "#C0AE92",
    lipRed: "#B50004",
    dark: "#1a1a1a",
    white: "#ffffff",
  };

  // Hydration hatasını engellemek için bileşen tam yüklenene kadar basit bir yapı döner
  if (!mounted) return null;

  return (
    <footer style={{ 
      backgroundColor: colors.dark, 
      color: colors.white, 
      padding: isMobile ? "60px 8% 110px 8%" : "80px 8% 40px 8%",
      fontFamily: "'Montserrat', sans-serif",
      position: "relative",
      zIndex: 1
    }}>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
        gap: "40px",
        marginBottom: "60px"
      }}>
        
        {/* LOGO & MİSYON */}
        <div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", letterSpacing: "4px", marginBottom: "20px", fontWeight: "300" }}>
            AZIME BEAUTY
          </h2>
          <p style={{ fontSize: "13px", lineHeight: "1.8", opacity: "0.7", maxWidth: "300px", fontWeight: "300" }}>
            Experience the art of permanent makeup and advanced skin treatments in the heart of New York. We bring out your natural beauty with precision and care.
          </p>
        </div>

        {/* HIZLI LİNKLER */}
        <div>
          <h4 style={{ fontSize: "14px", letterSpacing: "2px", marginBottom: "25px", fontWeight: "600" }}>QUICK LINKS</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["HOME", "SERVICES", "GALLERY", "PRICING", "CONTACT"].map((item) => (
              <li key={item} style={{ marginBottom: "12px" }}>
                <Link href={item === "HOME" ? "/" : `/${item.toLowerCase()}`} style={{ color: colors.white, textDecoration: "none", fontSize: "12px", opacity: "0.6" }}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* İLETİŞİM BİLGİLERİ */}
        <div>
          <h4 style={{ fontSize: "14px", letterSpacing: "2px", marginBottom: "25px", fontWeight: "600" }}>CONTACT US</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "13px", opacity: "0.7" }}>
              <FaMapMarkerAlt color={colors.brandBg} />
              <span>48-17 Skillman Ave, Sunnyside, NY 11104</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "13px", opacity: "0.7" }}>
              <FaWhatsapp color={colors.brandBg} />
              <span>+1 914-746-4232</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "13px", opacity: "0.7" }}>
              <FaEnvelope color={colors.brandBg} />
              <span>info@azimebeauty.com</span>
            </div>
          </div>
        </div>

        {/* SOSYAL MEDYA & REZERVASYON */}
        <div>
          <h4 style={{ fontSize: "14px", letterSpacing: "2px", marginBottom: "25px", fontWeight: "600" }}>FOLLOW US</h4>
          <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
            <a href="https://www.instagram.com/azimebeautynyc" target="_blank" style={{ color: colors.white, fontSize: "20px" }}><FaInstagram /></a>
            <a href="https://www.facebook.com/azime.ozkaya.12" target="_blank" style={{ color: colors.white, fontSize: "20px" }}><FaFacebookF /></a>
          </div>
         
        </div>
      </div>

      {/* ALT BİLGİ ALANI */}
      <div style={{ 
        borderTop: "1px solid rgba(255,255,255,0.1)", 
        paddingTop: "30px", 
        display: "flex", 
        flexDirection: isMobile ? "column" : "row", 
        justifyContent: "space-between", 
        alignItems: "center",
        gap: "15px"
      }}>
        <p style={{ fontSize: "11px", opacity: "0.4", margin: 0 }}>
          © {currentYear} AZIME BEAUTY. ALL RIGHTS RESERVED.
        </p>
        
        <a 
          href="https://www.linkedin.com/in/s%C3%BCleyman-%C3%BCnver-9b3950245/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            fontSize: "11px", 
            opacity: "0.4", 
            color: colors.white, 
            textDecoration: "none",
            fontWeight: "500",
            letterSpacing: "1px"
          }}
        >
          CREATED BY UNVER
        </a>
      </div>
    </footer>
  );
}