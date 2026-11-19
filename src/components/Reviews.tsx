import { Star, ExternalLink } from "lucide-react";

const REVIEWS = [
  {
    name: "Оксана М.",
    text: "Найкраща кава в Коломиї! Раф із фісташкою — це щось неймовірне. Атмосфера затишна, персонал завжди привітний. Тепер це моє місце для ранкової паузи.",
    stars: 5,
    date: "жовтень 2024",
  },
  {
    name: "Тарас К.",
    text: "Прийшли з дитиною — є спеціальний куточок із розмальовками, малий був у захваті. Поки він малював, ми спокійно попили каву та з'їли тарт. Дякуємо за таку турботу!",
    stars: 5,
    date: "жовтень 2024",
  },
  {
    name: "Марія Г.",
    text: "Відкрила для себе тематичні тижні — кожного разу щось нове й цікаве. Гарбузовий лате цієї осені був просто бомба. Вже чекаю на наступний випуск!",
    stars: 5,
    date: "листопад 2024",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#D97736] text-[#D97736]" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <h2 className="font-serif text-4xl font-medium text-[#231F1E] mb-2">Відгуки гостей</h2>
          <p className="text-[#6B655F]">Те, що кажуть ті, хто вже тут побував</p>
        </div>
        <a
          href="https://maps.google.com/?q=вул.+Драгоманова,+4А,+Коломия"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-[#231F1E] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#3A3330] transition-colors whitespace-nowrap flex-shrink-0"
        >
          <ExternalLink size={15} />
          Залишити відгук
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {REVIEWS.map((review) => (
          <div
            key={review.name}
            className="bg-[#FAF7F2] border border-[#EAE2D9] rounded-2xl p-6 flex flex-col gap-4"
          >
            <Stars count={review.stars} />
            <p className="text-[#231F1E] text-sm leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
            <div className="flex items-center justify-between pt-2 border-t border-[#EAE2D9]">
              <span className="font-semibold text-sm text-[#231F1E]">{review.name}</span>
              <span className="text-xs text-[#6B655F]">{review.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
