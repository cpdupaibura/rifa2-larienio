"use client";

import React, { useState } from "react";

interface BallProps {
  number: number;
  sold: boolean;
  buyer?: string;
  status?: "Pago ✅" | "Pendente 🙏";
}

export default function Ball({ number, sold, buyer, status }: BallProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  // Define a cor da bolinha baseada no status
  const ballColor = !sold
    ? // 🟢 Disponível
      "bg-linear-to-br from-green-400 to-green-600 shadow-[0_0_12px_rgba(34,197,94,0.7)]"
    : status === "Pendente 🙏"
    ? // 🟠 Vendido - Pendente
      "bg-linear-to-br from-orange-400 to-orange-600 shadow-[0_0_12px_rgba(249,115,22,0.7)]"
    : // 🔴 Vendido - Pago
      "bg-linear-to-br from-red-600 to-red-800 shadow-[0_0_10px_rgba(220,38,38,0.6)]";

  return (
    <div className="relative flex items-center justify-center">
      <button
        onClick={handleClick}
        className={`
          w-14 h-14 flex items-center justify-center rounded-full text-white
          font-bold transition shadow-md active:scale-95
          ${ballColor}
        `}
      >
        {number}
      </button>

      {showTooltip && (
        <div
          className={`
            absolute -top-20 left-1/2 -translate-x-1/2
            bg-white text-black text-sm font-medium
            p-3 rounded-xl shadow-2xl
            z-50 w-max whitespace-nowrap animate-fade
            ${
              !sold
                ? "border border-green-200"
                : status === "Pendente 🙏"
                ? "border border-orange-300"
                : "border border-red-300"
            }
          `}
        >
          {sold ? (
            <>
              <p>
                <strong>Comprador:</strong> {buyer}
              </p>
              <p>
                <strong>Status:</strong> {status}
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-green-700">
                Número disponível ✅
              </p>
              <p className="text-gray-700">
                Faça o PIX e avise ao casal 💝
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
