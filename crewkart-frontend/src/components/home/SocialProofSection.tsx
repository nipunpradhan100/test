"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Heart,
  MapPin,
  Star,
  ArrowRight,
  CheckCircle2,
  Video,
  Camera,
  Layers,
  FileText,
  ArrowUpRight
} from "lucide-react";

interface ProCard {
  name: string;
  role: string;
  rating: number;
  reviews: number;
  location: string;
  initials: string;
  avatarBg: string; // Gradient class
  coverBg: string;  // Cover banner gradient class
  tags: string[];
  available: boolean;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const professionals: ProCard[] = [
  {
    name: "Shaurya Joshi",
    role: "Videographer",
    rating: 4.9,
    reviews: 128,
    location: "Kolkata, India",
    initials: "SJ",
    avatarBg: "from-violet-600 via-purple-600 to-indigo-600",
    coverBg: "from-violet-200/50 to-indigo-100/30",
    tags: ["Commercials", "Cinematic"],
    available: true,
    Icon: Video
  },
  {
    name: "Sarah Trivedi",
    role: "Photographer",
    rating: 4.8,
    reviews: 98,
    location: "Mumbai, India",
    initials: "ST",
    avatarBg: "from-pink-600 via-rose-500 to-amber-500",
    coverBg: "from-rose-200/50 to-orange-100/30",
    tags: ["Fashion", "Portraits"],
    available: true,
    Icon: Camera
  },
  {
    name: "Aryan Sharma",
    role: "Video Editor",
    rating: 4.9,
    reviews: 153,
    location: "Bangalore, India",
    initials: "AS",
    avatarBg: "from-emerald-600 via-teal-600 to-cyan-600",
    coverBg: "from-teal-200/50 to-cyan-100/30",
    tags: ["Color Grading", "VFX"],
    available: false,
    Icon: Layers
  },
  {
    name: "Navya Rawat",
    role: "Script Writer",
    rating: 4.8,
    reviews: 84,
    location: "Pune, India",
    initials: "NR",
    avatarBg: "from-amber-500 via-orange-600 to-red-600",
    coverBg: "from-amber-200/50 to-red-100/30",
    tags: ["Storyboarding", "Ad Copy"],
    available: true,
    Icon: FileText
  }
];

const stats: StatItem[] = [
  { value: 20, suffix: "K+", label: "Creative Professionals" },
  { value: 75, suffix: "K+", label: "Projects Completed" },
  { value: 15, suffix: "K+", label: "Happy Clients" },
  { value: 4.8, suffix: "/5", label: "Average Rating" },
];

const smoothEase = [0.22, 1, 0.36, 1];

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: smoothEase }}
  >
    {children}
  </motion.div>
);

function StatCounter({ target, suffix, label, index }: { target: number; suffix: string; label: string; index: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // ms
    const incrementTime = 30; // ms update rate
    const steps = duration / incrementTime;
    const stepValue = target / steps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  const isFloat = target % 1 !== 0;
  const displayValue = isFloat ? count.toFixed(1) : Math.floor(count);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: smoothEase }}
      className="flex flex-col items-center justify-center py-5 px-4"
    >
      <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0D1026] flex items-baseline font-sans">
        <span className="tabular-nums">{displayValue}</span>
        <span className="text-[#7B2CFF] ml-0.5 font-bold">{suffix}</span>
      </h3>
      <p className="mt-2 text-slate-500/80 text-[10px] md:text-xs font-bold tracking-widest uppercase text-center">
        {label}
      </p>
    </motion.div>
  );
}

