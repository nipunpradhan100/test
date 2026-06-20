"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, logout } = useAuthStore();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/");
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#how-it-works", label: "How it works" },
    { href: "/marketplace", label: "Find talents" },
    { href: "/services", label: "For creatives" },
    { href: "#", label: "About us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#020617] backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          {logoError ? (
            <span className="text-2xl font-black text-white tracking-tight">
              Crew<span className="text-[#7B2CFF]">Kart</span>
            </span>
          ) : (
            <img
              src="/logo.svg"
              alt="CrewKart"
              className="h-10 w-auto"
              onError={() => setLogoError(true)}
            />
          )}
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-10 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="
        relative
        py-2
        text-[15px]
        font-semibold
        text-white/90
        hover:text-white
        transition-all
        duration-300
        after:absolute
        after:left-0
        after:bottom-0
        after:h-[2px]
        after:w-0
        after:bg-[#7B2CFF]
        after:transition-all
        after:duration-300
        after:content-['']
        hover:after:w-full
      "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          {user ? (
            <div className="flex items-center gap-3">
              <Link href="/client/dashboard" className="rounded-lg bg-[#7B2CFF] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#6a1ff0]">
                Dashboard
              </Link>
              <button onClick={handleLogout} className="text-sm text-white/60 hover:text-white transition-colors">
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link href="/login" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Login
              </Link>
              <Link href="/signup" className="rounded-lg bg-[#7B2CFF] px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#6a1ff0] active:scale-95 shadow-lg shadow-[#7B2CFF]/20">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button (Using safe SVG) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0D1026] border-t border-white/10 px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-white/70 hover:text-white py-2 transition-colors">
              {link.label}
            </Link>
          ))}
          <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
            {user ? (
              <Link href="/client/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="text-center bg-[#7B2CFF] text-white font-bold py-3 rounded-lg">Dashboard</Link>
            ) : (
              <>
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-center border border-white/20 text-white py-3 rounded-lg hover:bg-white/10 transition">Login</Link>
                <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)} className="text-center bg-[#7B2CFF] text-white font-bold py-3 rounded-lg hover:bg-[#6a1ff0] transition">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}