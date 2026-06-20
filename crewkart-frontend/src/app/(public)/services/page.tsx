import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import ServiceDetail from "@/components/services/ServiceDetail";
import BookingForm from "@/components/booking/BookingForm";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f0ede5]">

      <Navbar />

      <ServiceDetail />

      <BookingForm />

      <Footer />

      <MobileBottomNav />
    </main>
  );
}