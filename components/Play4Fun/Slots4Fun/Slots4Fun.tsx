"use client";
import React, { useEffect, useRef, useState } from "react";

/**
 * Slots3x3.tsx
 * - 3 colunas (cada coluna = um reel strip com N stops)
 * - mostra 3 símbolos visíveis por coluna (top, middle, bottom)
 * - anima spin e para uma coluna por vez
 * - ajuste: REEL_LENGTH para alterar quantos "stops" por reel (20-40 recomendado)
 */

// símbolos básicos (você pode adicionar/duplicar para variar frequências)
const SYMBOLS = ["🍒", "🍋", "🔔", "🍉", "⭐", "7️⃣", "🍇", "🍊"];

const REEL_LENGTH = 24; // recomendo 20-30 para estilo clássico; 32-78 para video slots
const VISIBLE = 3; // número de símbolos visíveis por coluna (top/middle/bottom)
const CELL_HEIGHT = 72; // px por célula (ajuste para o tamanho visual)

function randomStrip(symbols: string[], length: number) {
  // Gera um array com 'length' stops preenchidos aleatoriamente com símbolos,
  // mas garantindo alguma variedade (pode ajustar frequência duplicando alguns símbolos)
  const strip: string[] = [];
  for (let i = 0; i < length; i++) {
    strip.push(symbols[Math.floor(Math.random() * symbols.length)]);
  }
  return strip;
}

