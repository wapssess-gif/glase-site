"use client";

import { useState } from "react";
import { ExternalLink, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Тематичні тижні", id: "thematic" },
  { label: "Фото меню", id: "menu-photos" },
  { label: "Асортимент", id: "menu" },
  { label: "Атмосфера", id: "atmosphere" },
  { label: "Відгуки", id: "reviews" },
  { label: "Контакти", id: "contacts" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 10);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#EAE2D9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">

        {/* Logo + status */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="font-serif text-3xl font-medium italic tracking-[0.06em] text-[#231F1E] select-none">glase</span>
          <span className="hidden sm:flex items-center gap-1.5 bg-[#F2ECE3] rounded-full px-3 py-1 text-xs font-medium text-[#6B655F] border border-[#EAE2D9]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Пн–Сб 08:00–20:00 · Нд 09:00–20:00
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-[#6B655F] hover:text-[#231F1E] transition-colors whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href="https://instagram.com/glase_house"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-[#231F1E] text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-[#3A3330] transition-colors"
          >
            <ExternalLink size={15} />
            <span className="hidden sm:inline">Instagram</span>
          </a>

          {/* Burger — mobile only */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-[#231F1E] hover:bg-[#F2ECE3] transition-colors"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden border-t border-[#EAE2D9] bg-[#FAF7F2] animate-[fadeIn_0.15s_ease-out]">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                className="text-left px-2 py-3 text-sm font-medium text-[#6B655F] hover:text-[#231F1E] border-b border-[#EAE2D9] last:border-0 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
