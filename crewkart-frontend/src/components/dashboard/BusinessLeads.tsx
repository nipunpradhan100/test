const leads = [
  {
    company: "ABC Events",
    contact: "9876543210",
    city: "Delhi",
  },
  {
    company: "Growth Media",
    contact: "9123456780",
    city: "Ahmedabad",
  },
];

export default function BusinessLeads() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-md">

      <h3 className="mb-6 text-2xl font-bold text-[#004643]">
        Business Inquiries
      </h3>

      <div className="space-y-5">

        {leads.map((lead, index) => (
          <div
            key={index}
            className="rounded-2xl border p-5"
          >

            <h4 className="text-lg font-bold text-[#004643]">
              {lead.company}
            </h4>

            <p className="mt-2 text-gray-600">
              Contact: {lead.contact}
            </p>

            <p className="text-gray-600">
              City: {lead.city}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}