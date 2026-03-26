"use client";

export default function Footer() {
  return (
    <footer className="sticky top-0 bg-orange-50 border-4 border-black border-t-0 py-6">
      <div className="w-full px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <p className="text-sm font-semibold text-center md:text-left">
          © {new Date().getFullYear()} Syspree. All rights reserved.
        </p>

        {/* Right - Links */}
        <div className="flex gap-6 text-sm font-semibold">
          <a
            href="#home"
            className="hover:text-orange-500 transition"
          >
            Home
          </a>
          <a
            href="#jobs"
            className="hover:text-orange-500 transition"
          >
            Careers
          </a>
          <a
            href="#contact"
            className="hover:text-orange-500 transition"
          >
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
}