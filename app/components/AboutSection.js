"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import azimeImage from "../Assets/azime.jpg"; 

export default function AboutSection() {
  const colors = {
    bg: "#F9F7F2",    // Lüks kemik/fildişi tonu
    gold: "#E2C299",
    vizon: "#C0AE92",
    dark: "#1a1a1a"
  };

  return (
    <section style={{ 
      padding: "140px 8%", 
      backgroundColor: colors.bg, 
      display: "flex", 
      flexWrap: "wrap", 
      alignItems: "center", 
      gap: "80px",
      minHeight: "100vh",
      position: "relative",
      zIndex: 1
    }}>
      
      {/* SOL: SANATSAL ÇERÇEVE SİSTEMİ */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        style={{ flex: "1 1 450px", position: "relative", height: "650px", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {/* ANA BORDER ÇERÇEVE */}
        <div style={{
          position: "relative",
          width: "90%",
          height: "90%",
          border: `1px solid ${colors.vizon}`,
          padding: "15px",
          zIndex: 2,
          backgroundColor: colors.bg // İçerideki boşluk fonla aynı olsun
        }}>
          <Image 
            src={azimeImage}
            alt="Azime Portrait"
            fill
            style={{ 
              objectFit: "cover", 
              padding: "15px" 
            }}
          />
        </div>

        {/* DEKORATİF OFFSET KATMAN */}
        <div style={{
          position: "absolute",
          width: "90%",
          height: "90%",
          border: `1px solid ${colors.gold}`,
          top: "50px", 
          left: "50px", 
          zIndex: 1,
          opacity: 0.4
        }} />
      </motion.div>

      {/* SAĞ: AMERİKAN STANDARTLARINDA PREMİUM METİN */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ flex: "1 1 500px" }}
      >
        <span style={{ 
          fontSize: "11px", 
          letterSpacing: "6px", 
          color: colors.vizon, 
          fontWeight: "700",
          display: "block",
          marginBottom: "20px",
          textTransform: "uppercase"
        }}>
          Our Philosophy
        </span>
        
        <h2 style={{ 
          fontFamily: "'Cormorant Garamond', serif", 
          fontSize: "clamp(38px, 5vw, 65px)", 
          color: colors.dark,
          lineHeight: "1.1",
          marginBottom: "35px",
          fontWeight: "300",
          fontStyle: "italic"
        }}>
          Azime Beauty
        </h2>

        <div style={{ width: "80px", height: "1px", backgroundColor: colors.gold, marginBottom: "40px" }} />

        <div style={{ 
          fontFamily: "'Montserrat', sans-serif", 
          fontSize: "15px", 
          lineHeight: "2", 
          color: "#4a4a4a",
          fontWeight: "300",
          textAlign: "justify",
          maxWidth: "550px"
        }}>
          <p>
            At <strong>Azime Beauty</strong>, we are dedicated to elevating your natural radiance through cutting-edge techniques and bespoke care. Our clinic offers a curated range of personalized aesthetic treatments—from precision eyebrow styling to professional lash lifts—all designed to leave you feeling confident and revitalized.
          </p>
          <br />
          <p>
            We prioritize your experience, delivering tailored solutions in a pristine, safe, and tranquil environment. Using only premium, medical-grade products, our expert team highlights your unique features with meticulous attention to detail. Our mission is to provide high-end services that promote a naturally healthy and timeless appearance.
          </p>
          <br />
          <p style={{ color: colors.vizon, fontStyle: "italic", fontWeight: "500", fontSize: "17px" }}>
            Discover your most beautiful self with a professional touch.
          </p>
        </div>
      </motion.div>
    </section>
  );
}