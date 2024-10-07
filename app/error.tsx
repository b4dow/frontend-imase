"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ reset }: ErrorPageProps) {
  return (
    <div className="flex w-full h-full flex-col justify-center items-center">
      <h2 className="text-4xl mb-4">
        Hubo un error :c, espere a que lo solucionemos.
      </h2>
      <button
        onClick={reset}
        className="bg-red-500 py-2 px-5 rounded-lg text-lg text-white font-bold"
      >
        Intentar de nuevo
      </button>
    </div>
  );
}
