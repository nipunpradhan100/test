"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { toast } from "sonner"; // Using your installed toast library!
import api from "@/services/api";

export default function BookingForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    service: "",
    packageName: "",
    city: "",
    location: "",
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/bookings/create", formData);
      toast.success("Booking successful! Redirecting to your dashboard...");
      setTimeout(() => router.push("/client/dashboard"), 1500);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Reusable classes for inputs to keep code clean
  const inputClasses = "w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-3.5 text-[var(--foreground)] outline-none transition-all duration-200 focus:ring-2 focus:ring-[var(--secondary)] focus:border-[var(--secondary)]";

  return (
    <section className="bg-[var(--card)] border-t border-[var(--border)] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)]">Complete Your Booking</h2>
          <p className="mt-3 text-gray-500">Fill in the details below to secure your slot.</p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit} 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5"
        >
          
          {/* Service */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Service Type</label>
            <select name="service" value={formData.service} onChange={handleChange} required className={inputClasses}>
              <option value="" disabled>Select Service</option>
              <option value="Photography">Photography</option>
              <option value="Videography">Videography</option>
              <option value="DJ">DJ</option>
            </select>
          </div>

          {/* Package */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Package</label>
            <select name="packageName" value={formData.packageName} onChange={handleChange} required className={inputClasses}>
              <option value="" disabled>Select Package</option>
              <option value="Basic">Basic</option>
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
            </select>
          </div>

          {/* City */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">City</label>
            <select name="city" value={formData.city} onChange={handleChange} required className={inputClasses}>
              <option value="" disabled>Select City</option>
              <option>Delhi</option>
              <option>Jaipur</option>
              <option>Indore</option>
              <option>Lucknow</option>
              <option>Ahmedabad</option>
            </select>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Exact Location</label>
            <input type="text" name="location" placeholder="e.g., Bandra West" value={formData.location} onChange={handleChange} required className={inputClasses} />
          </div>

          {/* Date */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Preferred Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required className={inputClasses} />
          </div>

          {/* Time */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Preferred Time</label>
            <input type="time" name="time" value={formData.time} onChange={handleChange} required className={inputClasses} />
          </div>

          {/* Estimated Price Box */}
          <div className="md:col-span-2 mt-4 rounded-2xl bg-[var(--background)] border border-[var(--border)] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm text-gray-500 font-medium">Estimated Total</p>
              <h3 className="mt-1 text-4xl font-extrabold text-[var(--primary)]">₹3,000</h3>
            </div>
            <p className="text-xs text-gray-400 text-right">*Final price may vary based on exact requirements</p>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button 
              disabled={loading} 
              className="w-full rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] py-4 font-bold text-base transition-all duration-200 hover:opacity-90 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Securing your slot...
                </span>
              ) : "Confirm Booking"}
            </button>
          </div>

        </motion.form>
      </div>
    </section>
  );
}