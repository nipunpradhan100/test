"use client";

export default function StatusTracker({ status }: { status: string }) {
  const steps = [
    { key: "pending", label: "Pending", icon: "⏳" },
    { key: "assigned", label: "Assigned", icon: "🔍" },
    { key: "accepted", label: "Accepted", icon: "✅" },
    { key: "completed", label: "Done", icon: "🎯" },
  ];
  const currentIndex = steps.findIndex((s) => s.key === status);

  return (
    <div className="flex items-center w-full">
      {steps.map((step, index) => (
        <div key={step.key} className="flex items-center flex-1 last:flex-none">
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
              currentIndex >= index ? "bg-gradient-to-br from-[#7B2CFF] to-[#5a17d4] text-white shadow-lg shadow-[#7B2CFF]/40 scale-110" : "bg-white/10 text-white/40"
            }`}>
              {step.icon}
            </div>
            <span className={`text-[10px] mt-1 font-bold ${currentIndex >= index ? "text-[#7B2CFF]" : "text-white/40"}`}>{step.label}</span>
          </div>
          {index < steps.length - 1 && (
            <div className="flex-1 h-1.5 mx-1 mb-4 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#7B2CFF] to-white transition-all duration-700 rounded-full" style={{ width: currentIndex > index ? "100%" : "0%" }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}