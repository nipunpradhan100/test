const bookings = [
  {
    client: "Rahul Sharma",
    service: "Photography",
    city: "Delhi",
    status: "Pending",
  },
  {
    client: "Aman Gupta",
    service: "Marketing",
    city: "Jaipur",
    status: "Assigned",
  },
];

export default function BookingTable() {
  return (
    <div className="overflow-x-auto rounded-3xl bg-white p-6 shadow-md">

      <h3 className="mb-6 text-2xl font-bold text-[#004643]">
        Recent Bookings
      </h3>

      <table className="w-full min-w-[700px]">

        <thead>
          <tr className="border-b text-left text-gray-600">

            <th className="pb-4">Client</th>
            <th className="pb-4">Service</th>
            <th className="pb-4">City</th>
            <th className="pb-4">Status</th>
            <th className="pb-4">Action</th>

          </tr>
        </thead>

        <tbody>

          {bookings.map((booking, index) => (
            <tr
              key={index}
              className="border-b"
            >

              <td className="py-5 font-medium">
                {booking.client}
              </td>

              <td>{booking.service}</td>

              <td>{booking.city}</td>

              <td>
                <span className="rounded-full bg-[#fbbf24]/20 px-4 py-2 text-sm font-semibold text-[#004643]">
                  {booking.status}
                </span>
              </td>

              <td>
                <button className="rounded-xl bg-[#004643] px-5 py-2 text-white">
                  Assign
                </button>
              </td>

            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}