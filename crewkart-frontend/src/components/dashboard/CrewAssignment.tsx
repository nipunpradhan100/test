const crews = [
  {
    name: "Arjun Media",
    city: "Delhi",
    available: true,
  },
  {
    name: "Pixel Creators",
    city: "Delhi",
    available: false,
  },
];

export default function CrewAssignment() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-md">

      <h3 className="mb-6 text-2xl font-bold text-[#004643]">
        Available Crew
      </h3>

      <div className="space-y-5">

        {crews.map((crew, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-2xl border p-5"
          >

            <div>

              <h4 className="text-lg font-bold text-[#004643]">
                {crew.name}
              </h4>

              <p className="mt-1 text-gray-600">
                {crew.city}
              </p>

            </div>

            <div className="flex items-center gap-4">

              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  crew.available
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {crew.available ? "Available" : "Busy"}
              </span>

              <button className="rounded-xl bg-[#fbbf24] px-5 py-3 font-semibold text-[#004643]">
                Assign
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}