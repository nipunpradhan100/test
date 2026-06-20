"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  MapPin,
  ShieldCheck,
  Banknote,
  Lock,
  Headphones,
  Sparkles,
  ChevronDown,
  Navigation,
  X,
  Search
} from "lucide-react";

const POPULAR_CITIES = ["Mumbai", "Delhi", "Bangalore"];
const ALL_CITIES = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad",
  "Chennai", "Kolkata", "Pune", "Ahmedabad",
  "Jaipur", "Surat", "Lucknow", "Chandigarh"
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isDetecting, setIsDetecting] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCities = ALL_CITIES.filter(city =>
    city.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleDetectLocation = () => {
    setIsDetecting(true);
    setIsOpen(false);
    setTimeout(() => {
      setInputValue("Mumbai");
      setIsDetecting(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#05050A] text-white selection:bg-purple-500/30 overflow-hidden relative font-sans">

      {/* --- Ambient Background Orbs --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[10%] w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] right-[40%] w-[20rem] h-[20rem] bg-fuchsia-600/10 rounded-full blur-[80px] pointer-events-none" />

      <main className="grid lg:grid-cols-[48%_52%] min-h-screen relative z-10">
        {/* --- LEFT SIDE: Content --- */}
        <div className="flex flex-col justify-center px-6 sm:px-12 xl:px-24">
          <div className="inline-flex self-start items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/90 mb-4 backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]">
            <Sparkles size={16} className="text-[#A855FF]" />
            <span className="font-medium tracking-wide text-xs uppercase text-white/70">
              #1 Platform to Hire Creative Professionals
            </span>
          </div>

          {/* Typography - Slightly reduced xl font size */}
          <h1 className="text-4xl md:text-5xl xl:text-[4.2rem] font-bold tracking-tight text-white mb-3 leading-[1.1]">
            Hire Top Creative <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855FF] to-indigo-400">
              Talent. Instantly.
            </span>
          </h1>

          {/* Description - Reduced size and margin */}
          <p className="text-[15px] text-white/50 max-w-2xl leading-relaxed mb-6 font-light">
            Find and hire top verified creative professionals to execute your tasks, manage your events and bring your creative vision to life in minutes.
          </p>

          {/* --- Apple-Style Glass Form Card --- Reduced padding */}
          <div className="backdrop-blur-2xl bg-white/[0.02] border border-white/[0.08] rounded-[2rem] p-4 sm:p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] relative overflow-visible group">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 pointer-events-none" />

            <div className="flex justify-between items-center mb-3">
              <h3 className="text-white/90 text-lg font-medium flex items-center gap-2">
                Select Your Location
              </h3>
              <button
                type="button"
                onClick={handleDetectLocation}
                disabled={isDetecting}
                className="text-xs font-semibold text-[#A855FF] hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/5 hover:border-white/20 transition-all cursor-pointer disabled:opacity-50"
              >
                <Navigation size={12} className={isDetecting ? "animate-pulse text-white" : ""} />
                {isDetecting ? "Detecting..." : "Detect Location"}
              </button>
            </div>

            {/* Input Group */}
            <div className="relative mb-3" ref={dropdownRef}>
              <MapPin size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#A855FF] transition-colors z-10" />

              <input
                type="text"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
                placeholder="Where is your event or project located?"
                className="w-full rounded-2xl border border-white/10 bg-black/40 pl-14 pr-24 py-3.5 text-white text-base placeholder:text-white/30 outline-none focus:border-[#A855FF]/50 focus:bg-white/[0.05] transition-all ring-4 ring-transparent focus:ring-[#A855FF]/10 backdrop-blur-md relative z-10 cursor-text"
              />

              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 z-20">
                {inputValue && (
                  <button onClick={() => { setInputValue(""); setIsOpen(true); }} className="p-1.5 text-white/30 hover:text-white transition-colors">
                    <X size={16} />
                  </button>
                )}
                <button onClick={() => setIsOpen(!isOpen)} className="p-1.5 text-white/50 hover:text-white transition-colors">
                  <ChevronDown size={20} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>
              </div>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute top-[calc(100%+8px)] left-0 right-0 rounded-2xl border border-white/10 bg-[#0A0A10]/95 backdrop-blur-2xl shadow-[0_12px_40px_0_rgba(0,0,0,0.7)] overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <style>{`
                      .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                      .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                      .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(255, 255, 255, 0.15); border-radius: 20px; }
                    `}</style>

                  <div className="max-h-[300px] overflow-y-auto custom-scrollbar p-2">
                    {filteredCities.length > 0 ? (
                      <>
                        {!inputValue && (
                          <div className="px-3 pt-2 pb-1.5 text-[11px] font-bold tracking-wider text-[#A855FF] uppercase opacity-80">
                            All Available Cities
                          </div>
                        )}
                        <ul className="space-y-0.5">
                          {filteredCities.map((city) => (
                            <li key={city} onClick={() => { setInputValue(city); setIsOpen(false); }} className="px-4 py-3 hover:bg-white/[0.06] rounded-xl cursor-pointer text-white/95 transition-all flex items-center justify-between group/item">
                              <span className="flex items-center gap-3">
                                <MapPin size={16} className="text-white/30 group-hover/item:text-[#A855FF] transition-colors" />
                                <span className="font-medium">{city}</span>
                              </span>
                              <span className="text-[11px] text-white/30 group-hover/item:text-white/60 uppercase tracking-widest transition-colors font-medium">Select &rarr;</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <div className="px-5 py-8 text-white/40 text-center flex flex-col items-center gap-2">
                        <Search size={24} className="text-white/20" />
                        <span className="text-sm font-light">No creative communities found in "{inputValue}"</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Select Pills - Reduced margin */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4 text-sm">
              <span className="text-white/40 text-xs font-medium">Popular:</span>
              {POPULAR_CITIES.map((city) => (
                <button key={city} type="button" onClick={() => { setInputValue(city); setIsOpen(false); }} className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${inputValue === city ? "bg-[#A855FF]/10 border-[#A855FF]/50 text-white" : "bg-white/[0.03] border-white/5 text-white/70 hover:border-white/20 hover:text-white"}`}>
                  {city}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 px-6 py-3.5 rounded-2xl bg-white text-black font-semibold hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] active:scale-[0.98]">
                Book a Crew &rarr;
              </button>
              <button className="flex-1 px-6 py-3.5 rounded-2xl border border-white/10 bg-white/[0.02] text-white font-medium text-center hover:bg-white/[0.06] transition-all backdrop-blur-md active:scale-[0.98]">
                Join as Pro &rarr;
              </button>
            </div>
          </div>

          {/* Features list - Reduced margin */}
          <div className="flex items-center justify-center gap-8 mt-5 text-sm text-white/40 font-medium whitespace-nowrap">
            <span className="flex items-center gap-2 hover:text-white/80 transition-colors cursor-default">
              <ShieldCheck size={18} className="text-[#A855FF]/80" /> Verified Pros
            </span>
            <span className="flex items-center gap-2 hover:text-white/80 transition-colors cursor-default">
              <Banknote size={18} className="text-[#A855FF]/80" /> Transparent Pricing
            </span>
            <span className="flex items-center gap-2 hover:text-white/80 transition-colors cursor-default">
              <Lock size={18} className="text-[#A855FF]/80" /> Secure Payments
            </span>
            <span className="flex items-center gap-2 hover:text-white/80 transition-colors cursor-default">
              <Headphones size={18} className="text-[#A855FF]/80" /> 24/7 Support
            </span>
          </div>

        </div>


        {/* --- RIGHT SIDE --- */}
        <div className="hidden lg:flex items-center relative p-6 pl-0 -ml-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#05050A] via-[#05050A]/40 to-transparent z-10 pointer-events-none" />

          <div className="h-[82vh] w-[110%] relative rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2000&auto=format&fit=crop" alt="Creative Team" className="absolute inset-0 h-full w-full object-cover hover:scale-[1.05] transition-transform duration-[20s] ease-out" />
            <div className="absolute inset-0 bg-[#05050A]/20 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05050A]/90 via-transparent to-transparent" />

            <div className="absolute bottom-4 right-10 backdrop-blur-2xl bg-black/30 border border-white/10 rounded-[2rem] p-5 flex items-center gap-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transform hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-[2rem] pointer-events-none" />
              <div className="flex -space-x-3 relative z-10">
                <img src="https://i.pravatar.cc/100?img=1" className="w-12 h-12 rounded-full border-[3px] border-[#12121a]" alt="User" />
                <img src="https://i.pravatar.cc/100?img=2" className="w-12 h-12 rounded-full border-[3px] border-[#12121a]" alt="User" />
                <img src="https://i.pravatar.cc/100?img=3" className="w-12 h-12 rounded-full border-[3px] border-[#12121a]" alt="User" />
                <img src="https://i.pravatar.cc/100?img=4" className="w-12 h-12 rounded-full border-[3px] border-[#12121a]" alt="User" />
              </div>
              <div className="relative z-10 pr-2">
                <div className="text-white text-xl font-bold flex items-center gap-1.5">4.8 <Sparkles size={16} className="text-yellow-400 fill-yellow-400" /></div>
                <div className="text-white/60 text-sm font-medium">2k+ Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}