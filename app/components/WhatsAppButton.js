"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa"; // react-icons yüklü değilse: npm install react-icons

export default function WhatsAppButton() {
  const phoneNumber = "19147464232"; // Azime Hanım'ın numarası (baştaki + olmadan)
  const message = "Hello! I would like to get information about an appointment."; // Otomatik mesaj
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 9999,
        backgroundColor: "#25D366", // WhatsApp Yeşili
        color: "white",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 10px 25px rgba(37, 211, 102, 0.3)",
        cursor: "pointer",
        textDecoration: "none"
      }}
    >
      <FaWhatsapp size={32} />
      
      {/* İsteğe bağlı: Butonun yanında "Book Now" yazısı */}
      <motion.span
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        style={{
          position: "absolute",
          right: "70px",
          backgroundColor: "white",
          color: "#1a1a1a",
          padding: "8px 15px",
          borderRadius: "20px",
          fontSize: "12px",
          fontWeight: "600",
          letterSpacing: "1px",
          whiteSpace: "nowrap",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          fontFamily: "'Montserrat', sans-serif"
        }}
      >
        BOOK NOW
      </motion.span>
    </motion.a>
  );
}