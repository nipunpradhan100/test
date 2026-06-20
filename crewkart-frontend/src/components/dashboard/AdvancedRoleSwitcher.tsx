"use client";

import { useState } from "react";

export default function AdvancedRoleSwitcher() {
  const [role, setRole] = useState("client");

  return (
    <div className="mb-8 flex gap-4">

      <button
        onClick={() => setRole("client")}
        className={`rounded-2xl px-6 py-3 font-semibold transition ${
          role === "client"
            ? "bg-[#004643] text-white"
            : "border-2 border-[#004643] text-[#004643]"
        }`}
      >
        View as Client
      </button>

      <button
        onClick={() => setRole("crew")}
        className={`rounded-2xl px-6 py-3 font-semibold transition ${
          role === "crew"
            ? "bg-[#004643] text-white"
            : "border-2 border-[#004643] text-[#004643]"
        }`}
      >
        View as Crew
      </button>

    </div>
  );
}