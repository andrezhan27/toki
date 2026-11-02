import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import MenuCarousel from "@/components/MenuCarousel";
import Navbar from "@/components/Navbar";
import SpaceSection from "@/components/SpaceSection";
import PricingSection from "@/components/PricingSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "TOKI Sushi | Rodízio de Sushi em Leça da Palmeira, Matosinhos",
  "Rodízio de sushi em Leça da Palmeira, Matosinhos. No TOKI Sushi, descubra a cozinha japonesa e o sushi à discrição ao almoço e ao jantar. Veja o menu e reserve.",
  "/",
);
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <SpaceSection />
        <MenuCarousel />
        <PricingSection />
        <InfoSection />
      </main>
      <Footer />
    </>
  );
}
