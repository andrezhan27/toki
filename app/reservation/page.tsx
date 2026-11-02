import { pageMetadata } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import ReservationContent from "@/components/ReservationContent";
import Footer from "@/components/Footer";
export const metadata = pageMetadata(
  "Reservas e Contactos | TOKI Sushi, Leça da Palmeira",
  "Reserve mesa para rodízio de sushi no TOKI, em Leça da Palmeira, Matosinhos. Rua Veloso Salgado 545. Ligue +351 913 421 449 ou consulte como chegar.",
  "/reservation",
);
export default function ReservationPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ReservationContent />
      </main>
      <Footer />
    </>
  );
}
