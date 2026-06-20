"use client";

export default function RoleSwitcher() {
  return (
    <div className="mb-8 flex gap-4">

      <button className="rounded-2xl bg-[#004643] px-6 py-3 font-semibold text-white">
        View as Client
      </button>

      <button className="rounded-2xl border-2 border-[#004643] px-6 py-3 font-semibold text-[#004643]">
        View as Crew
      </button>
    </div>
  );
}