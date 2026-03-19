"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Turnstile } from "@marsidev/react-turnstile";

export default function BookingPage() {
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [token, setToken] = useState(""); // Turnstile token'ı için state

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Güvenlik kontrolü: Token yoksa formu gönderme
    if (!token) {
      alert("Please verify you are human!");
      return;
    }

    setStatus("loading");
    const formData = new FormData(e.target);
    const data = {
      ...Object.fromEntries(formData),
      token // Turnstile token'ını API'ye gönderiyoruz
    };

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div style={{ 
        height: "100vh", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        textAlign: "center", 
        padding: "20px", 
        background: "#C0AE92", 
        color: "white" 
      }}>
        <motion.h2 initial={{ scale: 0.5 }} animate={{ scale: 1 }}>Thank You!</motion.h2>
        <p style={{ marginBottom: "20px" }}>Your request has been sent. Azime will contact you shortly.</p>
        <button 
          onClick={() => window.location.href = "/"} 
          style={{...buttonStyle, backgroundColor: "#ffffff", color: "#C0AE92", width: "auto", padding: "15px 40px"}}
        >
          BACK TO HOME
        </button>
      </div>
    );
  }

  return (
    <div style={{ 
      paddingTop: "120px", 
      paddingBottom: "100px", 
      width: "100%", 
      maxWidth: "100vw", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      overflowX: "hidden" 
    }}>
      <div style={{ 
        width: "90%", 
        maxWidth: "500px", 
        margin: "0 auto" 
      }}>
        <h1 style={{ 
          textAlign: "center", 
          color: "#B50004", 
          marginBottom: "10px", 
          fontFamily: "'Cormorant Garamond', serif", 
          fontSize: "clamp(24px, 6vw, 36px)" 
        }}>
          Book an Appointment
        </h1>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "30px", fontSize: "14px" }}>
          Experience the art of beauty in Sunnyside, NY
        </p>
        
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
          <div style={inputGroup}>
            <label style={labelStyle}>Full Name</label>
            <input name="name" type="text" required style={inputStyle} placeholder="John Doe" />
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Email Address</label>
            <input name="email" type="email" required style={inputStyle} placeholder="john@example.com" />
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Phone Number</label>
            <input name="phone" type="tel" required style={inputStyle} placeholder="(123) 456-7890" />
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Select Service</label>
            <select name="service" required style={inputStyle}>
              <option value="">Select a service...</option>
              <optgroup label="Permanent Makeup">
                <option value="Microblading">Microblading</option>
                <option value="Powder Brows">Powder Brows</option>
                <option value="Hybrid Brows">Hybrid Brows</option>
                <option value="Eyeliner & Dipliner">Eyeliner & Dipliner</option>
                <option value="Lip Blushing & Liner">Lip Blushing & Liner</option>
                <option value="Scalp Pigmentation">Scalp Pigmentation</option>
                <option value="Touch-up">Touch-up</option>
              </optgroup>
              <optgroup label="Skin Care">
                <option value="Classic Facial Treatment">Classic Facial Treatment</option>
                <option value="Deep Cleansing Facial">Deep Cleansing Facial</option>
                <option value="Hydrafacial">Hydrafacial</option>
                <option value="Anti-Aging Care">Anti-Aging Care</option>
                <option value="Dark Spot Treatment">Dark Spot Treatment</option>
                <option value="Acne & Blemish Care">Acne & Blemish Care</option>
                <option value="Microneedling">Microneedling</option>
              </optgroup>
              <optgroup label="Brow & Lash Lift">
                <option value="Brow Lifting">Brow Lifting</option>
                <option value="Keratin Lash Lifting">Keratin Lash Lifting</option>
                <option value="Lash Vitamin Treatment">Lash Vitamin Treatment</option>
              </optgroup>
            </select>
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Preferred Date & Time</label>
            <input name="date" type="datetime-local" required style={{...inputStyle, minHeight: "50px"}} />
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Notes (Optional)</label>
            <textarea name="message" style={{ ...inputStyle, height: "100px", resize: "none" }} placeholder="Any special requests?"></textarea>
          </div>

          {/* CLOUDFLARE TURNSTILE WIDGET */}
          <div style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}>
            <Turnstile 
              siteKey="BURAYA_SITE_KEY_GELECEK" 
              onSuccess={(token) => setToken(token)} 
              options={{ theme: 'light' }}
            />
          </div>

          <button 
            type="submit" 
            disabled={status === "loading" || !token} 
            style={{
              ...buttonStyle,
              opacity: (status === "loading" || !token) ? 0.6 : 1,
              cursor: (status === "loading" || !token) ? "not-allowed" : "pointer"
            }}
          >
            {status === "loading" ? "SENDING..." : "CONFIRM REQUEST"}
          </button>
          
          {status === "error" && (
            <p style={{ color: "#B50004", textAlign: "center", fontSize: "14px", fontWeight: "600" }}>
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

// Stiller
const inputGroup = { display: "flex", flexDirection: "column", gap: "5px", width: "100%" };
const labelStyle = { fontSize: "11px", fontWeight: "700", color: "#333", letterSpacing: "1px", textTransform: "uppercase" };
const inputStyle = { 
  padding: "15px", 
  border: "1px solid #ddd", 
  borderRadius: "8px", 
  fontFamily: "inherit", 
  fontSize: "16px", 
  outline: "none", 
  width: "100%", 
  boxSizing: "border-box",
  backgroundColor: "#fdfdfd"
};
const buttonStyle = { 
  padding: "18px", 
  backgroundColor: "#B50004", 
  color: "white", 
  border: "none", 
  borderRadius: "50px", 
  fontWeight: "bold", 
  marginTop: "10px", 
  letterSpacing: "1px", 
  width: "100%",
  transition: "all 0.3s ease"
};