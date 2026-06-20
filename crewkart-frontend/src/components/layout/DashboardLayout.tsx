"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function DashboardLayout({ title, children }: { title: string; children: React.ReactNode }) {
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const basePath = user?.role ? `/${user.role}` : "/client";
  const handleLogout = () => { logout(); router.push("/login"); };

  const navLinks = [
    { href: `${basePath}/dashboard`, label: "Dashboard", icon: "📊" },
    { href: "/marketplace", label: "Marketplace", icon: "🛒" },
    { href: "/services", label: "Book a Crew", icon: "➕" },
  ];

  return (
    <main className="flex h-screen bg-[#0D1026] overflow-hidden">
            <aside className="hidden w-72 flex-col bg-gradient-to-b from-[#0D1026] via-[#080b18] to-black p-6 text-white md:flex h-full overflow-y-auto border-r border-white/5">
        {/* Changed this from text to an image */}
        <div className="mb-8">
          <img src="/logo.svg" alt="CrewKart Logo" className="h-9 w-auto" />
          <p className="mt-1 text-xs font-bold tracking-widest text-white/30 uppercase">Crew Management</p>
        </div>
        {/* ... rest of sidebar ... */}
          <div className="rounded-2xl bg-white/5 backdrop-blur-sm p-5 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#7B2CFF] flex items-center justify-center text-white font-black text-lg shrink-0">{user?.name?.charAt(0) || "U"}</div>
            <div className="overflow-hidden">
              <h3 className="text-sm font-bold truncate text-white">{user?.name || "User"}</h3>
              <p className="text-xs text-[#7B2CFF] font-semibold uppercase">{user?.role}</p>
            </div>
          </div>
        </div>
        <nav className="mt-8 flex flex-col gap-2 flex-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-white/60 transition-all hover:bg-white/5 hover:text-white">
              <span className="text-lg">{link.icon}</span>{link.label}
            </Link>
          ))}
        </nav>
        <button onClick={handleLogout} className="mt-auto flex items-center justify-center gap-2 rounded-xl bg-red-500/10 border border-red-500/20 py-3.5 text-sm font-bold text-red-400 transition-all hover:bg-red-500 hover:text-white">
          <span>↪</span> Log Out
        </button>
      </aside>

      <section className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="shrink-0 p-6 md:p-8 pb-0 md:pb-0">
          <div className="mb-6 flex items-center justify-between md:hidden bg-white/5 rounded-2xl p-4 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#7B2CFF] text-white flex items-center justify-center font-bold text-sm">{user?.name?.charAt(0)}</div>
              <span className="text-sm font-bold text-white capitalize">{user?.role}</span>
            </div>
            <button onClick={handleLogout} className="text-xs font-bold text-red-400 bg-red-500/10 px-3 py-1.5 rounded-lg">Logout</button>
          </div>
          <div className="flex items-end justify-between">
            {title && (
  <div>
    <h2 className="text-3xl font-black text-white tracking-tight">
      {title}
    </h2>
    <div className="mt-2 h-1 w-12 bg-[#7B2CFF] rounded-full"></div>
  </div>
)}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-6 pt-6 md:p-8 md:pt-6">{children}</div>
      </section>
    </main>
  );
}