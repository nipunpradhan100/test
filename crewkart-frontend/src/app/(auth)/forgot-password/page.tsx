"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { toast } from "sonner";
import api from "@/services/api";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/auth/forgot-password", { email });
      toast.success("Reset link sent to your email!");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to send reset link.");
    } finally {
      setLoading(false);
    }
  };

  // Dark mode glassmorphism input classes
  const inputClasses = "w-full mt-1.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm font-medium text-white outline-none transition-all duration-200 focus:ring-2 focus:ring-[#7B2CFF] focus:border-[#7B2CFF] placeholder:text-white/30";

  return (
    <main className="min-h-screen bg-[#050A22] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7B2CFF] rounded-full blur-[150px] opacity-10"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        
        {/* Header / Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-black text-white">
              Crew<span className="text-[#7B2CFF]">Kart</span>
            </h1>
          </Link>
          <p className="text-sm text-white/50 font-medium mt-2">Reset your password</p>
        </div>

        {/* Glassmorphism Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-8">
          <h2 className="text-xl font-extrabold text-white mb-2">Forgot Password?</h2>
          <p className="text-sm text-white/50 mb-6">No worries, we'll send you reset instructions.</p>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider">Email Address</label>
              <input 
                type="email" 
                required 
                placeholder="you@example.com"
                className={inputClasses}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button 
              disabled={loading} 
              className="w-full rounded-xl bg-gradient-to-r from-[#7B2CFF] to-[#A855FF] text-white py-4 text-sm font-extrabold shadow-lg shadow-[#7B2CFF]/30 disabled:opacity-50 transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending Link...
                </span>
              ) : "Send Reset Link"}
            </button>
          </form>
        </div>

        {/* Footer Link */}
        <p className="text-center text-sm text-white/50 mt-6 font-medium">
          Remember your password?{" "}
          <Link href="/login" className="text-[#A855FF] font-extrabold hover:underline">
            Back to Sign In
          </Link>
        </p>
      </motion.div>
    </main>
  );
}