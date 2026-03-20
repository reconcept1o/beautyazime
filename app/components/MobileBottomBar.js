"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MobileBottomBar() {
  const colors = {
    lipRed: "#B50004",
    brandBg: "#C0AE92", 
    white: "#ffffff",
    dark: "#1a1a1a",
    brownish: "#856E5D" // Senin orijinal white rengin (kahverengi tonu)
  };

  return (
    <div className="mobile-bottom-bar-wrapper">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          display: "flex",
          width: "100%",
          height: "70px", 
          position: "fixed",
          bottom: 0,
          left: 0,
          zIndex: 9999,
          boxShadow: "0 -4px 25px rgba(0,0,0,0.2)",
          backgroundColor: colors.brownish,
          overflow: "hidden"
        }}
      >
        {/* SOL TARAF: PRICING */}
        <Link 
          href="/pricing" 
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.brownish,
            color: colors.dark,
            textDecoration: "none",
            fontSize: "12px",
            fontWeight: "600",
            letterSpacing: "2px",
            fontFamily: "'Montserrat', sans-serif",
            zIndex: 1
          }}
        >
          VIEW PRICING
        </Link>

        {/* ÇAPRAZ AYIRICI (DIAGONAL CUT) */}
        <div style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "45%", 
          width: "100px",
          backgroundColor: colors.lipRed,
          transform: "skewX(-20deg)", 
          zIndex: 2,
        }} />

        {/* SAĞ TARAF: BOOK NOW */}
        <Link
          href="/booking"
          style={{
            flex: 1.4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.lipRed,
            color: "#000000", // Tam siyah yapıldı
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: "900", // Ekstra kalın yapıldı
            letterSpacing: "2px",
            fontFamily: "'Montserrat', sans-serif",
            zIndex: 3
          }}
        >
          BOOK NOW
        </Link>
      </motion.div>

      <style jsx>{`
        .mobile-bottom-bar-wrapper {
          display: none;
        }

        @media (max-width: 900px) {
          .mobile-bottom-bar-wrapper {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}