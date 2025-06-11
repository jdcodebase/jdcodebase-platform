export default function FeaturesSection() {
  const features = [
    { title: "Daily DSA", desc: "Handpicked problems with solutions." },
    { title: "Real Projects", desc: "Practical web dev with MERN." },
    {
      title: "Beginner Friendly",
      desc: "Easy to follow for absolute beginners.",
    },
    { title: "Playlist-Based", desc: "Video-first approach to learning." },
  ];

  return (
    <section className="max-w-6xl mx-auto mt-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">🚀 Why JDCodebase?</h2>
      <div className="grid sm:grid-cols-2 gap-6 text-left">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-neutral-800 p-5 rounded-xl shadow-sm hover:shadow-md shadow-white"
          >
            <h3 className="text-xl font-semibold text-white">{f.title}</h3>
            <p className="text-gray-400 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
