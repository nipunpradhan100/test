"use client";

import React, { useState } from "react";
import Link from "next/link";

// --- ICONS ---
const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.365 14.71c.017 3.033 2.656 4.047 2.686 4.06-.022.072-.42 1.442-1.385 2.853-.836 1.22-1.706 2.435-3.053 2.457-1.32.022-1.75-.78-3.262-.78-1.512 0-1.983.758-3.282.802-1.343.044-2.327-1.306-3.167-2.52C3.178 18.914 1.763 14.153 2.618 10.87c.423-1.626 1.554-2.868 2.91-3.606 1.294-.704 2.766-.677 3.843-.677 1.144 0 2.215.424 2.89.845.836-.61 2.223-1.143 3.65-1.026 1.543.125 2.873.744 3.738 1.838-.088.055-2.224 1.296-2.235 3.864-.012 2.568 2.155 3.393 2.247 3.433l-.295.17zM14.992 4.41c.683-.827 1.144-1.977 1.018-3.127-1.002.04-2.202.667-2.908 1.49-.63.732-1.18 1.905-1.035 3.033 1.118.087 2.245-.568 2.925-1.396z" />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const UsersIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ZapIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

// --- COMPONENTS ---

function Feature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/5 text-gray-400">
        {icon}
      </div>
      <div className="pt-1">
        <h3 className="font-semibold text-white text-[15px] mb-0.5">{title}</h3>
        <p className="text-[13px] text-gray-400 leading-[1.4] max-w-[240px]">{desc}</p>
      </div>
    </div>
  );
}

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "client"
  });
  const [loading, setLoading] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Account Created!");
    }, 1500);
  };

  const inputClasses = "w-full h-[48px] rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-[14px] font-medium text-gray-900 outline-none transition-all duration-200 focus:border-[#8B3DFF] focus:ring-1 focus:ring-[#8B3DFF] placeholder:text-gray-400";

  return (
    <main className="min-h-screen w-full flex font-sans overflow-hidden bg-white max-w-[1920px] mx-auto">

      {/* Left Panel - Sign Up Form */}
      {/* Added h-screen and overflow-y-auto to prevent whole page scrolling */}
      <div className="w-full lg:w-1/2 flex flex-col relative h-screen overflow-y-auto bg-white z-10 border-r border-gray-100">

        <header className="sticky top-0 left-0 w-full flex items-center justify-between px-6 py-6 lg:px-12 z-20 bg-white/95 backdrop-blur-sm">
          <a href="#" className="flex items-center">
            <h1 className="text-[22px] font-bold text-gray-900 tracking-tight">
              Crew<span className="text-[#8B3DFF]">Kart</span>
            </h1>
          </a>
          <p className="text-[13px] font-medium text-gray-500 hidden sm:block">
            Already have an account? <a href="/login" className="text-[#8B3DFF] font-semibold hover:underline">Sign In</a>
          </p>
        </header>

        <div className="flex-1 flex flex-col justify-start px-6 sm:px-8 lg:px-12 max-w-[600px] mx-auto w-full pt-4 pb-10">
          <div className="mb-6 text-center">
            <h2 className="text-[36px] font-bold text-gray-900 mb-2 tracking-tight leading-[1.1]">
              Create Your <span className="text-[#8B3DFF]">Account!</span>
            </h2>
            <p className="text-gray-500 text-[15px] font-medium">
              Let's get you started with CrewKart.
            </p>
          </div>

          <form onSubmit={handleSignup}>
            {/* Row 1: Names */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[13px] font-semibold text-gray-600 mb-1.5">First Name</label>
                <input type="text" placeholder="John" className={inputClasses} value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-gray-600 mb-1.5">Last Name</label>
                <input type="text" placeholder="Doe" className={inputClasses} value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
              </div>
            </div>

            {/* Row 2: Contact */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[13px] font-semibold text-gray-600 mb-1.5">Email address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400"><MailIcon /></div>
                  <input type="email" placeholder="youremail@example.com" className={inputClasses} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-gray-600 mb-1.5">Phone number</label>
                <input type="text" placeholder="+91" className={inputClasses} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
            </div>

            {/* Row 3: Passwords */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-[13px] font-semibold text-gray-600 mb-1.5">Password</label>
                <div className="relative">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"><LockIcon /></div>
                  <input type="password" placeholder="Enter password" className={inputClasses} value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"><EyeIcon /></div>
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-gray-600 mb-1.5">Confirm Password</label>
                <div className="relative">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"><LockIcon /></div>
                  <input type="password" placeholder="Confirm password" className={inputClasses} value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"><EyeIcon /></div>
                </div>
              </div>
            </div>

            {/* Role Selection */}
            <div className="mb-6">
              <label className="block text-[13px] font-semibold text-gray-600 mb-3">I am a</label>
              <div className="flex gap-4">
                <div className={`w-[100px] h-[70px] rounded-xl border-2 flex flex-col items-center justify-center cursor-pointer transition-colors ${formData.role === 'client' ? 'border-[#8B3DFF] bg-[#F5F0FF]' : 'border-gray-200 hover:border-gray-300'}`} onClick={() => setFormData({ ...formData, role: "client" })}>
                  <div className="text-xl">👤</div>
                  <div className="text-xs font-bold mt-1">Client</div>
                  <div className="text-[9px] text-gray-500">I hire talent</div>
                </div>
                <div className={`w-[100px] h-[70px] rounded-xl border-2 flex flex-col items-center justify-center cursor-pointer transition-colors ${formData.role === 'crew' ? 'border-[#8B3DFF] bg-[#F5F0FF]' : 'border-gray-200 hover:border-gray-300'}`} onClick={() => setFormData({ ...formData, role: "crew" })}>
                  <div className="text-xl">🎥</div>
                  <div className="text-xs font-bold mt-1">Crew</div>
                  <div className="text-[9px] text-gray-500">I work on projects</div>
                </div>
              </div>
            </div>

            {/* Terms & Button */}
            <div className="flex items-start gap-2 mb-5">
              <input type="checkbox" className="mt-1 accent-[#8B3DFF] w-4 h-4" />
              <p className="text-[13px] text-gray-600">I agree to the <span className="text-[#8B3DFF]">Terms of Service</span> and <span className="text-[#8B3DFF]">Privacy Policy</span>.</p>
            </div>

            <button disabled={loading} className="w-full h-[54px] rounded-xl bg-gradient-to-r from-[#7B2CFF] to-[#A855FF] text-white font-bold text-[18px] hover:opacity-90 transition-opacity disabled:opacity-70">
              {loading ? "Creating..." : "Create an account"}
            </button>

            <p className="text-center text-sm text-gray-500 mt-6 font-medium lg:hidden">
              Already have an account? <a href="/login" className="text-[#8B3DFF] font-bold hover:underline">Sign In</a>
            </p>
          </form>
        </div>
      </div>

      {/* Right Panel - KEPT SAME AS PROVIDED LOGIN CODE */}
      <div className="hidden lg:flex w-1/2 bg-[#050510] relative text-white flex-col justify-center pl-0 xl:pl-8 h-screen overflow-hidden">

        {/* Glow */}
        <div className="absolute top-1/2 right-[-10%] translate-x-[20%] -translate-y-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#6116FF] opacity-[0.35] rounded-full blur-[120px] pointer-events-none"></div>

        {/* Text Container */}
        <div className="absolute left-[4vw] top-[12vh] lg:top-[14vh] z-20 w-[35%] max-w-[340px] min-w-[260px]">
          <h2 className="font-bold leading-[1.1] tracking-[-0.03em] text-[clamp(28px,3vw,42px)] mb-[clamp(12px,1.5vh,20px)]">
            The Smart Way to<br />
            Book <span className="text-[#8B3DFF]">Creative Talent.</span>
          </h2>

          <p className="text-[clamp(12px,1vw,14px)] text-gray-400/90 mb-6 max-w-[100%] leading-relaxed">
            Find, connect and collaborate with verified creative professionals for your projects, events and brands.
          </p>

          <div className="space-y-3 lg:space-y-4">
            <Feature icon={<UsersIcon />} title="Verified Professionals" desc="All creators are verified and quality-checked." />
            <Feature icon={<ZapIcon />} title="Fast & Easy Booking" desc="Book the right talent in just a few clicks." />
            <Feature
              icon={<ShieldIcon />}
              title="Secure Payments"
              desc={
                <>
                  100% secure transactions
                  <br />
                  and money-back guarantee.
                </>
              }
            />
          </div>
        </div>

        {/* Collage Container */}
        <div className="absolute right-[3vw] top-1/2 -translate-y-1/2 w-[240px] lg:w-[280px] xl:w-[400px] flex flex-col items-end gap-1.5 z-10 pointer-events-none" style={{ transform: "skewX(-14deg)" }}>

          {/* Top Row */}
          <div className="w-[60%] h-[80px] lg:h-[110px] rounded-lg overflow-hidden relative bg-[#050510]">
            <img src="/creators/videographer.jpg" alt="Videographer" className="absolute inset-0 w-full h-full object-cover origin-center opacity-90" style={{ transform: "skewX(14deg) scale(1.35)" }} />
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
          </div>

          {/* Middle Row */}
          <div className="w-[70%] h-[100px] lg:h-[140px] rounded-lg overflow-hidden relative bg-[#050510]" style={{ transform: "translateX(30px)" }}>
            <img src="/creators/designer.jpg" alt="Designer" className="absolute inset-0 w-full h-full object-cover origin-center opacity-90" style={{ transform: "skewX(14deg) scale(1.35)" }} />
          </div>

          {/* Bottom Row */}
          <div className="w-full flex gap-1.5 h-[80px] lg:h-[110px]" style={{ transform: "translateX(60px)" }}>
            <div className="w-[42%] h-full rounded-lg overflow-hidden relative bg-[#050510]">
              <img src="/creators/editor.jpg" alt="Editor" className="absolute inset-0 w-full h-full object-cover origin-center opacity-90" style={{ transform: "skewX(14deg) scale(1.35)" }} />
              <div className="absolute inset-0 bg-[#050510]/20 mix-blend-overlay"></div>
            </div>
            <div className="flex-1 h-full rounded-lg overflow-hidden relative bg-[#050510]">
              <img src="/creators/photographer.jpg" alt="Photographer" className="absolute inset-0 w-full h-full object-cover origin-center opacity-90" style={{ transform: "skewX(14deg) scale(1.35)" }} />
              <div className="absolute inset-0 bg-[#050510]/20 mix-blend-overlay"></div>
            </div>
          </div>

        </div>

        {/* Floating Bottom Widget */}
        <div className="absolute bottom-[5vh] left-[50%] -translate-x-1/2 bg-[#121320]/80 backdrop-blur-md border border-white/10 rounded-full pl-2 pr-6 py-2 flex items-center gap-1 z-30 shadow-2xl max-w-[90%]">
          <div className="flex -space-x-2">
            <img src="https://i.pravatar.cc/100?img=33" alt="User" className="w-8 h-8 rounded-full border-[2px] border-[#121320] object-cover" />
            <img src="https://i.pravatar.cc/100?img=47" alt="User" className="w-8 h-8 rounded-full border-[2px] border-[#121320] object-cover" />
            <img src="https://i.pravatar.cc/100?img=12" alt="User" className="w-8 h-8 rounded-full border-[2px] border-[#121320] object-cover" />
            <img src="https://i.pravatar.cc/100?img=44" alt="User" className="w-8 h-8 rounded-full border-[2px] border-[#121320] object-cover" />
            <div className="w-8 h-8 rounded-full border-[2px] border-[#121320] bg-[#8B3DFF] text-white flex items-center justify-center text-[9px] font-bold z-10 relative">
              10K+
            </div>
          </div>
          <p className="text-[10px] sm:text-[11px] text-gray-300 font-medium leading-[1.3]">
            Join thousands of clients and creators<br />building amazing things together.
          </p>
        </div>

      </div>

    </main>
  );
}