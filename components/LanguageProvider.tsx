"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
export type Language = "pt" | "en";
const copy = {
  pt: {
    navHome: "Início",
    navSpace: "O Espaço",
    navMenu: "Menu",
    navInfo: "Contactos",
    navReserve: "Reservar mesa",
    pricing: "Preços",
    reserveTable: "Reservar mesa",
    scroll: "Entre no TOKI",
    heroEyebrow: "Restaurante japonês · Leça da Palmeira",
    heroLine: "O sabor de",
    heroAccent: "um bom momento.",
    heroBody: "Sushi e cozinha japonesa em Leça da Palmeira.",
    exploreMenu: "Descobrir os sabores",
    spaceEyebrow: "O nosso espaço",
    spaceTitle: "O Espaço",
    spaceBody:
      "Conheça o espaço do TOKI Sushi em Leça da Palmeira. Um ambiente acolhedor, com lanternas japonesas e mesas para almoços, jantares e encontros com amigos.",
    spaceNote: "O seu próximo encontro tem lugar aqui.",
    previousPhoto: "Fotografia anterior",
    nextPhoto: "Fotografia seguinte",
    menuEyebrow: "À mesa",
    menuTitle: "Menu",
    menuAccent: "peça a peça.",
    menuBody:
      "Combinados para partilhar, lagostim, sashimi e sushi braseado. Descubra os sabores do TOKI, ao almoço ou ao jantar.",
    fullMenu: "Ver menu completo",
    menuNote:
      "Uma seleção dos pratos do TOKI Sushi. Para consultar a carta completa e os alergénios, fale com a nossa equipa.",
    menuPageEyebrow: "TOKI Sushi · Leça da Palmeira",
    menuPageTitle: "Menu",
    menuPageBody:
      "Explore o menu do TOKI Sushi em Leça da Palmeira: sashimi, nigiri, gunkan e outras especialidades japonesas. Visite-nos ao almoço ou ao jantar, ou contacte-nos para takeaway.",
    backHome: "Voltar ao início",
    askMenu: "Consultar a carta por telefone",
    infoEyebrow: "Venha até nós",
    infoTitle: "Contactos",
    infoBody: "Visite o TOKI Sushi na Rua Veloso Salgado, em Leça da Palmeira. Estamos abertos todos os dias para almoço e jantar. Reserva já no website!",
    address: "Onde estamos",
    hours: "Todos os dias",
    lunch: "Almoço",
    dinner: "Jantar",
    contact: "Telefone",
    directions: "Como chegar",
    infoAside: "Restaurante japonês e sushi em Leça da Palmeira.",
    takeaway: "No restaurante · Takeaway",
    holidayNote: "O horário pode variar nos feriados.",
    footerNav: "Descubra",
    legal: "Informações",
    privacy: "Política de privacidade",
    termsAndConditions: "Termos e condições",
    complaints: "Livro de Reclamações",
    reservations: "Reservas",
    footerDesignedBy: "Powered by Intelis",
    footerRights: "Todos os direitos reservados.",
    photoCredit: "Fotografias do restaurante no Google Maps",
    reservationEyebrow: "À sua espera",
    reservationTitle: "Reservas",
    reservationBody:
      "Reserve a sua mesa no TOKI Sushi em Leça da Palmeira para almoço ou jantar. Ligue-nos para confirmar a disponibilidade, organizar uma refeição de grupo ou fazer um pedido especial.",
    callToBook: "Ligar para reservar",
    callNote: "Reserva sujeita a confirmação pela equipa do restaurante.",
  },
  en: {
    navHome: "Home",
    navSpace: "The space",
    navMenu: "Menu",
    navInfo: "Contacts",
    navReserve: "Book a table",
    pricing: "Prices",
    reserveTable: "Book a table",
    scroll: "Step into TOKI",
    heroEyebrow: "Japanese restaurant · Leça da Palmeira",
    heroLine: "A taste of",
    heroAccent: "a good moment.",
    heroBody: "Sushi and Japanese dining in Leça da Palmeira.",
    exploreMenu: "Discover the flavours",
    spaceEyebrow: "Our space",
    spaceTitle: "The Space",
    spaceBody:
      "Discover TOKI Sushi in Leça da Palmeira. A welcoming setting with Japanese lanterns and tables for lunch, dinner and meals with friends.",
    spaceNote: "Your next get-together belongs here.",
    previousPhoto: "Previous photo",
    nextPhoto: "Next photo",
    menuEyebrow: "At the table",
    menuTitle: "Menu",
    menuAccent: "piece by piece.",
    menuBody:
      "Sharing platters, langoustine, sashimi and seared sushi. Discover the flavours of TOKI over lunch or dinner.",
    fullMenu: "View the full menu",
    menuNote:
      "A selection of dishes at TOKI Sushi. For the full menu and allergen information, please speak to our team.",
    menuPageEyebrow: "TOKI Sushi · Leça da Palmeira",
    menuPageTitle: "Menu",
    menuPageBody:
      "Explore the menu at TOKI Sushi in Leça da Palmeira: sashimi, nigiri, gunkan and Japanese specialities. Join us for lunch or dinner, or contact us for takeaway.",
    backHome: "Back to home",
    askMenu: "Ask about the menu by phone",
    infoEyebrow: "Find your way here",
    infoTitle: "Contacts",
    infoBody: "Visit TOKI Sushi on Rua Veloso Salgado in Leça da Palmeira. Open daily for lunch and dinner. Book your table on our website!",
    address: "Find us",
    hours: "Every day",
    lunch: "Lunch",
    dinner: "Dinner",
    contact: "Telephone",
    directions: "Get directions",
    infoAside: "Japanese restaurant and sushi in Leça da Palmeira.",
    takeaway: "Dine in · Takeaway",
    holidayNote: "Opening hours may vary on public holidays.",
    footerNav: "Explore",
    legal: "Information",
    privacy: "Privacy policy",
    termsAndConditions: "Terms and conditions",
    complaints: "Complaints book",
    reservations: "Reservations",
    footerDesignedBy: "Powered by Intelis",
    footerRights: "All rights reserved.",
    photoCredit: "Restaurant photography on Google Maps",
    reservationEyebrow: "Your table awaits",
    reservationTitle: "Reservations",
    reservationBody:
      "Book a table at TOKI Sushi in Leça da Palmeira for lunch or dinner. Call us to check availability, arrange a group meal or discuss a special request.",
    callToBook: "Call to book",
    callNote:
      "Reservations are subject to confirmation by the restaurant team.",
  },
} as const;
type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof copy)[Language];
};
const LanguageContext = createContext<LanguageContextValue | null>(null);
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  const value = useMemo(
    () => ({ language, setLanguage, t: copy[language] }),
    [language],
  );
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
