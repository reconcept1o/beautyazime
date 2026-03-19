"use client";

import { motion } from "framer-motion";

export default function AnnouncementBar({ isVisible, mounted }) {
  // Renkleri burada da tanımlayalım ki bağımsız olsun
  const colors = {
    brandBg: "#C0AE92",
    lipRed: "#B50004",
    softVizon: "#F4EFE6"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        position: "fixed",
        // Header 80px civarı olduğu için, görünürken onun hemen altında (80px) durur
        // Header gizlenince bu da yukarı (-140px) kaçar
        top: mounted ? (isVisible ? "80px" : "-140px") : "80px", 
        left: 0,
        width: "100%",
        backgroundColor: colors.softVizon,
        color: "#444",
        textAlign: "center",
        padding: "10px 5%",
        fontSize: "11px",
        letterSpacing: "1.5px",
        fontWeight: "500",
        zIndex: 999,
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        transition: "top 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        fontFamily: "'Montserrat', sans-serif",
        textTransform: "uppercase"
      }}
    >
      Book instantly on{" "}
      <a 
        href="https://squareup.com" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: colors.lipRed, fontWeight: "700", textDecoration: "none" }}
      >
        Squareup.com
      </a>{" "}
      using the 'Book Now' button, or text us via the WhatsApp icon.
    </motion.div>
  );
}