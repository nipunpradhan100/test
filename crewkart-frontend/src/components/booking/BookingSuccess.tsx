export default function BookingSuccess() {
  return (
    <div className="rounded-3xl bg-green-100 p-8 text-center">

      <h2 className="text-3xl font-bold text-green-700">
        Booking Confirmed 🎉
      </h2>

      <p className="mt-4 text-green-800">
        Your request has been submitted successfully.
      </p>

      <button className="mt-8 rounded-2xl bg-[#004643] px-8 py-4 font-bold text-white">
        Go to Dashboard
      </button>
    </div>
  );
}