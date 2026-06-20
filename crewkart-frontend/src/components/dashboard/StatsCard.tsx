export default function StatsCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-md">
      
      <p className="text-gray-500">
        {title}
      </p>

      <h3 className="mt-3 text-3xl font-bold text-[#004643]">
        {value}
      </h3>
    </div>
  );
}