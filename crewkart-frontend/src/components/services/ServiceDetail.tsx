const packages = [
  {
    name: "Basic",
    price: "₹1,500",
    features: "5 images + editing",
  },
  {
    name: "Standard",
    price: "₹3,000",
    features: "10 images + retouching",
  },
  {
    name: "Premium",
    price: "₹6,000",
    features: "20 images + styling",
  },
];

export default function ServiceDetail() {
  return (
    <section className="px-6 py-20">

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-[#004643]">
            Product Photoshoot
          </h1>

          <p className="mt-4 text-gray-600">
            Professional photography for products,
            brands & e-commerce businesses.
          </p>
        </div>

        {/* Packages */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-3xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl ${
                pkg.name === "Standard"
                  ? "border-2 border-[#fbbf24]"
                  : ""
              }`}
            >

              <h3 className="text-2xl font-bold text-[#004643]">
                {pkg.name}
              </h3>

              <p className="mt-4 text-4xl font-bold text-[#004643]">
                {pkg.price}
              </p>

              <p className="mt-4 text-gray-600">
                {pkg.features}
              </p>

              <button className="mt-8 w-full rounded-2xl bg-[#fbbf24] py-4 font-bold text-[#004643] transition hover:scale-[1.02]">
                Select Package
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}