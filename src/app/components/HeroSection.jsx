"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
<section
  id="home"
  className=" min-h-screen border-4 border-black flex items-start bg-white"
>
  <div className="w-full px-5 sm:px-6 md:px-16 lg:px-24 py-14 md:py-16 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT: Content */}
    <div className="text-center md:text-left">
      <h1 className="text-5xl sm:text-6xl md:text-6xl leading-tight">
        Who <br />
        <span className="text-orange-500">we are</span>
      </h1>

      <p className="mt-5 text-base sm:text-lg md:text-lg max-w-md mx-auto md:mx-0">
        Syspree is a leading digital marketing and web development company
        that helps businesses grow through innovative strategies and
        technology-driven solutions.
      </p>

      <a
        href="https://syspree.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-white border-4 border-black px-7 py-3 rounded-full text-sm font-bold hover:bg-orange-200 transition"
      >
        Visit Website
      </a>
    </div>

    {/* RIGHT: Image */}
    <div className="flex justify-center md:justify-end">
      <img
        src="/teams.jpg"
        alt="Team"
        className="w-full max-w-xs sm:max-w-md md:max-w-md lg:max-w-lg border-4 border-black rounded-xl shadow-md"
      />
    </div>

  </div>
</section>
  );
}
