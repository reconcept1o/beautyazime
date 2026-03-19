// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import servicesHero from "../Assets/14.webp"; 

// const ServiceItem = ({ title, description, reverse }) => (
//   <motion.div 
//     initial={{ opacity: 0, y: 50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.8 }}
//     style={{ 
//       display: "flex", 
//       flexDirection: reverse ? "row-reverse" : "row", 
//       alignItems: "center", 
//       gap: "40px", 
//       marginBottom: "80px",
//       flexWrap: "wrap"
//     }}
//   >
//     {/* RESİM ALANI (Boş bıraktım, sen manuel ekleyeceksin) */}
//     <div style={{ 
//       flex: "1 1 400px", 
//       height: "400px", 
//       backgroundColor: "#f0f0f0", 
//       position: "relative",
//       borderRadius: "2px",
//       overflow: "hidden",
//       border: "1px solid #eee"
//     }}>
//       {/* <Image src={...} fill style={{ objectFit: 'cover' }} /> */}
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#ccc' }}>
//         [Service Image Here]
//       </div>
//     </div>

//     {/* METİN ALANI */}
//     <div style={{ flex: "1 1 400px" }}>
//       <h3 style={{ 
//         fontFamily: "'Cormorant Garamond', serif", 
//         fontSize: "32px", 
//         marginBottom: "20px", 
//         color: "#1a1a1a",
//         fontWeight: "400" 
//       }}>
//         {title}
//       </h3>
//       <p style={{ 
//         fontFamily: "'Montserrat', sans-serif", 
//         fontSize: "15px", 
//         lineHeight: "1.8", 
//         color: "#555",
//         fontWeight: "300"
//       }}>
//         {description}
//       </p>
//     </div>
//   </motion.div>
// );

// const CategoryHeader = ({ title }) => (
//   <div style={{ textAlign: "center", margin: "100px 0 60px" }}>
//     <h2 style={{ 
//       fontFamily: "'Cormorant Garamond', serif", 
//       fontSize: "50px", 
//       letterSpacing: "2px",
//       color: "#1a1a1a",
//       fontWeight: "300"
//     }}>
//       {title}
//     </h2>
//     <div style={{ width: "60px", height: "1px", background: "#E2C299", margin: "20px auto" }} />
//   </div>
// );

// export default function ServicesSection() {
//   return (
//     <div style={{ width: "100%", backgroundColor: "#ffffff" }}>
      
//       {/* TOP HERO IMAGE (14.webp) */}
//       <section style={{ height: "60vh", width: "100%", position: "relative", overflow: "hidden" }}>
//         <Image 
//           src={servicesHero} 
//           alt="Our Services" 
//           fill 
//           style={{ objectFit: "cover" }} 
//           priority
//         />
//         <div style={{ 
//           position: "absolute", 
//           inset: 0, 
//           background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2))",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center"
//         }}>
//           <h1 style={{ 
//             color: "white", 
//             fontFamily: "'Cormorant Garamond', serif", 
//             fontSize: "clamp(40px, 6vw, 80px)", 
//             letterSpacing: "10px",
//             textTransform: "uppercase",
//             fontWeight: "300"
//           }}>
//             Our Services
//           </h1>
//         </div>
//       </section>

//       {/* SERVICES CONTENT */}
//       <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 5%" }}>
        