export default function SocialProofSection() {
  const [likedMap, setLikedMap] = useState<Record<number, boolean>>({});

  const toggleLike = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setLikedMap((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 18 }
    }
  };

  return (
    <>
      {/* --- PART 1: TOP PROFESSIONALS --- */}
      <section className="bg-[#F2EDFF] pt-28 pb-16 relative overflow-hidden z-0">

        {/* Subtle grid pattern background to enhance the glassmorphism blur refraction */}
        <div className="absolute inset-0 bg-[radial-gradient(#8F76FF_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.15] -z-10 pointer-events-none" />

        {/* Sleek ambient glow meshes */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#7B2CFF]/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-bl from-[#A855FF]/10 via-[#7B2CFF]/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#0D1026]/5 pb-10">
              <div className="max-w-2xl space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0D1026]">
                  Popular Creative Professionals
                </h2>
                <p className="text-[#0D1026]/60 text-base sm:text-lg font-medium max-w-xl leading-relaxed">
                  Collaborate with vetted, award-winning artists and technical experts handpicked to scale your brand's digital presence.
                </p>
              </div>

              <FadeIn delay={0.1}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-2 text-[#7B2CFF] font-bold text-sm bg-white/60 backdrop-blur-md px-6 py-3.5 rounded-full border border-white/80 shadow-[0_4px_16px_-4px_rgba(13,16,38,0.06)] hover:bg-white hover:border-white hover:shadow-[0_12px_24px_-8px_rgba(123,44,255,0.18)] transition-all duration-300"
                >
                  View all talent
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </motion.button>
              </FadeIn>
            </div>
          </div>

          {/* Frosted Glass Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {professionals.map((pro, i) => {
              const isLiked = !!likedMap[i];
              const RoleIcon = pro.Icon;
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white/50 backdrop-blur-xl rounded-[2rem] border border-white/80 shadow-[0_12px_36px_-12px_rgba(13,16,38,0.05)] hover:shadow-[0_24px_48px_-12px_rgba(123,44,255,0.12)] hover:bg-white/70 hover:border-white transition-all duration-500 ease-[0.22,1,0.36,1] overflow-hidden"
                >
                  {/* Subtle interior light reflection on card hover */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(123,44,255,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Gradient Cover Banner with Glass Grid Accent */}
                  <div className={`relative h-28 bg-gradient-to-br ${pro.coverBg} flex items-center justify-center overflow-hidden border-b border-white/40`}>
                    <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:10px_10px]" />

                    {/* Glassy Live Status Tag */}
                    {pro.available && (
                      <div className="absolute top-4 left-4 bg-white/70 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)] border border-white/80">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[9px] font-extrabold text-emerald-800 tracking-wider uppercase">Active</span>
                      </div>
                    )}

                    {/* Glassy Circular Like Action */}
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      onClick={(e) => toggleLike(i, e)}
                      className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border ${isLiked
                          ? "bg-rose-500 text-white border-rose-400 shadow-md shadow-rose-200"
                          : "bg-white/60 text-slate-500 hover:text-rose-500 hover:bg-white hover:border-white backdrop-blur-md border-white/80 shadow-sm"
                        }`}
                    >
                      <Heart size={13} fill={isLiked ? "currentColor" : "none"} />
                    </motion.button>
                  </div>

                  {/* Avatar Overlay with Gradient Initials */}
                  <div className="px-6 relative -mt-10 mb-4 flex items-end justify-between">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${pro.avatarBg} text-white font-black text-2xl flex items-center justify-center shadow-[0_12px_24px_-8px_rgba(0,0,0,0.18)] border-4 border-white relative group-hover:scale-105 transition-transform duration-500 ease-[0.22,1,0.36,1]`}>
                      {pro.initials}
                      {/* Floating dark indicator of specialization */}
                      <span className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-lg bg-[#0D1026] text-white flex items-center justify-center shadow-md border border-slate-800">
                        <RoleIcon size={11} />
                      </span>
                    </div>

                    {/* Glass Vetted Label */}
                    <div className="flex items-center gap-1.5 text-[11px] text-[#0D1026]/80 font-bold bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                      <CheckCircle2 size={13} className="text-blue-500 fill-blue-50/50" />
                      <span>Vetted</span>
                    </div>
                  </div>

                  {/* Profile Metadata */}
                  <div className="px-6 pb-6 pt-1">
                    <div>
                      <h3 className="text-lg font-bold text-[#0D1026] tracking-tight group-hover:text-[#7B2CFF] transition-colors duration-200">
                        {pro.name}
                      </h3>
                      <p className="text-[#7B2CFF] text-[11px] font-bold uppercase tracking-widest mt-0.5">
                        {pro.role}
                      </p>
                    </div>

                    {/* Vetted Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 my-4">
                      {pro.tags.map((tag, tIndex) => (
                        <span key={tIndex} className="bg-white/40 text-[#0D1026]/70 border border-white/50 text-[10px] font-semibold px-2.5 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Ratings & Geography inside nested glassy container */}
                    <div className="flex items-center justify-between bg-white/40 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-white/60 text-xs">
                      <div className="flex items-center gap-1">
                        <Star size={13} fill="currentColor" className="text-amber-500 stroke-amber-500" />
                        <span className="font-bold text-slate-800">{pro.rating}</span>
                        <span className="text-slate-400 font-medium">({pro.reviews})</span>
                      </div>

                      <div className="flex items-center gap-1 text-slate-500 font-medium">
                        <MapPin size={11} className="text-[#7B2CFF]" />
                        <span className="truncate max-w-[95px]">{pro.location.split(',')[0]}</span>
                      </div>
                    </div>

                    {/* Glassy action trigger button */}
                    <div className="mt-5">
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full flex items-center justify-center gap-2 bg-[#0D1026]/90 hover:bg-[#0D1026] text-white transition-all duration-300 text-xs font-bold py-3.5 rounded-xl shadow-[0_4px_12px_rgba(13,16,38,0.1)] relative overflow-hidden group/btn"
                      >
                        <span>View Portfolio</span>
                        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </motion.button>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* --- PART 2: FLOATING GLASS CONSOLE STATS BAR --- */}
      <section className="bg-[#F2EDFF] pb-24 relative overflow-hidden -mt-1">
        {/* Subtle grid mesh continues */}
        <div className="absolute inset-0 bg-[radial-gradient(#8F76FF_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.15] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Floating Frosted Glass Console Panel */}
          <div className="relative rounded-[2rem] bg-white/30 backdrop-blur-2xl border border-white/60 shadow-[0_20px_50px_-12px_rgba(123,44,255,0.1)] px-6 py-8 md:py-10">

            {/* Linear light reflection across top of glass plate */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />

            {/* Minimal Grid dividing layouts perfectly */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 divide-y lg:divide-y-0 lg:divide-x divide-[#0D1026]/5">
              {stats.map((stat, i) => (
                <div key={i} className="first:pt-0 [&:nth-child(2)]:pt-0 lg:pt-0 lg:first:pl-0 lg:pl-6">
                  <StatCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    index={i}
                  />
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>
    </>
  );
}