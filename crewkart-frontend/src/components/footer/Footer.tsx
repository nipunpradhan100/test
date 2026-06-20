"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (<footer className="bg-[#050A22] text-white"> <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">

    

    {/* Footer Grid */}
    <div className="grid lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] gap-12 pt-20">

      {/* Brand */}
      <div>
        <h3 className="text-5xl font-bold">
          Crew<span className="text-[#7B2CFF]">Kart</span>
        </h3>

        <p className="text-white/60 mt-6 text-lg leading-relaxed max-w-sm">
          Connecting creators with the perfect creative for every project,
          anywhere.
        </p>

        <div className="flex gap-4 mt-10">
          {[
            FaFacebookF,
            FaInstagram,
            FaXTwitter,
            FaLinkedinIn,
            FaYoutube,
          ].map((Icon, i) => (
            <div
              key={i}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:border-[#7B2CFF] hover:text-[#7B2CFF] transition cursor-pointer"
            >
              <Icon size={24} />
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-bold text-2xl mb-6">
          Quick Links
        </h4>

        <ul className="space-y-4 text-white/60">
          <li><Link href="#">Home</Link></li>
          <li><Link href="#">Find Talents</Link></li>
          <li><Link href="#">Browse Categories</Link></li>
          <li><Link href="#">How It Works</Link></li>
          <li><Link href="#">Success Stories</Link></li>
          <li><Link href="#">About Us</Link></li>
        </ul>
      </div>

      {/* Clients */}
      <div>
        <h4 className="font-bold text-2xl mb-6">
          For Clients
        </h4>

        <ul className="space-y-4 text-white/60">
          <li><Link href="#">Hire Talents</Link></li>
          <li><Link href="#">Post a Project</Link></li>
          <li><Link href="#">Browse Portfolios</Link></li>
          <li><Link href="#">Pricing</Link></li>
          <li><Link href="#">Client Resources</Link></li>
          <li><Link href="#">Project Management</Link></li>
        </ul>
      </div>

      {/* Creatives */}
      <div>
        <h4 className="font-bold text-2xl mb-6">
          For Creatives
        </h4>

        <ul className="space-y-4 text-white/60">
          <li><Link href="#">Create Profile</Link></li>
          <li><Link href="#">Find Projects</Link></li>
          <li><Link href="#">Portfolio Guidelines</Link></li>
          <li><Link href="#">Creator Resources</Link></li>
          <li><Link href="#">Earnings Dashboard</Link></li>
          <li><Link href="#">Payments</Link></li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h4 className="font-bold text-2xl mb-6">
          Support
        </h4>

        <ul className="space-y-4 text-white/60">
          <li><Link href="#">Help Centre</Link></li>
          <li><Link href="#">Contact Us</Link></li>
          <li><Link href="#">FAQs</Link></li>
          <li><Link href="#">Terms & Conditions</Link></li>
          <li><Link href="#">Privacy Policy</Link></li>
          <li><Link href="#">Report an Issue</Link></li>
        </ul>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="border-t border-white/10 mt-20 pt-8 text-white/50 text-center">
      © 2026 CrewKart. All rights reserved.
    </div>

  </div>
  </footer>


  );
}
