import { Lightbulb, Hammer, Rocket, VideoIcon } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Daily DSA",
      desc: "Handpicked problems with step-by-step solutions.",
      icon: <Lightbulb className="text-blue-500" size={24} />,
    },
    {
      title: "Real Projects",
      desc: "Build full-stack MERN apps from scratch.",
      icon: <Hammer className="text-green-500" size={24} />,
    },
    {
      title: "Beginner Friendly",
      desc: "Start learning from zero with clear explanations.",
      icon: <Rocket className="text-yellow-500" size={24} />,
    },
    {
      title: "Playlist-Based",
      desc: "Structured, video-first learning path.",
      icon: <VideoIcon className="text-pink-500" size={24} />,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto mt-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">🚀 Why JDCodebase?</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 text-left">
        {features.map(({ title, desc, icon }) => (
          <article
            key={title}
            className="bg-neutral-800 p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
            role="listitem"
          >
            <div className="flex items-center gap-3 mb-3">
              {icon}
              <h3 className="text-xl font-semibold text-white">{title}</h3>
            </div>
            <p className="text-gray-400">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
