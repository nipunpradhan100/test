"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import { useAuthStore } from "@/store/authStore";

// ---------- DUMMY DATA (replace with API) ----------
const DUMMY_STATS = {
  total: 12,
  active: 4,
  completed: 7,
  pendingPayments: 110000,
  totalGrowth: 20,
  activeGrowth: 33,
  completedGrowth: 55,
  paymentGrowth: 33,
};

const DUMMY_BOOKINGS = [
  {
    id: "1",
    title: "Promo shoot - Marvel Studios",
    budget: 25000,
    delivery: "30 June 2026",
    steps: [
      { label: "Brief Submitted", status: "completed", time: "17 June, 11:30 AM" },
      { label: "Crew Matched", status: "completed", time: "17 June, 11:30 AM" },
      { label: "Awarding Response", status: "in-progress", time: "In Progress" },
      { label: "Crew Confirmed", status: "pending", time: "In Progress" },
      { label: "Project Started", status: "pending", time: "In Progress" },
    ],
  },
  {
    id: "2",
    title: "Brand Film - FrameCraft Studio",
    budget: 42000,
    delivery: "15 July 2026",
    steps: [
      { label: "Brief Submitted", status: "completed", time: "10 June, 09:00 AM" },
      { label: "Crew Matched", status: "completed", time: "12 June, 02:30 PM" },
      { label: "Awarding Response", status: "completed", time: "14 June, 11:00 AM" },
      { label: "Crew Confirmed", status: "in-progress", time: "In Progress" },
      { label: "Project Started", status: "pending", time: "In Progress" },
    ],
  },
];

const DUMMY_MEETINGS = [
  { date: "JUN 30", title: "Promo Shoot - Marvel Studios" },
  { date: "JUL 01", title: "Brand Film - FrameCraft Studio" },
  { date: "JUL 01", title: "Promo shoot - Marvel Studios" },
];

export default function ClientDashboard() {
  const { user } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(DUMMY_STATS);
  const [bookings, setBookings] = useState(DUMMY_BOOKINGS);
  const [meetings, setMeetings] = useState(DUMMY_MEETINGS);

  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);

  const featured = bookings[0];
  const otherBookings = bookings.slice(1);

  return (
    <ProtectedRoute>
      <DashboardLayout title="Dashboard">
        {/* Force a dark background on the content area */}
        <div className="bg-gray-900 min-h-screen p-6 space-y-6 text-white">
          {/* ===== WELCOME BANNER ===== */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-5 shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-purple-200 uppercase tracking-wider">Welcome back,</p>
                <h2 className="text-2xl font-black mt-1">{user?.name || "Aman"}</h2>
                <p className="text-sm text-purple-200 mt-0.5">Let's bring your creative vision to life.</p>
              </div>
              <div className="bg-white/20 text-xs font-extrabold px-4 py-2 rounded-xl">
                {stats.active} Active
              </div>
            </div>
          </div>

          {/* ===== STATS CARDS (Solid colours) ===== */}
          {!loading && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Total Requests", value: stats.total, growth: stats.totalGrowth },
                { label: "Active Requests", value: stats.active, growth: stats.activeGrowth },
                { label: "Completed", value: stats.completed, growth: stats.completedGrowth },
                { label: "Pending Payments", value: `₹${stats.pendingPayments.toLocaleString()}`, growth: stats.paymentGrowth },
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-800 rounded-2xl p-5 border border-gray-700">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.label}</p>
                  <p className="text-2xl font-black text-white mt-1">{item.value}</p>
                  <p className="text-xs font-bold text-green-400 mt-1">+{item.growth}% this month</p>
                </div>
              ))}
            </div>
          )}

          {/* ===== YOUR BOOKING PROGRESS ===== */}
          {featured && (
            <div className="bg-gray-800 rounded-2xl border border-gray-700 p-5">
              <h3 className="text-lg font-black text-white mb-4">Your Booking Progress</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-black text-white">{featured.title}</h4>
                  <div className="flex flex-wrap gap-4 mt-1 text-sm text-gray-400">
                    <span>Budget: <strong className="text-white">₹{featured.budget.toLocaleString()}</strong></span>
                    <span>Delivery: <strong className="text-white">{featured.delivery}</strong></span>
                  </div>
                </div>

                {/* Vertical steps */}
                <div className="space-y-2 mt-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Request Sent</p>
                  {featured.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm">
                      <div className="mt-1 flex-shrink-0">
                        {step.status === "completed" && (
                          <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white">✓</div>
                        )}
                        {step.status === "in-progress" && (
                          <div className="w-4 h-4 rounded-full bg-purple-500 animate-pulse" />
                        )}
                        {step.status === "pending" && (
                          <div className="w-4 h-4 rounded-full border-2 border-gray-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className={`font-bold ${step.status === "pending" ? "text-gray-500" : "text-white"}`}>
                            {step.label}
                          </span>
                          <span className={`text-xs ${
                            step.status === "completed" ? "text-green-400" :
                            step.status === "in-progress" ? "text-purple-400" :
                            "text-gray-500"
                          }`}>
                            {step.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ===== OTHER BOOKINGS ===== */}
          {otherBookings.length > 0 && (
            <div className="space-y-4">
              {otherBookings.map((booking) => (
                <div key={booking.id} className="bg-gray-800 rounded-2xl border border-gray-700 p-5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-black text-white">{booking.title}</h4>
                      <div className="flex flex-wrap gap-4 mt-1 text-sm text-gray-400">
                        <span>Budget: <strong className="text-white">₹{booking.budget.toLocaleString()}</strong></span>
                        <span>Delivery: <strong className="text-white">{booking.delivery}</strong></span>
                      </div>
                    </div>
                    <div className="w-full md:w-64 shrink-0 bg-gray-700 rounded-xl p-3 border border-gray-600">
                      <div className="space-y-1">
                        {booking.steps.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs">
                            <span className={`w-2 h-2 rounded-full ${
                              step.status === "completed" ? "bg-green-400" :
                              step.status === "in-progress" ? "bg-purple-400" :
                              "bg-gray-500"
                            }`} />
                            <span className={step.status === "pending" ? "text-gray-400" : "text-white"}>
                              {step.label}
                            </span>
                            {step.status === "completed" && <span className="ml-auto text-green-400">✓</span>}
                            {step.status === "in-progress" && <span className="ml-auto text-purple-400">⋯</span>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ===== UPCOMING MEETINGS ===== */}
          <div className="bg-gray-800 rounded-2xl border border-gray-700 p-5">
            <h3 className="text-lg font-black text-white mb-4">Upcoming Meetings</h3>
            {meetings.length === 0 ? (
              <p className="text-sm text-gray-400">No upcoming meetings</p>
            ) : (
              <div className="space-y-3">
                {meetings.map((meeting, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-gray-700 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-600 text-white font-black text-xs px-3 py-1.5 rounded-lg">
                        {meeting.date}
                      </div>
                      <span className="font-bold text-white">{meeting.title}</span>
                    </div>
                    <button className="text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white px-4 py-1.5 rounded-lg transition-colors">
                      Chat
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ===== NEED HELP? ===== */}
          <div className="bg-gradient-to-r from-purple-900/30 to-transparent rounded-2xl border border-purple-700 p-5 text-center">
            <p className="text-gray-300 text-sm">Need Help?</p>
            <p className="text-gray-400 text-xs">Our support team is here for you.</p>
            <button className="mt-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold px-6 py-2 rounded-full transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}