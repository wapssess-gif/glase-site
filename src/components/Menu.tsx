"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { MenuCategory } from "@/types";
import { menuItems } from "@/data/menu";
import MenuCard from "./MenuCard";

const TABS: { label: string; value: MenuCategory }[] = [
  { label: "Усе", value: "all" },
  { label: "Кава та матча", value: "drinks" },
  { label: "Сніданки та боули", value: "food" },
  { label: "Десерти з вітрини", value: "desserts" },
];

export default function Menu() {
  const [active, setActive] = useState<MenuCategory>("all");

  const filtered =
    active === "all" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#EAE2D9]">
      <div className="mb-10">
        <h2 className="font-serif text-4xl font-medium text-[#231F1E] mb-2">Асортимент бару та вітрини</h2>
        <p className="text-[#6B655F]">Ознайомчий каталог — актуальне меню та наявність уточнюйте у закладі або в Instagram</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              active === tab.value
                ? "bg-[#4A5D4E] text-white shadow-sm"
                : "bg-[#F2ECE3] text-[#6B655F] hover:bg-[#EAE2D9]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        key={active}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 animate-[fadeIn_0.3s_ease-out]"
      >
        {filtered.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>

      {/* Milk info note */}
      {(active === "all" || active === "drinks") && (
        <div className="mt-8 flex items-start gap-3 bg-[#F2ECE3] rounded-2xl p-4 border border-[#EAE2D9]">
          <Info size={16} className="text-[#4A5D4E] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-[#6B655F]">
            <span className="font-semibold text-[#231F1E]">Молочні напої</span> готуємо на звичайному,
            безлактозному або рослинному молоці — уточнюйте у бариста.
          </p>
        </div>
      )}

      {active === "desserts" && (
        <div className="mt-8 flex items-start gap-3 bg-[#F2ECE3] rounded-2xl p-4 border border-[#EAE2D9]">
          <Info size={16} className="text-[#D97736] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-[#6B655F]">
            <span className="font-semibold text-[#231F1E]">Вітрина десертів</span> оновлюється щодня —
            актуальний асортимент та тематичні серії публікуємо в Stories Instagram.
          </p>
        </div>
      )}
    </section>
  );
}
