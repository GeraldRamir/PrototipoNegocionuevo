import type { Metadata, Viewport } from "next";
import { Archivo, Bagel_Fat_One, Bricolage_Grotesque, Caveat, Fraunces } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import { getAvailableImages } from "@/lib/images";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-display",
  display: "swap",
});

const script = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const sans = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const condensed = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-condensed",
  display: "swap",
});

const logo = Bagel_Fat_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ravo Kafe — Seriously good coffee",
  description: "Small-batch roasts, flaky bakes and a window seat with your name on it.",
};

export const viewport: Viewport = {
  themeColor: "#D3DAB3",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const images = getAvailableImages();
  return (
    <html lang="en" className={`${display.variable} ${script.variable} ${sans.variable} ${condensed.variable} ${logo.variable}`}>
      <body>
        <Providers images={images}>{children}</Providers>
      </body>
    </html>
  );
}
