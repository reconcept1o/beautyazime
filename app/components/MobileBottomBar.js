"use client";

import { motion } from "framer-motion";

export default function MobileBottomBar() {
  const colors = {
    lipRed: "#B50004",
    white: "#ffffff",
  };

  return (
    <div className="mobile-bottom-bar-wrapper">
      <motion.a
        href="https://squareup.com" 
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "65px",
          backgroundColor: colors.lipRed,
          color: colors.white,
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: "700",
          letterSpacing: "3px",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.4)",
          fontFamily: "'Montserrat', sans-serif",
          position: "fixed",
          bottom: 0,
          left: 0,
          zIndex: 9999
        }}
      >
        BOOK NOW
      </motion.a>

      <style jsx>{`
        /* Sadece mobil görünürlük kontrolü */
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