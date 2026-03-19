"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const totalImages = 92;

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const images = Array.from({ length: totalImages }, (_, i) => ({
    id: i + 1,
    src: `/Azime_Gallery_WebP/${i + 1}.webp`,
    alt: `Azime Beauty Signature Work ${i + 1}`
  }));

  if (!mounted) return null;

  // Mobil kontrolü için küçük bir yardımcı
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <main style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      
      {/* --- ELEGANT HERO --- */}
      <section style={{ 
        height: "85vh", 
        width: "100%", 
        position: "relative", 
        overflow: "hidden",
        marginTop: "-90px" 
      }}>
        <Image 
          src={`/Azime_Gallery_WebP/1.webp`} 
          alt="Luxury Gallery" 
          fill 
          style={{ objectFit: "cover", objectPosition: "center" }} 
          priority
        />
        <div style={{ 
          position: "absolute", 
          inset: 0, 
          background: "linear-gradient(rgba(0,0,0,0.5), transparent, rgba(0,0,0,0.7))",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "120px"
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            style={{ textAlign: "center", width: "100%" }}
          >
            <span style={{ color: "#E2C299", letterSpacing: "10px", fontSize: "12px", fontWeight: "600", textTransform: "uppercase" }}>Portfolio</span>
            <h1 style={{ 
              color: "white", 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: "clamp(45px, 12vw, 140px)", 
              letterSpacing: isMobile ? "8px" : "25px", // Mobilde 8px'e çektik ki sığsın
              textTransform: "uppercase",
              fontWeight: "300",
              margin: "20px 0",
              paddingLeft: isMobile ? "8px" : "25px" // Yazıyı tam ortalamak için spacing kadar soldan padding verdik
            }}>
              Curated
            </h1>
            <p style={{ color: "white", fontFamily: "'Montserrat', sans-serif", fontWeight: "300", letterSpacing: "5px", fontSize: "14px", padding: "0 20px" }}>
              ARTISTRY IN EVERY DETAIL
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- INTRO TEXT --- */}
      <section style={{ padding: "120px 5% 60px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
         <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", color: "#1a1a1a", fontWeight: "300" }}>Beauty Through Our Lens</h2>
         <p style={{ fontFamily: "'Montserrat', sans-serif", color: "#666", lineHeight: "2", fontSize: "15px", marginTop: "20px" }}>
            Each transformation is a unique story of confidence and precision. Explore 92 of our signature treatments across New York and beyond.
         </p>
         <div style={{ width: "40px", height: "1px", background: "#E2C299", margin: "40px auto" }} />
      </section>

      {/* --- EDITORIAL GALLERY GRID --- */}
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 2% 120px" }}>
        <div className="editorial-grid">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (idx % 4) * 0.1 }}
              className={`gallery-card ${idx % 7 === 0 ? 'large' : idx % 11 === 0 ? 'tall' : ''}`}
              onClick={() => setSelectedImage(img)}
            >
              <div className="img-container">
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="card-overlay">
                  <div className="overlay-content">
                    <span className="view-text">DISCOVER</span>
                    <div className="line"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- LUXURY LIGHTBOX --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay" 
            onClick={() => setSelectedImage(null)}
          >
            <button className="close-icon">✕</button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="lightbox-box"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.src} alt="Work detail" className="lightbox-image" />
              <div className="lightbox-caption">
                <p>Azime Beauty Signature Treatment No. {selectedImage.id}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .editorial-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 350px;
          grid-auto-flow: dense;
          gap: 15px;
        }

        .gallery-card {
          position: relative;
          cursor: pointer;
          overflow: hidden;
          background: #f8f8f8;
        }

        .gallery-card.large { grid-column: span 2; grid-row: span 2; }
        .gallery-card.tall { grid-row: span 2; }

        .img-container {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-card:hover .gallery-img {
          transform: scale(1.08);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(26, 26, 26, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .gallery-card:hover .card-overlay {
          opacity: 1;
        }

        .overlay-content {
          text-align: center;
          transform: translateY(20px);
          transition: transform 0.6s ease;
        }

        .gallery-card:hover .overlay-content {
          transform: translateY(0);
        }

        .view-text {
          color: white;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 5px;
          font-weight: 600;
        }

        .line {
          width: 30px;
          height: 1px;
          background: #E2C299;
          margin: 15px auto 0;
        }

        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(255,255,255,0.98);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: crosshair;
        }

        .lightbox-box {
          position: relative;
          max-width: 90vw;
          text-align: center;
        }

        .lightbox-image {
          max-height: 80vh;
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
        }

        .lightbox-caption {
          margin-top: 25px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          color: #1a1a1a;
          font-style: italic;
        }

        .close-icon {
          position: absolute;
          top: 40px;
          right: 40px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #1a1a1a;
        }

        @media (max-width: 1200px) {
          .editorial-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 768px) {
          .editorial-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 300px; }
          .gallery-card.large { grid-column: span 2; grid-row: span 1; }
          .close-icon { top: 20px; right: 20px; }
        }

        @media (max-width: 500px) {
          .editorial-grid { grid-template-columns: 1fr; grid-auto-rows: 400px; }
          .gallery-card.large, .gallery-card.tall { grid-column: span 1; grid-row: span 1; }
        }
      `}</style>
    </main>
  );
}