"use client";

import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { MenuPhoto } from "@/types";

interface LightboxProps {
  photos: MenuPhoto[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ photos, index, onClose, onPrev, onNext }: LightboxProps) {
  const photo = photos[index];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-50 bg-[#231F1E]/92 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
      >
        <X size={20} />
      </button>

      {/* Prev */}
      {photos.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
        >
          <ChevronLeft size={22} />
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-3xl w-full max-h-[85vh] flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.caption}
          className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl animate-[fadeIn_0.2s_ease-out]"
        />
        <p className="text-white/80 text-sm text-center px-4">{photo.caption}</p>
        <p className="text-white/40 text-xs">{index + 1} / {photos.length}</p>
      </div>

      {/* Next */}
      {photos.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
        >
          <ChevronRight size={22} />
        </button>
      )}
    </div>
  );
}
