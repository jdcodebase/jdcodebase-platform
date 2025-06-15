export default function FeaturesSection() {
  const features = [
    {
      title: "Daily DSA",
      desc: "Handpicked problems with step-by-step solutions.",
    },
    {
      title: "Real Projects",
      desc: "Build full-stack MERN apps from scratch.",
    },
    {
      title: "Beginner Friendly",
      desc: "Start learning from zero with clear explanations.",
    },
    { title: "Playlist-Based", desc: "Structured, video-first learning path." },
  ];

  return (
    <section className="max-w-6xl mx-auto mt-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">🚀 Why JDCodebase?</h2>

      <div className="grid sm:grid-cols-2 gap-6 text-left">
        {features.map(({ title, desc }) => (
          <div
            key={title}
            className="bg-neutral-800 p-5 rounded-xl shadow-sm hover:shadow-md hover:shadow-white transition-shadow"
          >
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-gray-400 mt-2">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
