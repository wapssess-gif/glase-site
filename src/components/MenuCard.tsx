import { MenuItem } from "@/types";

const BADGE_CONFIG = {
  hit: { label: "Хіт", cls: "bg-[#4A5D4E] text-white" },
  classic: { label: "Класика", cls: "bg-[#231F1E] text-white" },
  daily: { label: "Оновлюється щодня", cls: "bg-[#D97736] text-white" },
  signature: { label: "Фірмове", cls: "bg-[#4A5D4E] text-white" },
};

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="bg-[#F2ECE3] rounded-2xl overflow-hidden border border-[#EAE2D9] hover:shadow-md transition-shadow flex flex-col group">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#EAE2D9] to-[#DDD5C8]">
        {item.image && (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        {item.badge && (
          <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${BADGE_CONFIG[item.badge].cls}`}>
            {BADGE_CONFIG[item.badge].label}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-1.5 flex-1">
        <h3 className="font-semibold text-[#231F1E] text-sm leading-snug">{item.name}</h3>
        <p className="text-xs text-[#6B655F] leading-relaxed">{item.description}</p>
        {item.note && (
          <p className="text-xs text-[#4A5D4E] font-medium mt-1 leading-snug">{item.note}</p>
        )}
      </div>
    </div>
  );
}
