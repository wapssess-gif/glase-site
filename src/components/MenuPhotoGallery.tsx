"use client";

import { useState } from "react";
import { ZoomIn } from "lucide-react";
import { menuPhotos } from "@/data/menu";
import Lightbox from "./Lightbox";

export default function MenuPhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + menuPhotos.length) % menuPhotos.length));
  const next = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % menuPhotos.length));

  return (
    <>
      <section id="menu-photos" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2 className="font-serif text-4xl font-medium text-[#231F1E] mb-2">Фото актуального меню</h2>
          <p className="text-[#6B655F]">
            Натисніть на фото, щоб збільшити — зручно переглянути страви з телефона
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {menuPhotos.map((photo, i) => (
            <button
              key={i}
              onClick={() => open(i)}
              className="relative group rounded-2xl overflow-hidden aspect-square bg-[#F2ECE3] border border-[#EAE2D9] hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5D4E]"
              aria-label={`Відкрити: ${photo.caption}`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#231F1E]/0 group-hover:bg-[#231F1E]/30 transition-colors flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow">
                  <ZoomIn size={18} className="text-[#231F1E]" />
                </div>
              </div>
              {/* Caption */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#231F1E]/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-medium leading-snug">{photo.caption}</p>
              </div>
            </button>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-[#6B655F]">
          ↑ Натисніть, щоб відкрити повноекранний перегляд
        </p>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          photos={menuPhotos}
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
