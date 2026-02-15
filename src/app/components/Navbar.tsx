"use client";

import { useState } from "react";
import Container from "./ui/Container";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "My Story", href: "#story" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "The Philosophy", href: "#philosophy" },
  { label: "The Digital Playback", href: "#playback" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <Container>
        <div className="flex items-center justify-between py-4">
          
          {/* LOGO */}
          <Image
            src="https://res.cloudinary.com/dpjmcup95/image/upload/v1770978880/55d2fdc49bd0966f4bfca0179bc5aea159f209de_pk3jiv.png"
            alt="Logo"
            width={120}
            height={40}
            className="object-contain"
            priority
          />

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-white transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </Container>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 border-t border-white/10" : "max-h-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl">
          <div className="flex flex-col items-center gap-6 py-8 text-white/80">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-lg hover:text-white transition"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
