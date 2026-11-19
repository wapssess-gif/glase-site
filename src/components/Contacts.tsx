import { Clock, MapPin, AtSign } from "lucide-react";

export default function Contacts() {
  return (
    <section id="contacts" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-serif text-4xl font-medium text-[#231F1E] mb-6">Як нас знайти</h2>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#4A5D4E]/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-[#4A5D4E]" />
              </div>
              <div>
                <p className="font-semibold text-[#231F1E]">Адреса</p>
                <a
                  href="https://maps.google.com/?q=вул.+Драгоманова,+4А,+Коломия"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#6B655F] text-sm hover:text-[#4A5D4E] transition-colors"
                >
                  вул. Драгоманова, 4А, Коломия
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#4A5D4E]/10 flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-[#4A5D4E]" />
              </div>
              <div>
                <p className="font-semibold text-[#231F1E]">Графік роботи</p>
                <p className="text-[#6B655F] text-sm">Пн–Сб: 08:00 – 20:00</p>
                <p className="text-[#6B655F] text-sm">Нд: 09:00 – 20:00</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#D97736]/10 flex items-center justify-center flex-shrink-0">
                <AtSign size={20} className="text-[#D97736]" />
              </div>
              <div>
                <p className="font-semibold text-[#231F1E]">Instagram — свіжа вітрина щодня</p>
                <a
                  href="https://instagram.com/glase_house"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#D97736] text-sm font-medium hover:underline"
                >
                  @glase_house
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="https://maps.google.com/?q=вул.+Драгоманова,+4А,+Коломия"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#4A5D4E] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#3A4A3E] transition-colors"
            >
              <MapPin size={16} />
              Прокласти маршрут
            </a>
            <a
              href="https://instagram.com/glase_house"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#F2ECE3] text-[#231F1E] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#EAE2D9] transition-colors border border-[#EAE2D9]"
            >
              <AtSign size={16} />
              Сьогоднішня вітрина
            </a>
          </div>
        </div>

        {/* Google Maps embed */}
        <div className="rounded-2xl overflow-hidden border border-[#EAE2D9] aspect-[4/3] bg-[#F2ECE3]">
          <iframe
            src="https://maps.google.com/maps?q=вул.+Драгоманова,+4А,+Коломия,+Україна&output=embed&hl=uk&z=16"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="glase на карті"
          />
        </div>
      </div>
    </section>
  );
}
