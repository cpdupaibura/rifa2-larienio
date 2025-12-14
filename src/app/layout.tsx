import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rifa do Casamento",
  description: "Acompanhe os números disponíveis e comprados da rifa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-[#faf4ef]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased min-h-screen flex flex-col bg-[#faf4ef]`}
      >
        {/* Conteúdo principal */}
        <main className="flex-1">{children}</main>

        {/* Rodapé PIX + legenda */}
        <footer className="w-full text-center py-6 bg-white border-t shadow-inner mt-8">
          <p className="text-xl font-semibold text-red-700 mb-2">
            💝 Deseja colaborar com o casamento?
          </p>

          <p className="text-md text-gray-700 mb-4">
            Chave PIX:
            <span className="text-red-600 font-bold ml-2">
              batalhaenio@gmail.com
            </span>
          </p>

          {/* Legenda das cores */}
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-green-500 shadow-md" />
              <span className="text-gray-700">Disponível</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-orange-500 shadow-md" />
              <span className="text-gray-700">Reservado (Pendente)</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-red-600 shadow-md" />
              <span className="text-gray-700">Pago</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
