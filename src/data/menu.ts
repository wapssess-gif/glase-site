import { MenuItem, ThematicWeek, MenuPhoto } from "@/types";

export const menuPhotos: MenuPhoto[] = [
  {
    src: "/image/bowl-salmon.jpg",
    caption: "Боул із лососем, авокадо, кіноа та яйцем",
  },
  {
    src: "/image/bowl-shrimp.jpg",
    caption: "Боул із креветками, авокадо та томатами чері",
  },
  {
    src: "/image/bowl-chicken.jpg",
    caption: "Боул із куркою, зеленню та кіноа",
  },
  {
    src: "/image/croissant-shrimp.jpg",
    caption: "Круасан із креветкою, авокадо та в'яленим томатом",
  },
];

export const menuItems: MenuItem[] = [
  // Drinks
  {
    id: "glase-signature",
    name: "Фірмовий напій Glase",
    description: "Авторська рецептура бариста — смак, який вас здивує",
    category: "drinks",
    badge: "signature",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
  },
  {
    id: "capuorange",
    name: "Капуоранж",
    description: "Еспресо зі свіжовичавленим апельсиновим соком",
    category: "drinks",
    badge: "hit",
    image: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=400&q=80",
  },
  {
    id: "espresso-americano",
    name: "Еспресо / Американо",
    description: "Класичний еспресо з бленду спеціалті кави",
    category: "drinks",
    badge: "classic",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80",
  },
  {
    id: "cappuccino-latte",
    name: "Капучино / Лате / Флет-вайт",
    description: "Збалансоване молочне кредо кав'ярні glase",
    category: "drinks",
    badge: "classic",
    note: "Готується на звичайному, безлактозному або рослинному молоці",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&q=80",
  },
  {
    id: "matcha-latte",
    name: "Матча-лате",
    description: "Церемоніальна матча — класична або на рослинному молоці",
    category: "drinks",
    badge: "hit",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&q=80",
  },
  {
    id: "cocoa-tea",
    name: "Какао та авторські чаї",
    description: "Зігрівальне какао та підібрані листові купажі",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=400&q=80",
  },
  // Food — using local photos
  {
    id: "salmon-bowl",
    name: "Боул із лососем",
    description: "Лосось, стигле авокадо, кіноа та яйце пашот",
    category: "food",
    badge: "hit",
    image: "/image/bowl-salmon.jpg",
  },
  {
    id: "shrimp-bowl",
    name: "Боул із креветками",
    description: "Креветки, авокадо, томати чері та кіноа",
    category: "food",
    image: "/image/bowl-shrimp.jpg",
  },
  {
    id: "chicken-bowl",
    name: "Боул із куркою",
    description: "Куряче філе, зелень, кіноа та соус",
    category: "food",
    image: "/image/bowl-chicken.jpg",
  },
  {
    id: "croissant-shrimp",
    name: "Круасан із креветкою та авокадо",
    description: "Свіжий круасан, креветка, авокадо та в'ялений томат",
    category: "food",
    image: "/image/croissant-shrimp.jpg",
  },
  // Desserts
  {
    id: "mousse-cakes",
    name: "Корпусні мусові тістечка",
    description: "Щотижнева авторська серія від нашого кондитера",
    category: "desserts",
    badge: "daily",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80",
  },
  {
    id: "cake-of-day",
    name: "Торти та тарти дня",
    description: "Щоденна свіжа випічка — актуальний асортимент у Stories",
    category: "desserts",
    badge: "daily",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&q=80",
  },
  {
    id: "eclairs",
    name: "Ніжні еклери",
    description: "З різними кремовими начинками та глазур'ю",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1612203985729-70726954388c?w=400&q=80",
  },
  {
    id: "macarons",
    name: "Макаронс в асортименті",
    description: "Сезонні кольори та смаки тижня",
    category: "desserts",
    badge: "daily",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&q=80",
  },
];

export const thematicWeeks: ThematicWeek[] = [
  {
    id: "pistachio-raspberry",
    title: "Фісташка – Малина",
    badge: "current",
    badgeLabel: "Тематичний спешл",
    items: [
      "Корпусний десерт «Фісташка-Малина» з ніжним мусом та ягідною начинкою",
      "Фісташковий торт із малиновим конфі",
      "Освіжаючий лимонад та безалкогольний коктейль «Малина-Фісташка»",
    ],
    image: "/image/raspberry-desserts.jpg",
  },
  {
    id: "apple-week",
    title: "Яблучний тиждень",
    badge: "past",
    badgeLabel: "Приклад меню",
    items: [
      "Корпусне тістечко «Печене яблуко та карамель»",
      "Домашній яблучний тарт",
      "Кава на крафтовому яблучному сиропі",
      "Зігріваючий напій із сухофруктами та прянощами",
    ],
    image: "/image/apple-week.jpg",
  },
  {
    id: "pumpkin-week",
    title: "Гарбузовий тиждень",
    badge: "past",
    badgeLabel: "Приклад меню",
    items: [
      "Гарбузовий лате та раф із фірмовим декором",
      "Пряний гарбузовий тарт та чізкейк",
      "Корпусні мусові десерти з гарбузом і корицею",
      "Зігріваючі напої на крафтовому пряному сиропі",
    ],
    image: "/image/pumpkin-week.jpg",
  },
];
