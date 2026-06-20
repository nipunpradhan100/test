type PriceCardProps = {
  name: string;
  price: string;
  features: string;
};

export default function PriceCard({
  name,
  price,
  features,
}: PriceCardProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-md">

      <h3 className="text-2xl font-bold text-[#004643]">
        {name}
      </h3>

      <h2 className="mt-4 text-4xl font-bold text-[#004643]">
        {price}
      </h2>

      <p className="mt-4 text-gray-600">
        {features}
      </p>

      <button className="mt-8 w-full rounded-2xl bg-[#fbbf24] py-4 font-bold text-[#004643]">
        Select Plan
      </button>
    </div>
  );
}