import HeroSection from "./components/HeroSection";
import ContactHR from "./components/ContactHR";
import ApplyForm from "./components/Apply";
import WhatsappButton from "./components/Whatsapp";
import CareerSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CareerSection/>
      <ContactHR />
      <ApplyForm />
      <WhatsappButton />
    </>
  );
}