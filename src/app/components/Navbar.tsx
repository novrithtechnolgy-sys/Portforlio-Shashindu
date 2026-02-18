"use client";

import { useEffect, useState } from "react";
import Container from "./ui/Container";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "The Profile", href: "#story" },
  { label: "The Portfolio", href: "#portfolio" },
  { label: "The Philosophy", href: "#philosophy" },
  { label: "The Digital Playback", href: "#playback" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#story");

  /* ================= ACTIVE TAB ON SCROLL ================= */
  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px", // trigger center of screen
        threshold: 0,
      }
    );

    sections.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <Container>
        <div className="flex items-center justify-between py-4">
          
          {/* LOGO */}
          <a href="/">
          <Image
            src="Logo - NavigationBar_Version.gif"
            alt="Logo"
            width={120}
            height={40}
            className="object-contain h-8 md:h-12 w-50 -mr-20 md:-mr-18"
            unoptimized
          />
          </a>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80 font-[helvetica]">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative transition hover:text-white ${
                  active === l.href ? "text-white" : ""
                }`}
              >
                {l.label}

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-2 h-[1px] bg-white transition-all duration-300 ${
                    active === l.href ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
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
        className={`md:hidden absolute left-0 right-0 overflow-hidden transition-all duration-300 ${
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
                className={`relative font-[helvetica] text-lg transition ${
                  active === l.href ? "text-white" : ""
                }`}
              >
                {l.label}

                {/* underline mobile */}
                <span
                  className={`absolute left-0 -bottom-1 h-[1px] bg-white transition-all duration-300 ${
                    active === l.href ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
