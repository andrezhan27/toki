import { pageMetadata } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import ReservationContent from "@/components/ReservationContent";
export const metadata = pageMetadata(
  "Reservas e Contactos | TOKI Sushi, Leça da Palmeira",
  "Reserve mesa para rodízio de sushi no TOKI, em Leça da Palmeira, Matosinhos. Rua Veloso Salgado 545. Reserve online para almoço ou jantar.",
  "/reservation",
);
export default function ReservationPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ReservationContent />
      </main>
    </>
  );
}
