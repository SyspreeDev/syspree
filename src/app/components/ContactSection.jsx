"use client";

import { FaInstagram, FaLinkedin, FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-white border-4 border-black py-20 flex items-center"
    >
      <div className="w-full px-6 md:px-16 lg:px-24">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.2]">
          Get In <br />
          <span className="text-orange-500">Touch</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg max-w-2xl">
          Have questions or want to connect? Reach out to us through any of the
          platforms below. We’d love to hear from you!
        </p>

        {/* Social Links */}
        <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-4">
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            className="flex items-center gap-3 border-4 border-black px-6 py-3 rounded-xl font-bold hover:bg-orange-50 transition"
          >
            <FaInstagram />
            Instagram
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            className="flex items-center gap-3 border-4 border-black px-6 py-3 rounded-xl font-bold hover:bg-orange-50 transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          {/* Email */}
          <a
            href="mailto:hr@syspree.com"
            className="flex items-center gap-3 border-4 border-black px-6 py-3 rounded-xl font-bold hover:bg-orange-50 transition"
          >
            <FaEnvelope />
            Email Us
          </a>

          {/* Phone */}
          <a
            href="tel:+919876543210"
            className="flex items-center gap-3 border-4 border-black px-6 py-3 rounded-xl font-bold hover:bg-orange-50 transition w-full sm:w-auto"
          >
            <FaPhoneAlt className="text-lg" />
            Call Us
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="flex items-center gap-3 border-4 border-black px-6 py-3 rounded-xl font-bold hover:bg-orange-50 transition w-full sm:w-auto"
          >
            <FaWhatsapp className="text-lg" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
