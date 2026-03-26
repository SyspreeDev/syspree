"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-black bg-orange-50 sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <img src="/syspree.png" alt="Company Logo" className="w-25" />

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 font-bold">
          <li>
            <a href="#home" className="hover:text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a href="#jobs" className="hover:text-orange-500">
              Career
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange-500">
              Connect
            </a>
          </li>
          <li>
            <a href="#apply" className="hover:text-orange-500">
              Apply
            </a>
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden border-2 border-black px-3 py-1 rounded-lg"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t-4 border-black bg-orange-100 px-6 py-4 space-y-4 font-bold">
          <a href="#home" className="block">
            Home
          </a>
          <a href="#jobs" className="block">
            Career Opportunities
          </a>
          <a href="#contact" className="block">
            Connect With Us
          </a>
          <a href="#apply" className="block">
            Apply
          </a>
        </div>
      )}
    </nav>
  );
}