//         {/* --- SECTION 1: SKIN CARE --- */}
//         <CategoryHeader title="Skin Care" />
//         <ServiceItem 
//           title="Classic Facial Treatment" 
//           description="Healthy, radiant skin starts with proper care, and a Classic Facial Treatment is the perfect way to refresh and rejuvenate your complexion. This essential skincare service deeply cleanses, exfoliates, and nourishes the skin, leaving it feeling smooth, hydrated, and naturally glowing." 
//         />
//         <ServiceItem 
//           reverse
//           title="Deep Cleansing Facial" 
//           description="A fresh, healthy complexion starts with a deep and thorough cleanse. The Deep Cleansing Facial at Azime Beauty is designed to detoxify the skin, remove impurities, and restore a balanced, radiant glow." 
//         />
//         <ServiceItem 
//           title="Hydrafacial" 
//           description="At Azime Beauty, our Hydrafacial treatment deeply cleanses, exfoliates, and hydrates your skin using advanced water-based technology. This gentle yet powerful facial removes impurities and infuses skin with nourishing serums." 
//         />
//         <ServiceItem 
//           reverse
//           title="Anti-Aging Care" 
//           description="Our Anti-Aging Treatment is designed to reduce fine lines, boost collagen production, and restore your skin’s youthful glow using advanced techniques and rejuvenating serums." 
//         />
//         <ServiceItem 
//           title="Dark Spot Treatment" 
//           description="Designed to reduce sunspots, hyperpigmentation, and uneven skin tone. Using advanced skincare techniques and brightening serums, we target discoloration for a radiant complexion." 
//         />
//         <ServiceItem 
//           reverse
//           title="Acne & Blemish Care" 
//           description="Helps control breakouts, regulate oil production, and soothe irritated skin. We work to reduce redness, unclog pores, and prevent future acne." 
//         />
//         <ServiceItem 
//           title="Microneedling" 
//           description="Microneedling (Dermapen) is an advanced skin rejuvenation treatment that stimulates natural collagen and elastin production. It helps improve fine lines, acne scars, and overall skin texture." 
//         />

//         {/* --- SECTION 2: PERMANENT MAKEUP --- */}
//         <CategoryHeader title="Permanent Makeup" />
//         <ServiceItem 
//           title="Powder Brows" 
//           description="A semi-permanent technique creating a soft, natural, and fuller-looking brow effect. It uses a micro-shading method resulting in a powdery, filled-in look." 
//         />
//         <ServiceItem 
//           reverse
//           title="Microblading" 
//           description="Ideal for those seeking natural, hair-like strokes to enhance brow shape and definition. The procedure gives a subtle, long-lasting effect that lasts 1 to 3 years." 
//         />
//         <ServiceItem 
//           title="Hybrid Brows" 
//           description="A combination of Microblading and Powder Brows, offering natural hair-like strokes with soft shading for a fuller, more defined look." 
//         />
//         <ServiceItem 
//           reverse
//           title="Eyeliner & Dipliner" 
//           description="Define and enhance the shape of your eyes with precision. Whether you want a bold winged look or a thin, elegant line, our eyeliner services provide a perfect, long-lasting finish." 
//         />
//         <ServiceItem 
//           title="Lip Blushing & Liner" 
//           description="Enhance the natural color and shape of your lips. Lip blushing creates a soft, tinted effect, making lips look fuller and more defined without daily lipstick." 
//         />
//         <ServiceItem 
//           reverse
//           title="Scalp Pigmentation" 
//           description="Scalp Micropigmentation (SMP) creates the illusion of a fuller head of hair by applying tiny pigment dots to mimic natural hair follicles." 
//         />

//         {/* --- SECTION 3: BROW & LASH LIFT --- */}
//         <CategoryHeader title="Brow & Lash Lift" />
//         <ServiceItem 
//           title="Brow Lifting" 
//           description="A brow lift naturally shapes and elevates your brows, enhancing your natural arch and helping open up the eyes for a refreshed look." 
//         />
//         <ServiceItem 
//           reverse
//           title="Keratin Lash Lifting" 
//           description="Uses the power of keratin to add volume, length, and a natural curl to your lashes. A mascara-free solution for an effortlessly defined look." 
//         />
//         <ServiceItem 
//           title="Lash Vitamin Treatment" 
//           description="Nourish and strengthen your natural lashes with essential vitamins. Deeply hydrates and revitalizes, helping lashes grow longer and fuller." 
//         />

//       </div>
//     </div>
//   );
// }