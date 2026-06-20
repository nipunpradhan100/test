import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import DynamicServiceCard from "@/components/services/DynamicServiceCard";
import { services } from "@/constants/services";

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-[#f0ede5]">

      <Navbar />

      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="text-center">

            <h1 className="text-4xl font-bold text-[#004643] md:text-6xl">
              Explore Marketplace
            </h1>

            <p className="mt-4 text-gray-600">
              Find verified crews & services across cities.
            </p>
          </div>

          {/* Search */}
          <div className="mt-12">
            <input
              type="text"
              placeholder="Search services..."
              className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none"
            />
          </div>

          {/* Filters */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">

            <select className="rounded-2xl border border-gray-300 px-5 py-4 outline-none">
              <option>All Categories</option>
              <option>Photography</option>
              <option>Marketing</option>
              <option>Automation</option>
            </select>

            <select className="rounded-2xl border border-gray-300 px-5 py-4 outline-none">
              <option>Select City</option>
              <option>Delhi</option>
              <option>Jaipur</option>
              <option>Indore</option>
              <option>Lucknow</option>
            </select>

            <select className="rounded-2xl border border-gray-300 px-5 py-4 outline-none">
              <option>Sort By</option>
              <option>Price Low to High</option>
              <option>Price High to Low</option>
            </select>

          </div>

          {/* Service Grid */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {services.map((service, index) => (
              <DynamicServiceCard
                key={index}
                category={service.category}
                title={service.title}
              />
            ))}

          </div>
        </div>
      </section>

      <Footer />

      <MobileBottomNav />
    </main>
  );
}