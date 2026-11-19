"use client";

import { useState } from "react";
import { X, Minus, Plus, Clock, CheckCircle, CalendarCheck } from "lucide-react";
import { BookingItem } from "@/types";

interface BookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: BookingItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const TIME_OPTIONS = ["Через 10 хв", "Через 15 хв", "Через 20 хв", "На точний час"];

const MILK_LABEL: Record<string, string> = {
  "Звичайне": "Звичайне молоко",
  "Безлактозне": "Безлактозне",
  "Рослинне": "Рослинне молоко",
};

export default function BookingDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemove,
}: BookingDrawerProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [comment, setComment] = useState("");
  const [time, setTime] = useState(TIME_OPTIONS[0]);
  const [customTime, setCustomTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [requestNumber, setRequestNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact) return;
    setRequestNumber(`GL-${Math.floor(1000 + Math.random() * 9000)}`);
    setConfirmed(true);
  };

  const handleClose = () => {
    if (confirmed) {
      setConfirmed(false);
      setName("");
      setContact("");
      setComment("");
      setTime(TIME_OPTIONS[0]);
      setCustomTime("");
      setRequestNumber("");
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-[#231F1E]/40 backdrop-blur-sm z-40" onClick={handleClose} />

      <aside className="fixed right-0 top-0 h-full w-full sm:w-[440px] bg-[#FAF7F2] z-50 flex flex-col shadow-2xl animate-[slideIn_0.3s_ease-out]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#EAE2D9]">
          <div className="flex items-center gap-2.5">
            <CalendarCheck size={20} className="text-[#4A5D4E]" />
            <h2 className="text-lg font-bold text-[#231F1E]">Забронювати з собою</h2>
          </div>
          <button onClick={handleClose} className="p-2 rounded-full hover:bg-[#F2ECE3] transition-colors">
            <X size={20} className="text-[#6B655F]" />
          </button>
        </div>

        {confirmed ? (
          /* Confirmation */
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-6">
            <div className="w-20 h-20 rounded-full bg-[#4A5D4E]/10 flex items-center justify-center">
              <CheckCircle size={40} className="text-[#4A5D4E]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#231F1E] mb-2">Запит надіслано!</h3>
              <p className="text-[#6B655F] text-sm leading-relaxed">
                Номер запиту: <span className="font-bold text-[#231F1E]">{requestNumber}</span>
                <br />
                Бариста зв&#39;яжеться з тобою найближчим часом.
              </p>
            </div>
            <div className="bg-[#F2ECE3] rounded-2xl p-4 w-full text-sm space-y-2.5 border border-[#EAE2D9]">
              <div className="flex justify-between">
                <span className="text-[#6B655F]">Час візиту</span>
                <span className="font-medium text-[#231F1E]">{time === "На точний час" ? customTime : time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B655F]">Контакт</span>
                <span className="font-medium text-[#231F1E]">{name}</span>
              </div>
              {items.length > 0 && (
                <div className="flex justify-between">
                  <span className="text-[#6B655F]">Позицій у броні</span>
                  <span className="font-medium text-[#231F1E]">{items.length}</span>
                </div>
              )}
            </div>
            <button
              onClick={handleClose}
              className="w-full bg-[#4A5D4E] text-white py-3.5 rounded-full font-semibold hover:bg-[#3A4A3E] transition-colors"
            >
              Чудово, дякую!
            </button>
          </div>
        ) : (
          <>
            {/* Items list */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-3 py-16">
                  <div className="w-16 h-16 rounded-full bg-[#F2ECE3] flex items-center justify-center">
                    <CalendarCheck size={28} className="text-[#6B655F]" />
                  </div>
                  <p className="text-[#6B655F] text-sm">
                    Список бажань порожній.<br />
                    Додай позиції з меню!
                  </p>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 items-start bg-[#F2ECE3] rounded-xl p-3 border border-[#EAE2D9]"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[#231F1E] text-sm leading-snug">{item.name}</p>
                      {(item.size || item.milk) && (
                        <p className="text-xs text-[#6B655F] mt-0.5">
                          {item.size && `Розмір ${item.size}`}
                          {item.size && item.milk && " · "}
                          {item.milk && MILK_LABEL[item.milk]}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-7 h-7 rounded-full bg-[#FAF7F2] flex items-center justify-center hover:bg-[#EDE5DC] transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-semibold w-4 text-center">{(item as BookingItem & { quantity?: number }).quantity ?? 1}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-7 h-7 rounded-full bg-[#FAF7F2] flex items-center justify-center hover:bg-[#EDE5DC] transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="w-7 h-7 rounded-full bg-[#FAF7F2] flex items-center justify-center hover:bg-red-50 hover:text-red-400 transition-colors ml-1"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4 border-t border-[#EAE2D9] pt-4">
              {/* Time */}
              <div>
                <label className="text-xs font-semibold text-[#6B655F] uppercase tracking-wide flex items-center gap-1.5 mb-2">
                  <Clock size={12} />
                  Час візиту
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {TIME_OPTIONS.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTime(t)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold transition-colors text-left ${
                        time === t
                          ? "bg-[#4A5D4E] text-white"
                          : "bg-[#F2ECE3] text-[#6B655F] hover:bg-[#EAE2D9]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                {time === "На точний час" && (
                  <input
                    type="time"
                    value={customTime}
                    onChange={(e) => setCustomTime(e.target.value)}
                    className="mt-2 w-full bg-[#F2ECE3] border border-[#EAE2D9] rounded-xl px-3 py-2.5 text-sm text-[#231F1E] focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]/30"
                  />
                )}
              </div>

              {/* Name + Contact */}
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Ваше ім&#x27;я"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-[#F2ECE3] border border-[#EAE2D9] rounded-xl px-3 py-2.5 text-sm text-[#231F1E] placeholder:text-[#6B655F]/60 focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]/30"
                />
                <input
                  type="text"
                  placeholder="Телефон або @нік"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                  className="bg-[#F2ECE3] border border-[#EAE2D9] rounded-xl px-3 py-2.5 text-sm text-[#231F1E] placeholder:text-[#6B655F]/60 focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]/30"
                />
              </div>

              {/* Comment */}
              <textarea
                placeholder="Коментар бариста: «підкажіть, які сьогодні є корпусні десерти»"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={2}
                className="w-full bg-[#F2ECE3] border border-[#EAE2D9] rounded-xl px-3 py-2.5 text-sm text-[#231F1E] placeholder:text-[#6B655F]/60 focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]/30 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-[#4A5D4E] text-white py-3.5 rounded-full font-semibold text-sm hover:bg-[#3A4A3E] transition-colors"
              >
                Надіслати запит бариста
              </button>
            </form>
          </>
        )}
      </aside>
    </>
  );
}
