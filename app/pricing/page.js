"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import pricingHero from "../Assets/4.webp"; // Resmin Assets/4.webp olduğundan emin ol

export default function PricingPage() {
  const colors = {
    gold: "#E2C299",
    vizon: "#C0AE92",
    dark: "#1a1a1a",
    white: "#ffffff",
    lightBg: "#F9F7F2"
  };

  const pricingData = [
    {
      category: "Permanent Makeup & Artistry",
      items: [
        { name: "Powder Brows", price: "$500" },
        { name: "Microblading", price: "$500" },
        { name: "Eyeliner", price: "$500" },
        { name: "Dipliner", price: "$500" },
        { name: "Lip Blush (Lip Coloring)", price: "$500" },
        { name: "Scalp Pigmentation", price: "$300+" },
        { name: "Touch-Up (Follow-Up)", price: "$180" },
        { name: "Brow Lift", price: "$100" },
        { name: "Lash Lift", price: "$90" },
        { name: "Brow & Lash Combo", price: "$200" },
      ]
    },
    {
      category: "Clinical Skincare & Facials",
      items: [
        { name: "Microneedling (1/3/6 Sessions)", price: "$250 / $700 / $1.3k" },
        { name: "Lightening Lift Chemical Peel", price: "$155" },
        { name: "Max Contouring Anti-Aging", price: "$150" },
        { name: "Illuminating Brightening Facial", price: "$150" },
        { name: "Deep Pore Cleansing Facial", price: "$150" },
        { name: "Lymphatic Sculpting Facial", price: "$150" },
        { name: "Azime Beauty Classic Facial", price: "$100" },
        { name: "Azime Beauty Mini-Classic", price: "$80" },
        { name: "Add-on Collagen Lip Treatment", price: "$35" },
        { name: "Add-on Hydrating Boost Mask", price: "$35" },
      ]
    }
  ];

  return (
    <main style={{ backgroundColor: colors.lightBg, minHeight: "100vh" }}>
      
      {/* --- HERO SECTION --- */}
      <section style={{ 
        height: "70vh", // Yazı büyüdüğü için alanı biraz daha genişlettik
        width: "100%", 
        position: "relative", 
        overflow: "hidden",
        marginTop: "-90px" // Header'ın padding'ini sıfırlar, resmi en tepeye çeker
      }}>
        <Image 
          src={pricingHero} 
          alt="Pricing Hero" 
          fill 
          style={{ objectFit: "cover" }} 
          priority
        />
        <div style={{ 
          position: "absolute", 
          inset: 0, 
          /* Karartmayı artırdık ki beyaz yazı net okunsun */
          background: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4))", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          padding: "0 20px",
          paddingTop: "120px" // Yazıyı header'ın altından kurtarmak için
        }}>
          {/* --- DÜZELTME: Yazı BÜYÜK ve BEYAZ --- */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ 
              color: "white", // BEYAZ renk
              fontFamily: "'Cormorant Garamond', serif", 
              /* Mobilde 60px'den başlar, ekrana göre büyür, maks 130px olur */
              fontSize: "clamp(60px, 15vw, 130px)", 
              letterSpacing: "clamp(10px, 3vw, 18px)", // Harf arası boşluğu artırdık
              textTransform: "uppercase",
              fontWeight: "300", // Zarif ince hali
              textAlign: "center",
              lineHeight: 1,
              margin: 0
            }}
          >
            Pricing
          </motion.h1>
        </div>
      </section>

      {/* --- PRICING CONTENT (Grid ile Tasarlandı) --- */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "100px 5%" }}>
        
        {pricingData.map((section, idx) => (
          <motion.section 
            key={section.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            style={{ marginBottom: "120px" }}
          >
            <h2 style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: "32px", 
              color: colors.vizon, 
              borderBottom: `1px solid ${colors.gold}`,
              paddingBottom: "20px",
              marginBottom: "40px",
              letterSpacing: "3px",
              fontWeight: "400",
              textAlign: "center"
            }}>
              {section.category}
            </h2>

            {/* --- GRID LİSTE YAPISI --- */}
            <div style={{ display: "grid", gap: "25px" }}>
              {section.items.map((item) => (
                <div 
                  key={item.name} 
                  className="price-row"
                  style={{ 
                    display: "grid", 
                    gridTemplateColumns: "auto 1fr auto", // İsim, Nokta, Fiyat
                    alignItems: "baseline",
                    gap: "15px",
                    width: "100%"
                  }}
                >
                  <span style={{ 
                    fontSize: "16px", 
                    color: colors.dark, 
                    fontWeight: "400",
                    fontFamily: "'Montserrat', sans-serif",
                    flexShrink: 1
                  }}>
                    {item.name}
                  </span>
                  
                  {/* Noktalı Lüks Ayraç (Grid içinde otomatik uzar) */}
                  <div className="dots-spacer" style={{ 
                    borderBottom: "1px dotted #d1d1d1", 
                    opacity: 0.6,
                    minWidth: "15px"
                  }}></div>

                  <span style={{ 
                    fontSize: "17px", 
                    color: colors.dark, 
                    fontWeight: "600",
                    fontFamily: "'Montserrat', sans-serif",
                    whiteSpace: "nowrap"
                  }}>
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* NOTLAR */}
        <div style={{ textAlign: "center", borderTop: "1px solid #eee", paddingTop: "40px" }}>
          <p style={{ color: "#999", fontSize: "12px", letterSpacing: "1px", fontStyle: "italic", lineHeight: "1.6" }}>
            * Consultation is required for all premium services.<br/>
            * Prices are subject to change based on specific client requirements.
          </p>
        </div>

      </div>

      <style jsx global>{`
        /* Çift scroll ve taşmayı önlemek için GLOBAL stil */
        html, body {
          overflow-x: hidden !important;
          max-width: 100vw !important;
        }

        /* --- MOBİL UYUM (Grid ve Dots) --- */
        @media (max-width: 600px) {
          .dots-spacer {
            display: none !important; /* Mobilde noktaları kaldırarak yer açıyoruz */
          }
          .price-row {
            gridTemplateColumns: auto auto !important; /* İsim ve Fiyat yan yana */
            justifyContent: space-between !important;
            gap: 15px !important;
          }
          .item-name {
            font-size: 14px !important;
          }
        }
      `}</style>
    </main>
  );
}