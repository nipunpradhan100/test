"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video,
  Camera,
  Film,
  Palette,
  Megaphone,
  CalendarDays,
  ArrowRight,
  FileText,
  UserCheck,
  CreditCard,
  CheckCircle,
  ClipboardCheck,
  SearchCheck,
  MapPinned,
  MessageSquareText,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  PenLine,
  Layout,
  Code,
  Share2,
  ArrowUpRight,
} from "lucide-react";

// --- ANIMATION VARIANTS ---
const smoothEase = [0.22, 1, 0.36, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: smoothEase },
  },
};

// Reusable animated badge for MNC look
const Badge = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={itemUp}
    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_2px_10px_-4px_rgba(123,44,255,0.2)] mb-6"
  >
    <div className="w-1.5 h-1.5 rounded-full bg-[#7B2CFF] animate-pulse" />
    <span className="text-[#7B2CFF] text-xs font-bold uppercase tracking-widest">
      {children}
    </span>
  </motion.div>
);

export default function CoreFeaturesSection() {
  // State for the Interactive Walkthrough Carousel
  const [currentStep, setCurrentStep] = useState(0);

  const walkthroughSteps = [
    {
      id: 1,
      badge: "Step 1",
      windowTitle: "Requirements_Engine",
      title: "Submit Brief",
      desc: "Outline your requirements, location, and strict timelines.",
      icon: FileText,
      iconColor: "text-[#7B2CFF]",
    },
    {
      id: 2,
      badge: "Step 2",
      windowTitle: "AI_Matching_Algorithm",
      title: "Get Matched",
      desc: "Review portfolios of verified, available professionals.",
      icon: UserCheck,
      iconColor: "text-[#7B2CFF]",
    },
    {
      id: 3,
      badge: "Step 3",
      windowTitle: "Escrow_Vault",
      title: "Secure Booking",
      desc: "Finalize details and hold funds securely in escrow.",
      icon: CreditCard,
      iconColor: "text-[#7B2CFF]",
    },
    {
      id: 4,
      badge: "Done",
      windowTitle: "System_Status",
      title: "Project Delivery",
      desc: "Review the work and release payment upon approval.",
      icon: CheckCircle,
      iconColor: "text-[#10B981]", // Green like the screenshot
    },
  ];

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, walkthroughSteps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <section className="relative bg-[#F2EDFF] text-[#0D1026] py-24 sm:py-32 font-sans overflow-hidden selection:bg-[#7B2CFF] selection:text-white z-0">
      
      {/* --- AMBIENT ANIMATED BACKGROUND --- */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1], 
          opacity: [0.4, 0.6, 0.4],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-gradient-to-bl from-[#7B2CFF]/10 via-[#A855FF]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#7B2CFF]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* --- MODULE 1: BROWSE BY CATEGORIES --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-32"
        >
          <div className="flex flex-col mb-12 border-b border-[#0D1026]/5 pb-8">
            <div className="max-w-2xl">
              <Badge>Talent Network</Badge>
              <motion.h2 variants={itemUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0D1026]">
                Browse by discipline.
              </motion.h2>
              <motion.p variants={itemUp} className="mt-4 text-[#0D1026]/60 text-lg font-medium max-w-xl leading-relaxed">
                Connect with top-tier, vetted professionals across our core creative and technical specialties.
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { name: "Videographers", icon: Video },
              { name: "Video Editors", icon: Film },
              { name: "Scriptwriters", icon: PenLine },
              { name: "Photographers", icon: Camera },
              { name: "UI/UX Designers", icon: Layout },
              { name: "Website Developers", icon: Code },
              { name: "Graphic Designers", icon: Palette },
              { name: "Branding Specialists", icon: Megaphone },
              { name: "Social Media Managers", icon: Share2 },
              { name: "Event Managers", icon: CalendarDays }
            ].map((cat, i) => {
              const Icon = cat.icon;

              return (
                <motion.div key={i} variants={itemUp}>
                  <div className="group relative h-48 w-full bg-white/50 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-500 ease-[0.22,1,0.36,1] hover:-translate-y-2 hover:bg-white hover:border-white hover:shadow-[0_24px_48px_-12px_rgba(123,44,255,0.15)] shadow-[0_8px_24px_-12px_rgba(13,16,38,0.04)] overflow-hidden">
                    
                    {/* Subtle radial spotlight glow on hover */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(123,44,255,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />

                    {/* Top Right Action Icon */}
                    <div className="absolute top-5 right-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-[0.22,1,0.36,1]">
                      <ArrowUpRight className="w-5 h-5 text-[#7B2CFF]" strokeWidth={2.5} />
                    </div>

                    <div className="w-14 h-14 rounded-[1.25rem] bg-white border border-[#E7D8FF]/60 shadow-[0_4px_12px_-4px_rgba(13,16,38,0.05)] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#7B2CFF] group-hover:border-[#7B2CFF] group-hover:shadow-[0_8px_20px_-6px_rgba(123,44,255,0.3)] transition-all duration-500 ease-[0.22,1,0.36,1] relative z-10">
                      <Icon
                        size={24}
                        strokeWidth={1.5}
                        className="text-[#0D1026] group-hover:text-white transition-colors duration-500"
                      />
                    </div>

                    <span className="text-[15px] font-semibold tracking-tight text-[#0D1026] leading-snug px-2 relative z-10 group-hover:text-[#7B2CFF] transition-colors duration-300">
                      {cat.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* --- MODULE 2: HOW IT WORKS (INTERACTIVE WALKTHROUGH) --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-32"
        >
          <div className="text-center mb-16 relative z-10">
            <motion.h2 variants={itemUp} className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0D1026] mb-4">
              Platform Walkthrough
            </motion.h2>
            <motion.p variants={itemUp} className="text-[#0D1026]/60 max-w-2xl mx-auto font-medium text-lg">
              A streamlined, enterprise-grade process designed to take you from project brief to final delivery with zero friction.
            </motion.p>
          </div>

          <motion.div 
            variants={itemUp}
            className="max-w-4xl mx-auto bg-white/60 backdrop-blur-3xl rounded-[2rem] border border-white/80 shadow-[0_20px_60px_-15px_rgba(13,16,38,0.1)] relative overflow-hidden flex flex-col"
          >
            {/* Top Area: Visual Content Display */}
            <div className="relative h-[340px] sm:h-[420px] flex items-center justify-center p-8 bg-slate-50/50">
              
              {/* Subtle background glow behind the window */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 bg-[#7B2CFF]/5 rounded-full blur-3xl transition-all duration-700" />
              </div>
              
              {/* Left Arrow */}
              <button 
                onClick={prevStep} 
                disabled={currentStep === 0}
                className={`absolute left-4 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 z-20 ${
                  currentStep === 0 
                    ? 'opacity-0 translate-x-4 pointer-events-none' 
                    : 'bg-white text-[#0D1026] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:scale-110 hover:shadow-[0_8px_25px_-6px_rgba(0,0,0,0.15)] active:scale-95 opacity-100 translate-x-0'
                }`}
              >
                <ChevronLeft size={24} strokeWidth={2.5} />
              </button>

              {/* Right Arrow */}
              <button 
                onClick={nextStep} 
                disabled={currentStep === walkthroughSteps.length - 1}
                className={`absolute right-4 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 z-20 ${
                  currentStep === walkthroughSteps.length - 1 
                    ? 'opacity-0 -translate-x-4 pointer-events-none' 
                    : 'bg-white text-[#0D1026] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:scale-110 hover:shadow-[0_8px_25px_-6px_rgba(0,0,0,0.15)] active:scale-95 opacity-100 translate-x-0'
                }`}
              >
                <ChevronRight size={24} strokeWidth={2.5} />
              </button>

              {/* Dynamic Content (MNC Style OS Window) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 15, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.97 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full max-w-[360px] sm:max-w-[420px] relative z-10"
                >
                  <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white overflow-hidden flex flex-col">
                    
                    {/* Window Header */}
                    <div className="bg-slate-100/80 border-b border-slate-200 px-4 py-3 flex items-center">
                      <div className="flex gap-1.5 w-16">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                      </div>
                      <div className="flex-1 text-center pr-16">
                        <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase font-mono">
                          {walkthroughSteps[currentStep].windowTitle}
                        </span>
                      </div>
                    </div>

                    {/* Window Body */}
                    <div className="px-8 py-12 flex flex-col items-center text-center">
                      <div className={`w-20 h-20 rounded-[1.25rem] bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 shadow-sm ${walkthroughSteps[currentStep].iconColor}`}>
                        {React.createElement(walkthroughSteps[currentStep].icon, { size: 36, strokeWidth: 1.5 })}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#0D1026] tracking-tight">
                        {walkthroughSteps[currentStep].title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Area: Dark Footer (Like the screenshots) */}
            <div className="bg-[#0D1026] px-6 py-8 flex flex-col items-center justify-center min-h-[140px] relative z-20 border-t border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center text-center w-full"
                >
                  {/* Yellow step badge */}
                  <div className="bg-[#FFD000] text-[#0D1026] font-bold px-4 py-1 rounded-md text-xs sm:text-sm mb-4 shadow-sm">
                    {walkthroughSteps[currentStep].badge}
                  </div>
                  <p className="text-white/90 text-sm sm:text-base font-medium tracking-wide max-w-lg">
                    {walkthroughSteps[currentStep].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Progress Dots */}
              <div className="absolute bottom-4 flex gap-2">
                {walkthroughSteps.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentStep ? 'bg-[#FFD000] w-4' : 'bg-white/20'
                    }`} 
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- MODULE 3: FEATURES --- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="mb-16 max-w-3xl">
            <Badge>Platform Capabilities</Badge>
            <motion.h2 variants={itemUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0D1026] mb-4">
              Everything you need to scale production.
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {[
              {
                icon: SearchCheck,
                title: "Algorithmic Matching",
                desc: "Our system pairs you with professionals based on style, budget, and historical performance data."
              },
              {
                icon: MapPinned,
                title: "Real-time Tracking",
                desc: "Maintain complete visibility over your project's status with live milestone updates."
              },
              {
                icon: ShieldCheck,
                title: "Vetted Professionals",
                desc: "Every creator undergoes a rigorous portfolio review and identity verification process."
              },
              {
                icon: CreditCard,
                title: "Escrow Payments",
                desc: "Your capital is protected. Funds are only distributed once you approve the final deliverables."
              },
              {
                icon: CheckCircle,
                title: "Streamlined Booking",
                desc: "Bypass lengthy negotiations. Book pre-packaged services or custom quotes instantly."
              },
              {
                icon: MessageSquareText,
                title: "Dedicated Management",
                desc: "Enterprise clients receive 24/7 priority support and a dedicated success manager."
              }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div key={i} variants={itemUp} className="h-full">
                  <div className="h-full group flex flex-col sm:flex-row items-start gap-5 p-5 rounded-3xl bg-white/20 backdrop-blur-sm border border-white/40 transition-all duration-500 hover:bg-white/60 hover:shadow-[0_8px_30px_-12px_rgba(123,44,255,0.15)] hover:border-white">
                    <div className="w-12 h-12 rounded-[14px] bg-white border border-white/60 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#7B2CFF] group-hover:border-[#7B2CFF] transition-all duration-500 ease-out">
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                        className="text-[#7B2CFF] group-hover:text-white transition-colors duration-500"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-2 text-[#0D1026] group-hover:text-[#7B2CFF] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-[#0D1026]/70 text-sm leading-relaxed font-medium">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}