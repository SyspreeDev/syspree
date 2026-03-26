"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
   <section
  id="home"
  className="min-h-screen border-4 border-black flex items-center bg-white"
>
  <div className="w-full px-6 md:px-16 lg:px-24 py-12 flex flex-col justify-center">

    {/* Heading */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight">
      Who <br />
      <span className="text-orange-500">we are</span>
    </h1>

    {/* Description */}
    <p className="mt-6 text-base sm:text-lg max-w-2xl">
      Syspree is a leading digital marketing and web development company
      that helps businesses grow through innovative strategies and
      technology-driven solutions.
    </p>

    {/* CTA */}
    <a
      href="https://syspree.com/"
      target="_blank"
      className="mt-6 inline-block bg-white border-4 border-black px-8 py-3 rounded-full text-sm font-bold w-fit hover:bg-orange-200 transition"
    >
      Visit Website
    </a>

  </div>
</section>
  );
}
