'use client'
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full border-4 border-black text-2xl shadow-lg hover:scale-110"
    >
      <FaWhatsapp />
    </a>
  );
}