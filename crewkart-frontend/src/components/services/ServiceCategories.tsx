import {
  Camera,
  PenTool,
  Megaphone,
  Palette,
  Video,
  Globe,
  Bot,
  Briefcase,
} from "lucide-react";

const services = [
  {
    title: "Photography",
    icon: Camera,
  },
  {
    title: "Content Writing",
    icon: PenTool,
  },
  {
    title: "Marketing",
    icon: Megaphone,
  },
  {
    title: "Graphic Design",
    icon: Palette,
  },
  {
    title: "Video Editing",
    icon: Video,
  },
  {
    title: "Web Development",
    icon: Globe,
  },
  {
    title: "Automation",
    icon: Bot,
  },
  {
    title: "Consulting",
    icon: Briefcase,
  },
];

export default function ServiceCategories() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <h2 className="text-center text-3xl font-bold text-[#004643] md:text-5xl">
          Explore Services
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Book skilled professionals across multiple categories.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="rounded-3xl bg-white p-6 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fbbf24]/20">
                  <Icon className="text-[#004643]" size={28} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#004643]">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}