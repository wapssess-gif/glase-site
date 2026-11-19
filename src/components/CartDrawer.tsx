"use client";

import { useState } from "react";
import { X, Minus, Plus, Clock, CheckCircle, ShoppingBag } from "lucide-react";
import { CartItem } from "@/types";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const TIME_OPTIONS = ["Через 10 хв", "Через 15 хв", "Через 20 хв", "На конкретний час"];

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemove,
}: CartDrawerProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [time, setTime] = useState(TIME_OPTIONS[0]);
  const [customTime, setCustomTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const total = items.reduce((acc, item) => {
    const sizePrice = item.size === "M" ? 15 : item.size === "L" ? 25 : 0;
    const milkPrice =
      item.milk === "Безлактозне" ? 15 : item.milk === "Рослинне" ? 20 : 0;
    return acc + (item.basePrice + sizePrice + milkPrice) * item.quantity;
  }, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    const num = `GL-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderNumber(num);
    setConfirmed(true);
  };

  const handleClose = () => {
    if (confirmed) {
      setConfirmed(false);
      setName("");
      setPhone("");
      setComment("");
      setTime(TIME_OPTIONS[0]);
      setCustomTime("");
      setOrderNumber("");
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-espresso/40 backdrop-blur-sm z-40"
        onClick={handleClose}
      />

      {/* Drawer */}
      <aside className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-cream z-50 flex flex-col shadow-2xl animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-beige">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-sage" />
            <h2 className="text-lg font-bold text-espresso">Замовити з собою</h2>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-beige transition-colors"
          >
            <X size={20} className="text-muted" />
          </button>
        </div>

        {confirmed ? (
          /* Confirmation screen */
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-5">
            <div className="w-20 h-20 rounded-full bg-sage/10 flex items-center justify-center">
              <CheckCircle size={40} className="text-sage" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-espresso mb-2">Замовлення прийнято!</h3>
              <p className="text-muted">
                Ваше замовлення{" "}
                <span className="font-bold text-espresso">{orderNumber}</span> вже готується.
              </p>
            </div>
            <div className="bg-beige rounded-2xl p-4 w-full text-sm space-y-2 border border-[#EAE2D9]">
              <div className="flex justify-between">
                <span className="text-muted">Час отримання</span>
                <span className="font-medium text-espresso">
                  {time === "На конкретний час" ? customTime : time}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Ім&#39;я</span>
                <span className="font-medium text-espresso">{name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Сума</span>
                <span className="font-bold text-espresso">{total} ₴</span>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-full bg-sage text-white py-3.5 rounded-full font-semibold hover:bg-sage-dark transition-colors"
            >
              Чудово, дякую!
            </button>
          </div>
        ) : (
          <>
            {/* Cart items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-3 py-16">
                  <div className="w-16 h-16 rounded-full bg-beige flex items-center justify-center">
                    <ShoppingBag size={28} className="text-muted" />
                  </div>
                  <p className="text-muted text-sm">Кошик порожній.<br />Додайте щось смачне!</p>
                </div>
              ) : (
                items.map((item) => {
                  const sizePrice = item.size === "M" ? 15 : item.size === "L" ? 25 : 0;
                  const milkPrice =
                    item.milk === "Безлактозне" ? 15 : item.milk === "Рослинне" ? 20 : 0;
                  const linePrice = (item.basePrice + sizePrice + milkPrice) * item.quantity;
                  return (
                    <div
                      key={item.id}
                      className="flex gap-3 items-start bg-beige rounded-xl p-3 border border-[#EAE2D9]"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-espresso text-sm leading-snug truncate">
                          {item.name}
                        </p>
                        {(item.size || item.milk) && (
                          <p className="text-xs text-muted mt-0.5">
                            {item.size && `${item.size}`}
                            {item.size && item.milk && " · "}
                            {item.milk && item.milk}
                          </p>
                        )}
                        <p className="font-bold text-espresso text-sm mt-1">{linePrice} ₴</p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-7 h-7 rounded-full bg-cream flex items-center justify-center hover:bg-[#EDE5DC] transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-7 h-7 rounded-full bg-cream flex items-center justify-center hover:bg-[#EDE5DC] transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          onClick={() => onRemove(item.id)}
                          className="w-7 h-7 rounded-full bg-cream flex items-center justify-center hover:bg-red-50 hover:text-red-400 transition-colors ml-1"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Order form */}
            {items.length > 0 && (
              <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4 border-t border-beige pt-4">
                {/* Time */}
                <div>
                  <label className="text-xs font-semibold text-muted uppercase tracking-wide flex items-center gap-1.5 mb-2">
                    <Clock size={12} />
                    Час готовності
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {TIME_OPTIONS.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setTime(t)}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold transition-colors text-left ${
                          time === t
                            ? "bg-sage text-white"
                            : "bg-beige text-muted hover:bg-[#EAE2D9]"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  {time === "На конкретний час" && (
                    <input
                      type="time"
                      value={customTime}
                      onChange={(e) => setCustomTime(e.target.value)}
                      className="mt-2 w-full bg-beige border border-[#EAE2D9] rounded-xl px-3 py-2.5 text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-sage/40"
                    />
                  )}
                </div>

                {/* Name + Phone */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Ваше ім&#x27;я"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-beige border border-[#EAE2D9] rounded-xl px-3 py-2.5 text-sm text-espresso placeholder-muted focus:outline-none focus:ring-2 focus:ring-sage/40"
                  />
                  <input
                    type="tel"
                    placeholder="+380..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="bg-beige border border-[#EAE2D9] rounded-xl px-3 py-2.5 text-sm text-espresso placeholder-muted focus:outline-none focus:ring-2 focus:ring-sage/40"
                  />
                </div>

                {/* Comment */}
                <textarea
                  placeholder="Коментар: без цукру, кориця зверху…"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={2}
                  className="w-full bg-beige border border-[#EAE2D9] rounded-xl px-3 py-2.5 text-sm text-espresso placeholder-muted focus:outline-none focus:ring-2 focus:ring-sage/40 resize-none"
                />

                {/* Total + Submit */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <p className="text-xs text-muted">Разом</p>
                    <p className="text-xl font-bold text-espresso">{total} ₴</p>
                  </div>
                  <button
                    type="submit"
                    className="bg-sage text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-sage-dark transition-colors"
                  >
                    Оформити замовлення
                  </button>
                </div>
              </form>
            )}
          </>
        )}
      </aside>
    </>
  );
}
