import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "11vp1 - Site officiel de la classe",
  description: "Notre site pour la 11vp1 - événements, horaires, et plus encore!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-4 mt-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>&copy; 2026 Classe 11VP1, tous droits réservés.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
