"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  const newAddress = "48-17 Skillman Ave, Sunnyside, NY 11104";

  return (
    <main style={{ backgroundColor: "#ffffff", minHeight: "100vh", color: "#1a1a1a" }}>
      
      {/* --- ELEGANT HEADER --- */}
      <section style={{ 
        paddingTop: "clamp(120px, 15vh, 180px)", 
        paddingBottom: "60px", 
        textAlign: "center", 
        paddingInline: "5%" 
      }}>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ letterSpacing: "8px", fontSize: "11px", textTransform: "uppercase", color: "#C0AE92", fontWeight: "700" }}
        >
          Visit Our Sanctuary
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ 
            fontFamily: "'Cormorant Garamond', serif", 
            fontSize: "clamp(40px, 8vw, 80px)", 
            fontWeight: "300", 
            marginTop: "20px", 
            textTransform: "uppercase", 
            letterSpacing: "clamp(5px, 2vw, 15px)",
            lineHeight: 1.1
          }}
        >
          Contact & Location
        </motion.h1>
      </section>

      {/* --- CONTACT & MAP SECTION --- */}
      <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 5% 100px" }}>
        <div className="contact-layout">
          
          {/* LEFT SIDE: REFINED INFO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="info-sidebar"
          >
            <div className="contact-block">
              <h3 className="block-title">The Studio</h3>
              <p className="address">
                48-17 Skillman Ave,<br />
                Sunnyside, NY 11104
              </p>
              <div className="location-details">
                <span>— Heart of Sunnyside, Queens</span>
                <span>— Minutes from 7 Train</span>
                <span>— Accessible & Professional</span>
              </div>
            </div>

            <div className="contact-block">
              <h3 className="block-title">Inquiries</h3>
              <p className="contact-link">info@azimebeauty.com</p>
              <p className="contact-link">+1 914-746-4232</p>
            </div>

            <div className="contact-block">
              <h3 className="block-title">Working Hours</h3>
              <div className="hours-grid">
                <span className="day-label">Monday</span> <span className="time-value closed-status">Closed</span>
                <span className="day-label">Tue — Fri</span> <span className="time-value">10:00 AM – 7:00 PM</span>
                <span className="day-label">Saturday</span> <span className="time-value">11:00 AM – 6:00 PM</span>
                <span className="day-label">Sunday</span> <span className="time-value">11:00 AM – 6:00 PM</span>
              </div>
            </div>

            <a 
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(newAddress)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="directions-btn"
            >
              GET DIRECTIONS
            </a>
          </motion.div>

          {/* RIGHT SIDE: EMBEDDED MAP */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="map-wrapper"
          >
            {/* GOOGLE MAPS IFRAME - SUNNYSIDE ADDRESS */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0076292350616!2d-73.9189334234241!3d40.73984363590529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f231648a4c1%3A0xc3f58e178166c30e!2s48-17%20Skillman%20Ave%2C%20Sunnyside%2C%20NY%2011104%2C%20USA!5e0!3m2!1sen!2str!4v1709150000000!5m2!1sen!2str" 
              width="100%" 
              height="100%" 
              style={{ 
                border: 0, 
                filter: "grayscale(0.3) contrast(1.1) brightness(0.95)",
                transition: "filter 0.5s ease"
              }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              onMouseEnter={(e) => e.target.style.filter = "none"}
              onMouseLeave={(e) => e.target.style.filter = "grayscale(0.3) contrast(1.1) brightness(0.95)"}
            ></iframe>
          </motion.div>

        </div>
      </section>

      <style jsx>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: clamp(40px, 5vw, 100px);
          min-height: 600px;
        }
        .info-sidebar { padding-top: 10px; }
        .contact-block { margin-bottom: 50px; }
        .block-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 20px;
          color: #1a1a1a;
          letter-spacing: 2px;
          text-transform: uppercase;
          border-bottom: 1px solid #f0f0f0;
          padding-bottom: 10px;
        }
        .address {
          font-family: 'Montserrat', sans-serif;
          font-size: 16px;
          line-height: 1.8;
          color: #444;
          font-weight: 300;
        }
        .location-details {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 11px;
          color: #C0AE92;
          letter-spacing: 1px;
          font-weight: 600;
          text-transform: uppercase;
        }
        .contact-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 15px;
          margin: 10px 0;
          color: #555;
          font-weight: 400;
          display: block;
        }
        .hours-grid {
          display: grid;
          grid-template-columns: 110px 1fr;
          gap: 12px;
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          color: #666;
        }
        .closed-status { color: #c44d4d; font-style: italic; }
        .directions-btn {
          display: block;
          text-align: center;
          background: #1a1a1a;
          color: white;
          text-decoration: none;
          padding: 22px;
          font-size: 11px;
          letter-spacing: 4px;
          font-weight: 700;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          margin-top: 20px;
        }
        .directions-btn:hover {
          background: #C0AE92;
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(192, 174, 146, 0.2);
        }
        .map-wrapper {
          width: 100%;
          min-height: 500px;
          background: #fdfdfd;
          box-shadow: 0 40px 100px rgba(0,0,0,0.05);
          border-radius: 2px;
          overflow: hidden;
          border: 1px solid #f0f0f0;
        }
        @media (max-width: 1100px) {
          .contact-layout { grid-template-columns: 1fr; gap: 60px; }
          .map-wrapper { min-height: 450px; order: -1; }
          .info-sidebar { text-align: center; }
          .hours-grid { justify-content: center; max-width: 300px; margin: 0 auto; }
          .location-details { align-items: center; }
        }
        @media (max-width: 600px) {
          .map-wrapper { min-height: 350px; }
          .block-title { font-size: 20px; }
        }
      `}</style>
    </main>
  );
}