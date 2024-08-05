import React from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="bg-white_1 text-purple w-full rounded-2xl p-5 text-xl font-semibold active:bg-opacity-80"
      type="submit"
    >
      {children}
    </button>
  );
}
