import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  // Update metadataBase when you have a production domain
  metadataBase: new URL("https://glase.com.ua"),
  title: "glase — кав'ярня у Коломиї",
  description: "Авторські та класичні напої, ситні боули та свіжі десерти з вітрини у спокійній атмосфері кав'ярні glase. Пн–Сб 08:00–20:00 · Нд 09:00–20:00. вул. Драгоманова, 4А.",
  openGraph: {
    title: "glase — кав'ярня у Коломиї",
    description: "Кава, що створює настрій. Авторські напої, свіжа вітрина десертів та тематичні тижні щотижня.",
    images: [{ url: "/image/live-1.jpg", width: 1200, height: 630, alt: "glase — кав'ярня" }],
    type: "website",
    locale: "uk_UA",
    siteName: "glase",
  },
  twitter: {
    card: "summary_large_image",
    title: "glase — кав'ярня у Коломиї",
    description: "Кава, що створює настрій. Авторські напої, свіжа вітрина десертів та тематичні тижні щотижня.",
    images: ["/image/live-1.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={`${jakarta.variable} ${cormorant.variable} font-sans bg-cream text-espresso antialiased`}>
        {children}
      </body>
    </html>
  );
}
