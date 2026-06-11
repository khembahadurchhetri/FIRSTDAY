"use client";

import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">
        Count: {count}
      </h1>

      <button
        onClick={() => setCount(count + 1)}
        className="mt-4 px-4 py-2 border"
      >
        Increase
      </button>
    </main>
  );
}