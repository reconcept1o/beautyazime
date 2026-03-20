"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "./components/Footer";
import MobileBottomBar from "./components/MobileBottomBar";

// 1. JSON-LD Structured Data: Google'a "Burası bir yerel güzellik kliniğidir" diyoruz.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Azime Beauty",
  "image": "https://azimebeauty.com/hero.webp",
  "@id": "https://azimebeauty.com",
  "url": "https://azimebeauty.com",
  "telephone": "+19147464232",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "48-17 Skillman Ave",
    "addressLocality": "Sunnyside",
    "addressRegion": "NY",
    "postalCode": "11104",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7447, // Sunnyside koordinatları
    "longitude": -73.9161
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "20:00"
  },
  "sameAs": [
    "https://www.instagram.com/azimebeautynyc",
    "https://www.facebook.com/azime.ozkaya.12"
  ],
  "servesCuisine": "Permanent Makeup, Microblading, Skin Care, Hydrafacial, Scalp Pigmentation"
};

export default function RootLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    const controlHeader = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "GALLERY", href: "/gallery" },
    { name: "PRICING", href: "/pricing" },
    { name: "CONTACT", href: "/contact" },
  ];

  const colors = {
    brandBg: "#C0AE92",
    lipRed: "#B50004",
    dark: "#1a1a1a",
    white: "#ffffff",
    whatsapp: "#25D366", 
  };

  const headerTopValue = !mounted ? "0" : (isVisible ? "0" : "-140px");

  return (
    <html lang="en">
      <head>
        {/* SEO - META TAGS */}
        <title>Azime Beauty | Best Microblading & Skin Clinic in Sunnyside, NY</title>
        <meta name="description" content="Premium Permanent Makeup & Advanced Skin Clinic in Queens, NY. Expert Microblading, Lip Blushing, Hydrafacial, and Scalp Pigmentation by Azime." />
        <meta name="keywords" content="Microblading Sunnyside, Permanent Makeup Queens NY, Lip Blushing New York, Skin Care Sunnyside, Scalp Pigmentation NY, Azime Beauty" />
        
        {/* Open Graph (Social Media) */}
        <meta property="og:title" content="Azime Beauty | Advanced Skin Clinic NY" />
        <meta property="og:description" content="Transform your beauty with expert permanent makeup and skin treatments in Sunnyside, NY." />
        <meta property="og:url" content="https://azimebeauty.com" />
        <meta property="og:type" content="website" />
        
        {/* JSON-LD INJECTION */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      
      <body suppressHydrationWarning={true} style={{ 
        margin: 0, padding: 0, boxSizing: 'border-box', backgroundColor: colors.white,
        fontFamily: "'Montserrat', sans-serif", WebkitFontSmoothing: 'antialiased',
        overflowX: 'hidden'
      }}>
        
        <header style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          padding: "15px 5%",
          background: colors.brandBg,
          position: "fixed",
          width: "100%",
          top: headerTopValue,
          left: 0,
          zIndex: 1000,
          transition: "top 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.2)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
        }}>
          
          <Link href="/" style={{ textDecoration: "none", justifySelf: "start" }}>
            <span style={{ 
              fontSize: "clamp(18px, 4vw, 26px)", 
              fontWeight: "300", 
              color: colors.white, 
              letterSpacing: "3px",
              fontFamily: "'Cormorant Garamond', serif"
            }}>
              AZIME BEAUTY
            </span>
          </Link>

          <nav className="desktop-nav" style={{ display: "flex", gap: "25px", justifySelf: "center" }}>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} style={{ textDecoration: "none", position: "relative" }}>
                <motion.span 
                  className="nav-item"
                  whileHover={{ opacity: 0.8 }}
                  style={{ 
                    color: colors.white, 
                    fontSize: "11px", 
                    fontWeight: "700", 
                    letterSpacing: "1.2px"
                  }}
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
          </nav>

          <div style={{ justifySelf: "end", display: "flex", alignItems: "center", gap: "15px" }}>
            <Link 
              href="/booking"
              className="desktop-nav"
              style={{
                textDecoration: "none",
                fontSize: "10px",
                fontWeight: "700",
                color: colors.white,
                backgroundColor: colors.lipRed,
                padding: "10px 20px",
                letterSpacing: "1.5px",
                borderRadius: "50px 10px 50px 10px", 
                textAlign: "center"
              }}
            >
              BOOK NOW
            </Link>

            <motion.button 
              className="mobile-btn"
              aria-label="Toggle Menu"
              onClick={() => setIsMobileMenuOpen(true)}
              whileTap={{ scale: 0.9 }}
              style={{ 
                display: "none", 
                background: "none", 
                border: "none", 
                cursor: "pointer",
                padding: "10px"
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "flex-end" }}>
                <div style={{ width: "28px", height: "2px", background: colors.white, borderRadius: "2px" }}></div>
                <div style={{ width: "18px", height: "2px", background: colors.white, borderRadius: "2px" }}></div>
                <div style={{ width: "24px", height: "2px", background: colors.white, borderRadius: "2px" }}></div>
              </div>
            </motion.button>
          </div>
        </header>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                inset: 0,
                background: colors.brandBg,
                zIndex: 2000,
                display: "flex",
                flexDirection: "column",
                padding: "40px 8%"
              }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button onClick={() => setIsMobileMenuOpen(false)} style={{ background: "none", border: "none", color: colors.white, fontSize: "12px", letterSpacing: "2px", fontWeight: "600" }}>CLOSE [✕]</button>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px", alignItems: "center" }}>
                {navLinks.map((link, i) => (
                  <motion.div key={link.name} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.1 }}>
                    <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: "none", color: colors.white, fontSize: "32px", fontFamily: "'Cormorant Garamond', serif" }}>{link.name}</Link>
                  </motion.div>
                ))}
                <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: navLinks.length * 0.1 }}>
                  <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: "none", color: colors.lipRed, fontSize: "32px", fontWeight: "bold", fontFamily: "'Cormorant Garamond', serif" }}>BOOK NOW</Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <main id="main-content" style={{ minHeight: "100vh", width: "100%", overflowX: "hidden" }}>
          {children}
        </main>

        <Footer />
        
        {mounted && (
          <>
            <MobileBottomBar />
            <motion.a
              href="https://wa.me/19147464232"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact on WhatsApp"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              style={{
                position: "fixed",
                bottom: "85px",
                right: "20px",
                zIndex: 1500,
                backgroundColor: colors.whatsapp,
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 25px rgba(37, 211, 102, 0.4)",
                color: "white"
              }}
            >
              <FaWhatsapp size={28} />
            </motion.a>
          </>
        )}

        <style jsx global>{`
          * { box-sizing: border-box; }
          html, body { overflow-x: hidden; width: 100%; scroll-behavior: smooth; }
          h1, h2, h3 { font-family: 'Cormorant Garamond', serif !important; }
          
          @media (max-width: 900px) {
            .desktop-nav { display: none !important; }
            .mobile-btn { display: block !important; }
            main { padding-bottom: 80px !important; }
          }
          
          .nav-item::after {
            content: '';
            position: absolute;
            width: 0; height: 1.5px; bottom: -4px; left: 0;
            background-color: white;
            transition: width 0.3s ease;
          }
          .nav-item:hover::after { width: 100%; }
        `}</style>
      </body>
    </html>
  );
}