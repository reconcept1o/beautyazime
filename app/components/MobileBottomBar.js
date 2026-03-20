"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MobileBottomBar() {
  const colors = {
    lipRed: "#B50004",
    brandBg: "#C0AE92", 
    white: "#856E5D",
    dark: "#1a1a1a"
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
          backgroundColor: colors.white
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
            backgroundColor: colors.white,
            color: colors.dark,
            textDecoration: "none",
            fontSize: "12px",
            fontWeight: "600",
            letterSpacing: "2px",
            borderRight: "1px solid #eeeeee",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          VIEW PRICING
        </Link>

        {/* SAĞ TARAF: BOOK NOW (Artık Bizim Formu Açar) */}
        <Link
          href="/booking"
          style={{
            flex: 1.2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.lipRed,
            color: colors.white,
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: "700",
            letterSpacing: "2px",
            fontFamily: "'Montserrat', sans-serif",
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