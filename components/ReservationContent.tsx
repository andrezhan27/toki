import { restaurantInfo } from "@/lib/restaurant-info";

export default function ReservationContent() {
  return (
    <div className="reservation-widget">
      <iframe
        className="block h-full w-full border-0"
        loading="eager"
        src={restaurantInfo.reservationWidgetUrl}
        title="Toki Reservation Form"
      />
    </div>
  );
}
