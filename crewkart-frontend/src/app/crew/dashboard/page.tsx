"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import api from "@/services/api";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer } from "@/components/animations/MotionWrapper";

export default function CrewDashboard() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [available, setAvailable] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchBookings(); }, []);

  const fetchBookings = async () => {
    try { const response = await api.get("/crew/my-bookings"); setBookings(response.data); } 
    catch (error) { console.log(error); } 
    finally { setLoading(false); }
  };

  const updateStatus = async (bookingId: string, status: string) => {
    try { await api.put("/crew/status", { bookingId, status }); fetchBookings(); } 
    catch (error: any) { alert(error.response?.data?.message || "Failed to update"); }
  };

  const toggleAvailability = async () => {
    try { const response = await api.put("/crew/availability"); setAvailable(response.data.available); } 
    catch (error) { console.log(error); }
  };

  return (
    <ProtectedRoute>
      <DashboardLayout title="Crew Dashboard">
        <FadeIn>
          <div className={`flex items-center justify-between rounded-2xl p-4 mb-6 shadow-lg transition-all duration-500 ${available ? 'bg-gradient-to-r from-[#7B2CFF] to-[#5a17d4] text-white shadow-[#7B2CFF]/20' : 'bg-white/5 text-white/50 border border-white/10'}`}>
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 rounded-full bg-white ${available ? 'animate-pulse' : ''}`} />
              <span className="text-sm font-black tracking-wide">{available ? 'ONLINE - RECEIVING REQUESTS' : 'OFFLINE'}</span>
            </div>
            <button onClick={toggleAvailability} className={`relative w-14 h-7 rounded-full transition-colors ${available ? 'bg-white/30' : 'bg-white/20'}`}>
              <span className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${available ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
          </div>
        </FadeIn>

        {loading ? (
          <div className="space-y-4"><div className="h-28 bg-white/5 animate-pulse rounded-2xl" /></div>
        ) : bookings.length === 0 ? (
          <FadeIn delay={0.2}>
            <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10 h-full flex flex-col items-center justify-center">
              <p className="text-5xl mb-4">🛋️</p><p className="font-extrabold text-white/60">All clear!</p><p className="text-sm text-white/40 mt-1">No pending jobs right now</p>
            </div>
          </FadeIn>
        ) : (
          <StaggerContainer className="space-y-4">
            {bookings.map((booking) => (
              <FadeIn key={booking._id}>
                <div className={`bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden transition-all hover:bg-white/10 border border-white/10 ${booking.status === 'assigned' ? 'ring-2 ring-[#7B2CFF] ring-offset-2 ring-offset-[#0D1026]' : ''}`}>
                  {booking.status === 'assigned' && (
                    <motion.div layout className="bg-[#7B2CFF] text-white px-4 py-2 text-[11px] font-black tracking-widest text-center flex items-center justify-center gap-2">
                      <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }} className="w-2 h-2 bg-white rounded-full inline-block" /> NEW REQUEST - TAP TO RESPOND
                    </motion.div>
                  )}
                  <div className="p-5 flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex-1 min-w-[200px]">
                      <h3 className="text-lg font-black text-white">{booking.service}</h3>
                      <p className="text-sm text-white/50 mt-1 font-medium">📍 {booking.location} • {booking.city}</p>
                      <p className="text-xs text-white/30 mt-1 font-bold">📅 {booking.date} at {booking.time}</p>
                    </div>
                    <motion.div layout className="flex items-center gap-3">
                      {booking.status === "assigned" ? (
                        <>
                          <button onClick={() => updateStatus(booking._id, "rejected")} className="px-5 py-2.5 rounded-xl bg-red-500/10 text-red-400 text-xs font-extrabold border border-red-500/20 hover:bg-red-500/20 transition">DECLINE</button>
                          <button onClick={() => updateStatus(booking._id, "accepted")} className="px-5 py-2.5 rounded-xl bg-[#7B2CFF] text-white text-xs font-extrabold shadow-lg shadow-[#7B2CFF]/30 hover:bg-[#6a1ff0] transition">ACCEPT</button>
                        </>
                      ) : (
                        <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-xl border border-emerald-500/20">
                          <span className="text-sm">✅</span><span className="text-xs font-extrabold uppercase tracking-wider">Accepted</span>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </StaggerContainer>
        )}
      </DashboardLayout>
    </ProtectedRoute>
  );
}