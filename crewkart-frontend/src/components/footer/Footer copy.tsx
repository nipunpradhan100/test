import Link from "next/link";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#080b18] text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Column 1: Brand & Socials */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-black">
            Crew<span className="text-[#7B2CFF]">Kart</span>
          </h2>
          <p className="mt-3 text-sm text-white/40 leading-relaxed">
            India’s smart crew booking platform. Connecting you with top-tier professionals effortlessly.
          </p>
          <div className="flex gap-4 text-xl mt-6">
            <a href="#" aria-label="Instagram" className="text-white/40 hover:text-[#7B2CFF] transition-colors"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="text-white/40 hover:text-[#7B2CFF] transition-colors"><FaLinkedin /></a>
            <a href="#" aria-label="Youtube" className="text-white/40 hover:text-[#7B2CFF] transition-colors"><FaYoutube /></a>
            <a href="#" aria-label="Facebook" className="text-white/40 hover:text-[#7B2CFF] transition-colors"><FaFacebook /></a>
            <a href="#" aria-label="Whatsapp" className="text-white/40 hover:text-[#7B2CFF] transition-colors"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#A855FF] mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="text-sm text-white/40 hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/marketplace" className="text-sm text-white/40 hover:text-white transition-colors">Find Talents</Link></li>
            <li><Link href="/services" className="text-sm text-white/40 hover:text-white transition-colors">Services</Link></li>
            <li><Link href="#how-it-works" className="text-sm text-white/40 hover:text-white transition-colors">How it Works</Link></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#A855FF] mb-4">Support</h3>
          <ul className="space-y-3">
            <li><Link href="#" className="text-sm text-white/40 hover:text-white transition-colors">Help Center</Link></li>
            <li><Link href="#" className="text-sm text-white/40 hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link href="#" className="text-sm text-white/40 hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="text-sm text-white/40 hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#A855FF] mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm text-white/40">
            <li>support@crewkart.com</li>
            <li>+91 98765 43210</li>
            <li>Mumbai, India</li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} CrewKart. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Designed with ♥ for creators
          </p>
        </div>
      </div>
    </footer>
  );
}