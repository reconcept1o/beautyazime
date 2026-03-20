"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Resim Importları (Aynen kalsın)
import servicesHero from "../Assets/14.webp";
import img1 from "../Assets/son/facialtreatment.jpg";
import img2 from "../Assets/son/DeepFacial.webp";
import img3 from "../Assets/son/Hydrafacial.webp";
import img4 from "../Assets/son/anti-aging.jpg";
import img5 from "../Assets/son/darkspot.png";
import img6 from "../Assets/son/acne.webp";
import img7 from "../Assets/son/microneedling.webp";
import img8 from "../Assets/son/powder.webp";
import img9 from "../Assets/son/microbleding.webp";
import img10 from "../Assets/son/Hybrid Brows.webp";
import img11 from "../Assets/son/Eyeliner & Dipliner.jpg";
import img12 from "../Assets/yeni/libblush.jpg";
import img13 from "../Assets/son/scalp.jpg";
import img15 from "../Assets/son/browlifting.jpeg";
import img16 from "../Assets/son/keratin.webp";
import img17 from "../Assets/yeni/LashVitaminTreatment.jpg";

const ServiceItem = ({ title, description, reverse, imageSrc }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8 }}
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "60px",
      alignItems: "center",
      marginBottom: "100px",
      direction: reverse ? "rtl" : "ltr" 
    }}
  >
    <div style={{ 
      position: "relative", 
      height: "450px", 
      width: "100%",
      borderRadius: "4px",
      overflow: "hidden",
      boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
      direction: "ltr" 
    }}>
      <Image 
        src={imageSrc} 
        alt={title} 
        fill 
        style={{ objectFit: 'cover' }} 
        sizes="(max-width: 900px) 100vw, 50vw"
      />
    </div>

    <div style={{ padding: "0 20px", direction: "ltr" }}>
      <h3 style={{ 
        fontFamily: "'Cormorant Garamond', serif", 
        fontSize: "clamp(28px, 4vw, 40px)", 
        color: "#1a1a1a", 
        fontWeight: "300", 
        marginBottom: "20px",
        lineHeight: "1.2"
      }}>
        {title}
      </h3>
      <p style={{ 
        fontFamily: "'Montserrat', sans-serif", 
        fontSize: "15px", 
        lineHeight: "1.9", 
        color: "#555",
        fontWeight: "300", 
        textAlign: "justify"
      }}>
        {description}
      </p>
      <div style={{ width: "50px", height: "1px", backgroundColor: "#E2C299", marginTop: "30px" }} />
    </div>
  </motion.div>
);

const CategoryHeader = ({ title }) => (
  <div style={{ textAlign: "center", margin: "100px 0 70px" }}>
    <span style={{ fontSize: "11px", letterSpacing: "6px", color: "#C0AE92", fontWeight: "700", textTransform: "uppercase", display: "block", marginBottom: "10px" }}>Treatments</span>
    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 52px)", color: "#1a1a1a", fontWeight: "300", margin: 0 }}>{title}</h2>
    <div style={{ width: "80px", height: "1px", backgroundColor: "#E2C299", margin: "25px auto" }} />
  </div>
);

