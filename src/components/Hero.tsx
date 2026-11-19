"use client";

import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left */}
        <div className="animate-[fadeIn_0.5s_ease-out]">
          <div className="inline-flex items-center gap-2 bg-[#F2ECE3] rounded-full px-4 py-1.5 text-sm font-medium text-[#6B655F] mb-6 border border-[#EAE2D9]">
            <span className="w-2 h-2 rounded-full bg-[#D97736]" />
            Кава, що створює настрій · Коломия
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-medium leading-[1.15] text-[#231F1E] mb-5">
            Твоя щоденна пауза на{" "}
            <span className="text-[#4A5D4E]">хорошу каву</span> та сніданки
          </h1>
          <p className="text-[#6B655F] text-lg leading-relaxed mb-8 max-w-lg">
            Вітрина десертів та авторських напоїв постійно оновлюється, а щотижня
            з&#39;являються тематичні серії з унікальними смаковими поєднаннями.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("menu-photos")}
              className="flex items-center gap-2 bg-[#4A5D4E] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#3A4A3E] transition-colors"
            >
              <ArrowDown size={15} />
              Дивитись фото меню
            </button>
            <button
              onClick={() => scrollTo("thematic")}
              className="flex items-center gap-2 bg-[#F2ECE3] text-[#231F1E] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#EAE2D9] transition-colors border border-[#E0D8CF]"
            >
              <Sparkles size={15} className="text-[#D97736]" />
              Тематичні тижні
            </button>
          </div>
        </div>

        {/* Right: collage */}
        <div className="relative animate-[fadeIn_0.6s_ease-out]">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 rounded-2xl overflow-hidden aspect-[16/9] bg-[#E8E0D5]">
              <img
                src="/image/live-1.jpg"
                alt="glase — бар та вітрина"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square bg-[#E8E0D5]">
              <img
                src="/image/live-3.jpg"
                alt="Гості в кав'ярні glase"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square bg-[#E8E0D5]">
              <img
                src="/image/live-2.jpg"
                alt="Затишний зал glase"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
