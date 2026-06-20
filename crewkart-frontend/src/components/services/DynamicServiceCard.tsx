type ServiceCardProps = {
  category: string;
  title: string;
};

export default function DynamicServiceCard({
  category,
  title,
}: ServiceCardProps) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-md transition hover:-translate-y-2 hover:shadow-xl">

      <span className="rounded-full bg-[#fbbf24]/20 px-4 py-2 text-sm font-semibold text-[#004643]">
        {category}
      </span>

      <h3 className="mt-6 text-2xl font-bold text-[#004643]">
        {title}
      </h3>

      <button className="mt-8 rounded-2xl bg-[#004643] px-6 py-3 font-semibold text-white">
        View Service
      </button>
    </div>
  );
}