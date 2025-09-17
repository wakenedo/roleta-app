"use client";
import React, { useEffect, useRef, useState } from "react";

const SYMBOLS = ["🍒", "🍋", "🔔", "🍉", "⭐", "7️⃣", "🍇", "🍊"];
const REEL_LENGTH = 24;
const VISIBLE = 3;
const CELL_HEIGHT = 72;

function randomStrip(symbols: string[], length: number) {
  const strip: string[] = [];
  for (let i = 0; i < length; i++) {
    strip.push(symbols[Math.floor(Math.random() * symbols.length)]);
  }
  return strip;
}

export default function Slots3x3() {
  const [reels] = useState(() => [
    randomStrip(SYMBOLS, REEL_LENGTH),
    randomStrip(SYMBOLS, REEL_LENGTH),
    randomStrip(SYMBOLS, REEL_LENGTH),
  ]);

  const [pos, setPos] = useState<number[]>(() => [
    Math.floor(Math.random() * REEL_LENGTH),
    Math.floor(Math.random() * REEL_LENGTH),
    Math.floor(Math.random() * REEL_LENGTH),
  ]);

  const [spinning, setSpinning] = useState(false);
  const [message, setMessage] = useState("");
  const [winningLines, setWinningLines] = useState<string[]>([]);
  const [persistWin, setPersistWin] = useState(false); // manter destaque entre jogadas (opcional)

  const intervalsRef = useRef<(number | null)[]>([null, null, null]);
  const timeoutsRef = useRef<(number | null)[]>([null, null, null, null]); // index 3 usado para final wait

  const [transitionDurations, setTransitionDurations] = useState<number[]>(
    () => [0, 0, 0]
  );

  useEffect(() => {
    return () => {
      clearAllTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clearAllTimers = () => {
    intervalsRef.current.forEach((id, i) => {
      if (id) {
        clearInterval(id);
        intervalsRef.current[i] = null;
      }
    });
    timeoutsRef.current.forEach((id, i) => {
      if (id) {
        clearTimeout(id);
        timeoutsRef.current[i] = null;
      }
    });
  };

  const startSpin = () => {
    if (spinning) return;

    // Se o usuário não quiser persistir o último win, limpamos ao iniciar spin.
    if (!persistWin) {
      setMessage("");
      setWinningLines([]);
    }

    setSpinning(true);

    const baseStopDelay = 800;
    const gapBetweenStops = 500;

    // array para guardar o topIndex final de cada reel (resolve problema de closure)
    const finalTopIndices = [0, 0, 0];

    setTransitionDurations([0.06, 0.06, 0.06]);

    for (let col = 0; col < 3; col++) {
      // spin rápido (visual)
      intervalsRef.current[col] = window.setInterval(() => {
        setPos((prev) => {
          const next = [...prev];
          next[col] = (next[col] + 1) % REEL_LENGTH;
          return next;
        });
      }, 60 + Math.random() * 20);

      const stopTime =
        baseStopDelay + col * gapBetweenStops + Math.floor(Math.random() * 300);

      timeoutsRef.current[col] = window.setTimeout(() => {
        // para o intervalo rápido
        if (intervalsRef.current[col]) {
          clearInterval(intervalsRef.current[col] as number);
          intervalsRef.current[col] = null;
        }

        // escolhe target de middle aleatório e calcula top index relativo
        const finalMiddleIndex = Math.floor(Math.random() * REEL_LENGTH);
        const finalTopIndex =
          (finalMiddleIndex - 1 + REEL_LENGTH) % REEL_LENGTH;

        // guarda o top final para uso posterior (sem depender de closure de state)
        finalTopIndices[col] = finalTopIndex;

        // animação de desaceleração
        setTransitionDurations((prev) => {
          const next = [...prev];
          next[col] = 0.6 + Math.random() * 0.3;
          return next;
        });

        // aplica pos para mover visualmente o reel
        setPos((prev) => {
          const next = [...prev];
          next[col] = finalTopIndex;
          return next;
        });

        // se for o último reel, aguarda animação e valida a grade final usando finalTopIndices
        if (col === 2) {
          const finalWait = 900;
          timeoutsRef.current[3] = window.setTimeout(() => {
            setSpinning(false);

            // montar a grade final (usando os top indices finais)
            const finalGrid = finalTopIndices.map((top, c) => {
              const topIdx = top % REEL_LENGTH;
              const midIdx = (topIdx + 1) % REEL_LENGTH;
              const botIdx = (topIdx + 2) % REEL_LENGTH;
              return [reels[c][topIdx], reels[c][midIdx], reels[c][botIdx]];
            });
            // finalGrid: [ [col0Top, col0Mid, col0Bot], [col1...], [col2...] ]

            // criar linhas (top, mid, bottom)
            const rows = [
              [finalGrid[0][0], finalGrid[1][0], finalGrid[2][0]], // top row
              [finalGrid[0][1], finalGrid[1][1], finalGrid[2][1]], // middle row
              [finalGrid[0][2], finalGrid[1][2], finalGrid[2][2]], // bottom row
            ];

            // diagonais (principal e secundária)
            const diagonals = [
              [finalGrid[0][0], finalGrid[1][1], finalGrid[2][2]], // ↘
              [finalGrid[0][2], finalGrid[1][1], finalGrid[2][0]], // ↙
            ];

            let winMessage = "";
            const winners: string[] = [];

            rows.forEach((row, i) => {
              if (row[0] === row[1] && row[1] === row[2]) {
                winMessage += `🎉 Linha ${i + 1}: ${row.join(" ")}\n`;
                winners.push(`row-${i}`);
              }
            });

            diagonals.forEach((diag, i) => {
              if (diag[0] === diag[1] && diag[1] === diag[2]) {
                winMessage += `🎉 Diagonal ${i + 1}: ${diag.join(" ")}\n`;
                winners.push(`diag-${i}`);
              }
            });

            if (!winMessage) {
              winMessage = "😢 Sem combinação. Tente de novo!";
            }

            setMessage(winMessage);
            setWinningLines(winners);
          }, finalWait);
        }
      }, stopTime);
    }
  };

  // função para forçar um win (modo: 'middle' | 'diag0' | 'diag1')
  const forceWin = (mode: "middle" | "diag0" | "diag1") => {
    clearAllTimers();
    setSpinning(false);

    setTransitionDurations([0.6, 0.6, 0.6]);

    let finalTopIndices: number[] = [0, 0, 0];
    let winners: string[] = [];

    if (mode === "middle") {
      let sym = SYMBOLS.find((s) => reels.every((r) => r.includes(s)));
      if (!sym) sym = reels[0][0];
      const middleIndices = reels.map((r) => r.findIndex((x) => x === sym));
      finalTopIndices = middleIndices.map(
        (mi) => (mi - 1 + REEL_LENGTH) % REEL_LENGTH
      );
      winners = ["row-1"];
    } else if (mode === "diag0") {
      let found = false;
      for (const s of SYMBOLS) {
        const i0 = reels[0].findIndex((x) => x === s);
        const i1 = reels[1].findIndex((x) => x === s);
        const i2 = reels[2].findIndex((x) => x === s);
        if (i0 >= 0 && i1 >= 0 && i2 >= 0) {
          finalTopIndices[0] = i0;
          finalTopIndices[1] = (i1 - 1 + REEL_LENGTH) % REEL_LENGTH;
          finalTopIndices[2] = (i2 - 2 + REEL_LENGTH) % REEL_LENGTH;
          winners = ["diag-0"];
          found = true;
          break;
        }
      }
      if (!found) return forceWin("middle");
    } else {
      let found = false;
      for (const s of SYMBOLS) {
        const i0 = reels[0].findIndex((x) => x === s);
        const i1 = reels[1].findIndex((x) => x === s);
        const i2 = reels[2].findIndex((x) => x === s);
        if (i0 >= 0 && i1 >= 0 && i2 >= 0) {
          finalTopIndices[0] = (i0 - 2 + REEL_LENGTH) % REEL_LENGTH;
          finalTopIndices[1] = (i1 - 1 + REEL_LENGTH) % REEL_LENGTH;
          finalTopIndices[2] = i2;
          winners = ["diag-1"];
          found = true;
          break;
        }
      }
      if (!found) return forceWin("middle");
    }

    // ✅ CHANGE: use requestAnimationFrame to ensure DOM updates before highlighting
    requestAnimationFrame(() => {
      setPos(finalTopIndices);
      setWinningLines(winners); // <-- moved here so it highlights correctly
    });

    const finalGrid = finalTopIndices.map((top, c) => {
      const topIdx = top % REEL_LENGTH;
      const midIdx = (topIdx + 1) % REEL_LENGTH;
      const botIdx = (topIdx + 2) % REEL_LENGTH;
      return [reels[c][topIdx], reels[c][midIdx], reels[c][botIdx]];
    });

    let winMessage = "";
    if (winners.includes("row-1")) {
      winMessage = `🎉 Test Win — Meio: ${finalGrid
        .map((col) => col[1])
        .join(" ")}`;
    } else if (winners.includes("diag-0")) {
      winMessage = `🎉 Test Win — Diagonal ↘: ${finalGrid[0][0]} ${finalGrid[1][1]} ${finalGrid[2][2]}`;
    } else if (winners.includes("diag-1")) {
      winMessage = `🎉 Test Win — Diagonal ↙: ${finalGrid[0][2]} ${finalGrid[1][1]} ${finalGrid[2][0]}`;
    }

    setMessage(winMessage);
  };

  // highlight: checa se a célula (rowIdx: 0=top,1=mid,2=bot; colIdx: 0..2) faz parte de uma linha/diagonal vencedora
  const highlight = (rowIdx: number, colIdx: number) => {
    if (winningLines.includes(`row-${rowIdx}`)) return true;
    if (winningLines.includes("diag-0") && rowIdx === colIdx) return true; // principal
    if (winningLines.includes("diag-1") && rowIdx === 2 - colIdx) return true; // secundária
    return false;
  };

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center text-white p-6">
      <h2 className="text-2xl font-bold mb-6">
        🎰 Slots 3x3 — Realistic Reel Strips
      </h2>

      <div className="flex gap-6 mb-6">
        {[0, 1, 2].map((col) => {
          const transSec = transitionDurations[col] ?? 0.06;
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
                <div
                  style={{
                    transform: `translateY(${translateY}px)`,
                    transition: `transform ${transSec}s cubic-bezier(.22,.98,.01,1)`,
                  }}
                >
                  {reels[col].map((s, i) => {
                    // calcular se esse stop está entre os visíveis e qual é a row (0..2)
                    const rel = (i - pos[col] + REEL_LENGTH) % REEL_LENGTH;
                    const inVisible = rel < VISIBLE;
                    const rowIdx = inVisible ? rel : -1;

                    const highlightClass =
                      inVisible && highlight(rowIdx, col)
                        ? "bg-yellow-400 text-black font-bold rounded-lg scale-110"
                        : "";

                    return (
                      <div
                        key={`${col}-${i}`}
                        className="flex items-center justify-center"
                        style={{ height: `${CELL_HEIGHT}px` }}
                      >
                        <div
                          className={`w-full h-full flex items-center justify-center text-4xl transition-transform ${highlightClass}`}
                        >
                          {s}
                        </div>
                      </div>
                    );
                  })}

                  {/* wrap para animação contínua */}
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

      <div className="flex gap-3 mb-3">
        <button
          onClick={startSpin}
          disabled={spinning}
          className="bg-yellow-400 text-black font-bold px-6 py-2 rounded hover:bg-yellow-300 transition disabled:opacity-50"
        >
          {spinning ? "Girando..." : "Spin"}
        </button>

        {/* Test buttons */}
        <button
          onClick={() => forceWin("middle")}
          className="bg-green-500 text-white font-bold px-3 py-1 rounded hover:bg-green-600"
        >
          Test Win — Middle
        </button>

        <button
          onClick={() => forceWin("diag0")}
          className="bg-blue-500 text-white font-bold px-3 py-1 rounded hover:bg-blue-600"
        >
          Test Win — Diag ↘
        </button>

        <button
          onClick={() => forceWin("diag1")}
          className="bg-purple-500 text-white font-bold px-3 py-1 rounded hover:bg-purple-600"
        >
          Test Win — Diag ↙
        </button>
      </div>

      <label className="flex items-center gap-2 text-sm mb-4">
        <input
          type="checkbox"
          checked={persistWin}
          onChange={(e) => setPersistWin(e.target.checked)}
        />
        <span>Manter último win destacado entre jogadas (persist)</span>
      </label>

      {message && (
        <pre className="mt-2 text-lg whitespace-pre-line">{message}</pre>
      )}

      <p className="mt-4 text-sm text-slate-400 max-w-xl text-center">
        Use os botões <strong>Test Win</strong> para forçar combinações (útil
        para debug). Ative Manter último win... se quiser que o destaque do
        último resultado permaneça visível quando iniciar uma nova jogada.
      </p>
    </div>
  );
}
