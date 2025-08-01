"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("🔥 Unhandled error:", error);
  }, [error]);

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold">Erro inesperado</h1>
      <p className="mt-4">Algo deu errado. Tente novamente.</p>
      <button
        onClick={reset}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Tentar novamente
      </button>
    </div>
  );
}