export default function ServicesPage() {
  return (
    <div style={{ width: "100%", backgroundColor: "#ffffff" }}>
      
      {/* HERO SECTION */}
      <section style={{ 
        height: "80vh", // Biraz daha uzattık ki görkemli dursun
        width: "100%", 
        position: "relative", 
        overflow: "hidden",
        marginTop: "-90px" // Header'ın padding'ini sıfırlayıp resmi en tepeye çektik
      }}>
        <Image 
          src={servicesHero} 
          alt="Hero" 
          fill 
          style={{ objectFit: "cover", objectPosition: "center" }} 
          priority
        />
        <div style={{ 
          position: "absolute", 
          inset: 0, 
          background: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.3))",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 20px",
          textAlign: "center",
          /* --- DÜZELTME: Yazıları Header'ın altından kurtarmak için padding ekledik --- */
          paddingTop: "120px" 
        }}>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ color: "#E2C299", letterSpacing: "8px", fontSize: "12px", marginBottom: "20px", fontWeight: "600" }}
          >
            AZIME BEAUTY
          </motion.span>
          <h1 style={{ 
            color: "white", 
            fontFamily: "'Cormorant Garamond', serif", 
            fontSize: "clamp(42px, 8vw, 85px)", 
            letterSpacing: "12px",
            textTransform: "uppercase",
            fontWeight: "300",
            margin: 0,
            lineHeight: 1
          }}>
         SERVICES BY AZIME
          </h1>
        </div>
      </section>

      {/* CONTENT AREA */}
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 5%", overflow: "hidden" }}>
        <CategoryHeader title="Skin Care" />
        <ServiceItem title="Classic Facial Treatment" imageSrc={img1} description="Healthy, radiant skin starts with proper care. This essential service deeply cleanses, exfoliates, and nourishes the skin, leaving it smooth and naturally glowing." />
        <ServiceItem reverse title="Deep Cleansing Facial" imageSrc={img2} description="Designed to detoxify and restore balance. We go beyond the surface to purify your skin, clear out congestion, and allow your complexion to breathe freely." />
        <ServiceItem title="Hydrafacial" imageSrc={img3} description="Advanced technology to deeply cleanse and hydrate. This gentle procedure removes impurities while infusing your skin with premium serums for an instant, red-carpet glow." />
        <ServiceItem reverse title="Anti-Aging Care" imageSrc={img4} description="Target fine lines and boost collagen production. Using rejuvenated serums, we enhance firmness and elasticity for a refreshed, lifted, and youthful appearance." />
        <ServiceItem title="Dark Spot Treatment" imageSrc={img5} description="Reduce hyperpigmentation and sunspots. Our specialized approach fades discoloration and restores an even, luminous tone to your beautiful complexion." />
        <ServiceItem reverse title="Acne & Blemish Care" imageSrc={img6} description="Control breakouts and soothe irritated skin. We focus on regulating oil production and clearing pores to promote a healthier, blemish-free skin texture." />
        <ServiceItem title="Microneedling" imageSrc={img7} description="Advanced rejuvenation that stimulates natural collagen. Improves acne scars, fine lines, and overall texture with minimal downtime and visible results." />

        <CategoryHeader title="Permanent Makeup" />
        <ServiceItem title="Powder Brows" imageSrc={img8} description="Create a soft, misty, and fuller-looking brow effect. This technique provides a powdery finish that mimics the look of expertly applied makeup." />
        <ServiceItem reverse title="Microblading" imageSrc={img9} description="Ultra-fine, hair-like strokes for supreme definition. Perfect for those seeking a natural enhancement that lasts and perfectly frames the face." />
        <ServiceItem title="Hybrid Brows" imageSrc={img10} description="The ultimate combination of microblading strokes and powder shading. Achieve a defined yet natural look with the best of both artistry techniques." />
        <ServiceItem reverse title="Eyeliner & Dipliner" imageSrc={img11} description="Sharpen your gaze with smudge-proof precision. From subtle lash enhancement to bold wings, define your eyes with elegance that never fades." />
        <ServiceItem title="Lip Blushing & Liner" imageSrc={img12} description="Revive your lips' natural color and shape. This tinted effect provides a fuller, more youthful appearance without the need for daily lipstick application." />
        <ServiceItem reverse title="Scalp Pigmentation" imageSrc={img13} description="A sophisticated solution for hair thinning. We create the illusion of density by mimicking natural hair follicles with specialized cosmetic pigments." />

        <CategoryHeader title="Brow & Lash Lift" />
        <ServiceItem title="Brow Lifting" imageSrc={img15} description="Naturally lift and set your brows for a sleek, well-groomed look. This treatment opens up the eye area and enhances your natural arch beautifully." />
        <ServiceItem reverse title="Keratin Lash Lifting" imageSrc={img16} description="Volume, length, and a perfect curl without extensions. Keratin infusion strengthens your natural lashes while giving them a stunning, mascara-free lift." />
        <ServiceItem title="Lash Vitamin Treatment" imageSrc={img17} description="Nourish and revitalize weak or thinning lashes. Packed with essential nutrients, this treatment promotes health, resilience, and a fuller lash line." />
      </div>
    </div>
  );
}