export default function BookingCard({
  title,
  status,
}: {
  title: string;
  status: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-md">

      <div className="flex items-center justify-between">
        
        <h3 className="text-xl font-bold text-[#004643]">
          {title}
        </h3>

        <span className="rounded-full bg-[#fbbf24]/20 px-4 py-2 text-sm font-semibold text-[#004643]">
          {status}
        </span>
      </div>

      <p className="mt-4 text-gray-600">
        Delhi • 12 June • 4 PM
      </p>

      <div className="mt-6 flex gap-4">

        <button className="rounded-xl bg-[#004643] px-5 py-3 text-white">
          View
        </button>

        <button className="rounded-xl border border-[#004643] px-5 py-3 text-[#004643]">
          Message
        </button>
      </div>
    </div>
  );
}