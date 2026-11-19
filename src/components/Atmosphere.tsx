import { Sun, Cake } from "lucide-react";

export default function Atmosphere() {
  return (
    <section id="atmosphere" className="bg-[#F2ECE3] border-y border-[#EAE2D9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h2 className="font-serif text-4xl font-medium text-[#231F1E] mb-2">Атмосфера та простір</h2>
          <p className="text-[#6B655F]">Місце, де хочеться затриматися</p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Kids corner — large accent card, col-span-2 */}
          <div className="sm:col-span-2 bg-[#FAF7F2] rounded-2xl border border-[#EAE2D9] overflow-hidden flex flex-col">
            <div className="aspect-[16/7] overflow-hidden bg-[#E8E0D5]">
              <img
                src="/image/kids-zone.jpg"
                alt="Дитячий куточок glase"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col gap-2">
              <h3 className="font-serif text-2xl font-medium text-[#231F1E]">Затишний дитячий куточок</h3>
              <p className="text-[#6B655F] text-sm leading-relaxed">
                У кав'ярні облаштована окрема комфортна зона для дітей — з дитячим столиком, розмальовками та кольоровими олівцями. Малюки можуть гратися та творити, поки батьки спокійно насолоджуються кавою та десертами з вітрини.
              </p>
            </div>
          </div>

          {/* Quiet atmosphere card */}
          <div className="bg-[#FAF7F2] rounded-2xl border border-[#EAE2D9] overflow-hidden flex flex-col">
            <div className="aspect-[4/3] overflow-hidden bg-[#E8E0D5]">
              <img
                src="/image/live-2.jpg"
                alt="Спокійний зал glase"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <h3 className="font-bold text-[#231F1E] leading-snug">Спокійна атмосфера</h3>
              <p className="text-[#6B655F] text-sm leading-relaxed">Затишний зал із м'якими кріслами, де приємно попрацювати або побути наодинці.</p>
            </div>
          </div>

          {/* Groups card */}
          <div className="bg-[#FAF7F2] rounded-2xl border border-[#EAE2D9] overflow-hidden flex flex-col">
            <div className="aspect-[4/3] overflow-hidden bg-[#E8E0D5]">
              <img
                src="/image/live-3.jpg"
                alt="Компанія в glase"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <h3 className="font-bold text-[#231F1E] leading-snug">Для компаній і зустрічей</h3>
              <p className="text-[#6B655F] text-sm leading-relaxed">Комфортний простір для зустрічей із друзями та сімейного відпочинку.</p>
            </div>
          </div>

          {/* Outdoor / Dessert card */}
          <div className="bg-[#FAF7F2] rounded-2xl border border-[#EAE2D9] overflow-hidden flex flex-col">
            <div className="aspect-[4/3] overflow-hidden bg-[#E8E0D5]">
              <img
                src="/image/live-5.jpg"
                alt="Вхід у кав'ярню glase"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <h3 className="font-bold text-[#231F1E] leading-snug">Літні столики</h3>
              <p className="text-[#6B655F] text-sm leading-relaxed">Затишна посадка просто неба біля цегляного фасаду — ідеально для ранкової кави.</p>
            </div>
          </div>

          {/* Daily showcase info card */}
          <div className="bg-[#4A5D4E] rounded-2xl border border-[#3A4A3E] p-6 flex flex-col justify-between gap-4">
            <Cake size={28} className="text-white/70" />
            <div>
              <h3 className="font-bold text-white mb-1.5 leading-snug">Завжди свіжа вітрина</h3>
              <p className="text-white/70 text-sm leading-relaxed">Десерти та сезонні спешли постійно оновлюються — актуальний асортимент у наших Stories.</p>
            </div>
            <a
              href="https://instagram.com/glase_house"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 text-xs font-semibold hover:text-white transition-colors"
            >
              @glase_house →
            </a>
          </div>

          {/* Outdoor seating info card */}
          <div className="bg-[#D97736]/10 rounded-2xl border border-[#D97736]/20 p-6 flex flex-col justify-between gap-4">
            <Sun size={28} className="text-[#D97736]" />
            <div>
              <h3 className="font-bold text-[#231F1E] mb-1.5 leading-snug">Відчинено щодня</h3>
              <p className="text-[#6B655F] text-sm leading-relaxed">Пн–Сб від 08:00, Нд від 09:00 до 20:00. Знаходимось у серці Коломиї — зручно зупинитися по дорозі.</p>
            </div>
            <span className="text-[#D97736] text-xs font-semibold">Пн–Сб 08:00 · Нд 09:00 – 20:00</span>
          </div>

        </div>
      </div>
    </section>
  );
}
