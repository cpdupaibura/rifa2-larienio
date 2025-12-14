import Image from "next/image";
import BallGrid from "@/components/BallGrid";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start p-10 bg-[#fdf7f2]">
      <h1 className="text-4xl md:text-5xl mb-2 text-neutral-900 text-center font-[var(--font-playfair)] tracking-wide">
        Rifa de Casamento – Larissa & Enio 💍
      </h1>

      {/* Legenda das cores */}
      <div className="flex flex-wrap justify-center gap-6 mb-6 mt-2">
        <div className="flex items-center gap-2 text-sm font-semibold text-green-700">
          <span className="w-4 h-4 rounded-full bg-green-500 shadow-md" />
          Disponível
        </div>

        <div className="flex items-center gap-2 text-sm font-semibold text-orange-700">
          <span className="w-4 h-4 rounded-full bg-orange-500 shadow-md" />
          Reservado (Pendente)
        </div>

        <div className="flex items-center gap-2 text-sm font-semibold text-red-700">
          <span className="w-4 h-4 rounded-full bg-red-600 shadow-md" />
          Pago
        </div>
      </div>

      <div
        className="
          w-full max-w-4xl
          bg-white/80
          backdrop-blur-sm
          rounded-2xl
          shadow-[0_4px_20px_rgba(0,0,0,0.08)]
          border border-pink-100
          p-8
        "
      >
        <BallGrid />
      </div>

      {/* QR CODE */}
      <div className="mt-10 flex flex-col items-center">
        <Image
          src="/qrcode.jpg"
          width={240}
          height={240}
          alt="QR Code para pagamento via PIX"
          className="rounded-xl shadow-md"
        />
        <p className="mt-4 text-red-700 font-semibold text-lg text-center">
          Escaneie o QR Code para realizar o PIX 💗
        </p>
      </div>
    </main>
  );
}
