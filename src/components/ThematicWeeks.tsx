"use client";

import { useState } from "react";
import { CheckCircle2, Clock, ExternalLink } from "lucide-react";
import { thematicWeeks } from "@/data/menu";

export default function ThematicWeeks() {
  const [active, setActive] = useState(thematicWeeks[0].id);
  const week = thematicWeeks.find((w) => w.id === active)!;

  return (
    <section id="thematic" className="bg-[#F2ECE3] border-y border-[#EAE2D9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-sm font-medium text-[#6B655F] mb-4 border border-[#EAE2D9]">
            <Clock size={13} className="text-[#D97736]" />
            Оновлюється щотижня
          </div>
          <h2 className="font-serif text-4xl font-medium text-[#231F1E] mb-2">Тематичні тижні у glase</h2>
          <p className="text-[#6B655F] max-w-xl">
            Лімітовані корпусні десерти, авторська матча, крафтові сиропи та лимонади — нова тема щотижня.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
          {thematicWeeks.map((w) => (
            <button
              key={w.id}
              onClick={() => setActive(w.id)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                active === w.id
                  ? "bg-[#231F1E] text-white border-[#231F1E] shadow-sm"
                  : "bg-white text-[#6B655F] border-[#EAE2D9] hover:border-[#231F1E] hover:text-[#231F1E]"
              }`}
            >
              {w.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div key={active} className="grid lg:grid-cols-2 gap-8 items-start animate-[fadeIn_0.3s_ease-out]">
          <div>
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <h3 className="text-2xl font-bold text-[#231F1E]">{week.title}</h3>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  week.badge === "current"
                    ? "bg-[#4A5D4E] text-white"
                    : "bg-[#EAE2D9] text-[#6B655F]"
                }`}
              >
                {week.badgeLabel}
              </span>
            </div>
            <ul className="space-y-3">
              {week.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-white border border-[#EAE2D9] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={12} className="text-[#4A5D4E]" />
                  </span>
                  <span className="text-[#231F1E] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#E8E0D5]">
            <img src={week.image} alt={week.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Instagram note */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl px-6 py-5 border border-[#EAE2D9]">
          <p className="flex-1 text-sm text-[#6B655F] text-center sm:text-left">
            <span className="font-semibold text-[#231F1E]">Актуальну тему тижня</span> та свіжу вітрину десертів
            публікуємо щодня у Stories в Instagram
          </p>
          <a
            href="https://instagram.com/glase_house"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-[#231F1E] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#3A3330] transition-colors whitespace-nowrap flex-shrink-0"
          >
            Відкрити Instagram
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
