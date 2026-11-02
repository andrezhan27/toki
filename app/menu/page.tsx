import { pageMetadata } from "@/lib/seo";
import Footer from "@/components/Footer";
import MenuPageContent from "@/components/MenuPageContent";
import Navbar from "@/components/Navbar";
export const metadata = pageMetadata(
  "Menu de Sushi e Rodízio em Leça da Palmeira | TOKI Sushi",
  "Explore o menu completo do TOKI Sushi em Leça da Palmeira, Matosinhos: entradas, combinados, sashimi, nigiri, uramaki e pratos quentes, com fotografias de cada prato.",
  "/menu",
);
export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <MenuPageContent />
      </main>
      <Footer />
    </>
  );
}