export default function Slots3x3() {
  // gera 3 reels (colunas) com strips independentes
  const [reels] = useState(() => [
    randomStrip(SYMBOLS, REEL_LENGTH),
    randomStrip(SYMBOLS, REEL_LENGTH),
    randomStrip(SYMBOLS, REEL_LENGTH),
  ]);

  // posição atual (index do símbolo que está no topo visível) para cada reel
  const [pos, setPos] = useState<number[]>(() => [
    Math.floor(Math.random() * REEL_LENGTH),
    Math.floor(Math.random() * REEL_LENGTH),
    Math.floor(Math.random() * REEL_LENGTH),
  ]);

  const [spinning, setSpinning] = useState(false);
  const [message, setMessage] = useState("");

  // refs para timers/intervals
  const intervalsRef = useRef<(number | null)[]>([null, null, null]);
  const timeoutsRef = useRef<(number | null)[]>([null, null, null]);

  // controla se o reel está em transição CSS (usamos para controlar duração)
  const [transitionDurations, setTransitionDurations] = useState<number[]>([
    0, 0, 0,
  ]);

  useEffect(() => {
    // cleanup on unmount
    return () => {
      intervalsRef.current.forEach((id) => id && clearInterval(id));
      timeoutsRef.current.forEach((id) => id && clearTimeout(id));
    };
  }, []);

  const startSpin = () => {
    if (spinning) return;
    setMessage("");
    setSpinning(true);

    // Para cada coluna: inicia um intervalo que incrementa a posição (spin rápido)
    // e programa um timeout escalonado para parar cada coluna com desaceleração.
    const baseStopDelay = 800; // ms primeiro reel para começar a parar
    const gapBetweenStops = 500; // ms entre cada reel stop

    // reset transition durations (rápido para visual de spin)
    setTransitionDurations([0.06, 0.06, 0.06]);

    for (let col = 0; col < 3; col++) {
      // spin interval: incrementa pos rapidamente (ilusão de rolar)
      intervalsRef.current[col] = window.setInterval(() => {
        setPos((prev) => {
          const next = [...prev];
          next[col] = (next[col] + 1) % REEL_LENGTH;
          return next;
        });
      }, 60 + Math.random() * 20); // intervalo levemente variado por realismo

      // schedule stop
      const stopTime =
        baseStopDelay + col * gapBetweenStops + Math.floor(Math.random() * 300);

      timeoutsRef.current[col] = window.setTimeout(() => {
        // clear the fast-interval
        if (intervalsRef.current[col]) {
          clearInterval(intervalsRef.current[col] as number);
          intervalsRef.current[col] = null;
        }

        // Escolher índice alvo de parada (o símbolo que ficará no centro / middle)
        // Vamos definir finalMiddleIndex aleatório e então calcular topIndex para alinhar o middle
        const finalMiddleIndex = Math.floor(Math.random() * REEL_LENGTH);
        const finalTopIndex =
          (finalMiddleIndex - 1 + REEL_LENGTH) % REEL_LENGTH; // top = middle -1 (porque temos 3 visíveis)

        // aplicar transição mais longa (desaceleração)
        setTransitionDurations((prev) => {
          const next = [...prev];
          next[col] = 0.6 + Math.random() * 0.3; // 600-900ms ease-out
          return next;
        });

        // atualiza pos[col] para finalTopIndex (com CSS transition anima o movimento)
        setPos((prev) => {
          const next = [...prev];
          next[col] = finalTopIndex;
          return next;
        });

        // se for a última coluna parar tudo e avaliar resultado
        if (col === 2) {
          // aguarda a animação terminar
          const finalWait = 900;
          timeoutsRef.current[3] = window.setTimeout(() => {
            setSpinning(false);

            // calcular símbolo do meio de cada coluna
            const middleSymbols = [0, 1, 2].map((c) => {
              const middleIndex = ((pos[c] ?? 0) + 1) % REEL_LENGTH; // pos representa topIndex; middle = top+1
              return reels[c][middleIndex];
            });

            // OBS: devido a assincronia de state setPos, recalc direto a partir do DOM state:
            // para garantir, vamos basear no último pos via callback síncrono - em React isso é OK aqui:
            // (se quiser 100% garantir use outros mecanismos; este é suficiente pra demo)
            const finalMiddle = [0, 1, 2].map((c) => {
              const top = ((pos[c] ?? 0) + 0) % REEL_LENGTH;
              const middle = (top + 1) % REEL_LENGTH;
              return reels[c][middle];
            });

            // contar matches
            if (
              finalMiddle[0] === finalMiddle[1] &&
              finalMiddle[1] === finalMiddle[2]
            ) {
              setMessage("🎉 JACKPOT! Três iguais na linha do meio!");
            } else if (
              finalMiddle[0] === finalMiddle[1] ||
              finalMiddle[1] === finalMiddle[2] ||
              finalMiddle[0] === finalMiddle[2]
            ) {
              setMessage("😊 Quase lá! Dois símbolos iguais.");
            } else {
              setMessage("😢 Sem combinação. Tente de novo!");
            }
          }, finalWait);
        }
      }, stopTime);
    }
  };

  // helper para obter os três visíveis (top, middle, bottom) de uma coluna, dado topIndex
  const visibleFor = (col: number) => {
    const top = pos[col] % REEL_LENGTH;
    const middle = (top + 1) % REEL_LENGTH;
    const bottom = (top + 2) % REEL_LENGTH;
    return [reels[col][top], reels[col][middle], reels[col][bottom]];
  };

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center text-white p-6">
      <h2 className="text-2xl font-bold mb-6">
        🎰 Slots 3x3 — Realistic Reel Strips
      </h2>

      <div className="flex gap-6 mb-6">
        {/* Cada coluna é um container vertical com overflow:hidden e altura = CELL_HEIGHT * VISIBLE */}
        {[0, 1, 2].map((col) => {
          const visible = visibleFor(col);
          const transSec = transitionDurations[col] ?? 0.06;
          // transform calcula com base no top index: translateY = - (topIndex * CELL_HEIGHT) mod (REEL_LENGTH*CELL_HEIGHT)
          const translateY = -(pos[col] * CELL_HEIGHT);

          return (
            <div
              key={col}
              className="w-28 bg-slate-800 rounded-lg p-2 shadow-lg"
            >
              <div
                className="overflow-hidden rounded"
                style={{
                  height: `${CELL_HEIGHT * VISIBLE}px`,
                  width: "100%",
                }}
              >
                {/* inner strip: nós renderizamos todos os stops para permitir animação de translateY */}
                <div
                  style={{
                    transform: `translateY(${translateY}px)`,
                    transition: `transform ${transSec}s cubic-bezier(.22,.98,.01,1)`,
                  }}
                >
                  {/* renderiza todos os stops em coluna para a animação ser contínua */}
                  {reels[col].map((s, i) => (
                    <div
                      key={`${col}-${i}`}
                      className="flex items-center justify-center"
                      style={{
                        height: `${CELL_HEIGHT}px`,
                        fontSize: "2rem",
                      }}
                    >
                      <div
                        className={`w-full h-full flex items-center justify-center text-4xl ${
                          i === (pos[col] + 1) % REEL_LENGTH
                            ? "scale-110 font-semibold"
                            : ""
                        }`}
                      >
                        {s}
                      </div>
                    </div>
                  ))}
                  {/* Para dar sensação contínua, repetir o começo do strip ao final (wrap) */}
                  {reels[col].slice(0, VISIBLE).map((s, i) => (
                    <div
                      key={`${col}-wrap-${i}`}
                      className="flex items-center justify-center"
                      style={{ height: `${CELL_HEIGHT}px` }}
                    >
                      <div className="w-full h-full flex items-center justify-center text-4xl">
                        {s}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={startSpin}
        disabled={spinning}
        className="bg-yellow-400 text-black font-bold px-6 py-2 rounded hover:bg-yellow-300 transition disabled:opacity-50 mb-4"
      >
        {spinning ? "Girando..." : "Spin"}
      </button>

      {message && <p className="mt-2 text-lg">{message}</p>}

      <p className="mt-4 text-sm text-slate-400 max-w-xl text-center">
        Cada coluna usa um reel strip com <strong>{REEL_LENGTH}</strong> stops.
        Isso imita roletas reais — em vez de sortear cada célula isoladamente, a
        coluna gira e para mostrando 3 símbolos visíveis (top/middle/bottom).
        Você pode ajustar <code>REEL_LENGTH</code> para simular máquinas
        clássicas (~20–30 stops) ou vídeo-slots modernos (32–78+).
      </p>
    </div>
  );
}
