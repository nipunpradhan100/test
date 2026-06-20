"use client";

import {
  House,
  Briefcase,
  CalendarDays,
  User,
} from "lucide-react";

export default function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white md:hidden">
      <div className="flex items-center justify-around py-3">
        
        <button className="flex flex-col items-center text-[#004643]">
          <House size={22} />
          <span className="text-xs">Home</span>
        </button>

        <button className="flex flex-col items-center text-gray-500">
          <Briefcase size={22} />
          <span className="text-xs">Services</span>
        </button>

        <button className="flex flex-col items-center text-gray-500">
          <CalendarDays size={22} />
          <span className="text-xs">Bookings</span>
        </button>

        <button className="flex flex-col items-center text-gray-500">
          <User size={22} />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
}