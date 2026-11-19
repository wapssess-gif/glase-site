export default function Footer() {
  return (
    <footer className="bg-[#231F1E] text-[#FAF7F2]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-serif text-3xl font-medium italic tracking-[0.06em] text-[#FAF7F2]">glase</span>
        <div className="text-center sm:text-right space-y-1">
          <p className="text-sm">© 2025 glase — кава • десерти • затишок. Пн–Сб 08:00–20:00 · Нд 09:00–20:00.</p>
          <p className="text-xs text-[#FAF7F2]/40">Сайт створено в ознайомчих цілях</p>
        </div>
      </div>
    </footer>
  );
}
