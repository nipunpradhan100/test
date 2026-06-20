"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// Mock Reviews

export default function TestimonialsAndCtaSection() {
  return (
    <>
      {/* --- PART 1: TESTIMONIALS --- */}
      <section className="bg-[#F2EDFF] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-[#0D1026]">
              What Our Clients Say
            </h2>

            <button className="text-[#7B2CFF] font-semibold hover:underline">
              View all reviews
            </button>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 h-fit">

                <div className="flex items-start gap-5">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
                    alt="Client"
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <p className="text-gray-700 leading-relaxed">
                    CrewKart helped me find a fantastic videographer for my content
                    shoot. The process was smooth and the results were beyond my
                    expectations.
                  </p>
                </div>

                <div className="border-t border-gray-200 mt-8 pt-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-[#0D1026]">
                      Priya T.
                    </h4>

                    <p className="text-gray-500 text-sm">
                      Content Creator
                    </p>
                  </div>

                  <div className="text-yellow-400 text-3xl">
                    ★★★★★
                  </div>
                </div>

              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="relative bg-white rounded-3xl shadow-sm border border-gray-100 h-[360px] overflow-hidden">

                <div className="p-10 max-w-[55%]">

                  <h3 className="text-2xl xl:text-3xl font-bold leading-tight">
                    Work On The Go
                    <br />
                    With Our App
                  </h3>

                  <p className="text-gray-500 mb-8">
                    Hire, collaborate and manage your projects from anywhere.
                  </p>

                  <div className="flex gap-3 mt-8 flex-wrap">
                    <img
                      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                      alt="App Store"
                      className="h-10"
                    />

                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Google Play"
                      className="h-10"
                    />
                  </div>

                </div>

                <div className="h-full">
<img
//MOBILE PHONO LOGO ONTHE PLAYSTORE ICON 
  src="/app-mockup.png"
  alt="CrewKart App"
  className="absolute right-0 bottom-0 h-[280px] object-contain"
/>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* --- PART 2: APP DOWNLOAD / FINAL CTA --- */}
      <section className="bg-[#0D1026] py-20 relative overflow-hidden">
        {/* Large glowing gradient blobs for that premium tech feel */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#7B2CFF] rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#A855FF] rounded-full blur-[120px] opacity-10"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Ready to Bring Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CFF] to-[#A855FF]">
                Creative Vision
              </span>{" "}
              to Life?
            </h2>
            <p className="text-white/50 mb-10 text-lg max-w-2xl mx-auto">
              Download the CrewKart app or sign up today to join a growing community of 20,000+ creative professionals.
            </p>
          </FadeIn>

          {/* App Store Buttons / CTA Buttons */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* App Store Button Mockup */}
              <Link href="#" className="flex items-center gap-3 bg-white text-[#0D1026] px-6 py-3.5 rounded-xl font-bold transition-all hover:bg-gray-100 shadow-lg group">
                <svg className="w-8 h-8 text-[#0D1026]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] font-medium leading-none opacity-70">Download on the</div>
                  <div className="text-lg font-black leading-tight -mt-0.5">App Store</div>
                </div>
              </Link>

              {/* Play Store Button Mockup */}
              <Link href="#" className="flex items-center gap-3 bg-white text-[#0D1026] px-6 py-3.5 rounded-xl font-bold transition-all hover:bg-gray-100 shadow-lg group">
                <svg className="w-7 h-7 text-[#0D1026]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] font-medium leading-none opacity-70">GET IT ON</div>
                  <div className="text-lg font-black leading-tight -mt-0.5">Google Play</div>
                </div>
              </Link>

              {/* Web Fallback CTA */}
              <Link href="/signup" className="border border-white/20 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:bg-white/10">
                Or Sign Up Web
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}