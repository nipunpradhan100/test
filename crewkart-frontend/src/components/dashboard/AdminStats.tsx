export default function AdminStats({
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

      <h2 className="mt-4 text-4xl font-bold text-[#004643]">
        {value}
      </h2>
    </div>
  );
}