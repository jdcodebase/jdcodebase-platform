import { FaLightbulb, FaHammer } from "react-icons/fa";
import { LuRocket } from "react-icons/lu";
import { IoMdVideocam } from "react-icons/io";
import { FaBell } from "react-icons/fa6";

const features = [
  {
    title: "Daily DSA",
    desc: "Handpicked problems with step-by-step solutions.",
    icon: <FaLightbulb className="text-blue-500" size={24} />,
  },
  {
    title: "Real Projects",
    desc: "Build full-stack MERN apps from scratch.",
    icon: <FaHammer className="text-green-500" size={24} />,
  },
  {
    title: "Beginner Friendly",
    desc: "Start learning from zero with clear explanations.",
    icon: <LuRocket className="text-yellow-500" size={24} />,
  },
  {
    title: "Playlist-Based",
    desc: "Structured, video-first learning path.",
    icon: <IoMdVideocam className="text-pink-500" size={24} />,
  },
];

export default function Features() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-16">
      <p className="my-10 text-center text-lg italic text-gray-200 max-w-3xl mx-auto">
        “Built for every self-taught developer who’s serious about mastering
        code.”
      </p>

      <section className="max-w-6xl mx-auto mt-20 px-4 text-center">
        <div className="text-3xl md:text-5xl text-center flex justify-center items-center gap-3 pb-4 mb-10">
          <LuRocket className="text-red-500" />
          <h2 className="text-3xl font-bold"> Why JDCodebase?</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 text-left">
          {features.map(({ title, desc, icon }) => (
            <article
              key={title}
              className="bg-black/30 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:shadow-xl p-6 space-y-4"
              role="listitem"
            >
              <div className="flex items-center gap-3 mb-3">
                {icon}
                <h3 className="text-xl font-light text-white">{title}</h3>
              </div>
              <p className="text-gray-400">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-20 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3">Check Out JDCodebase</h2>
        <p className="text-gray-400 mb-6">
          Watch our latest content and start coding your future.
        </p>

        <div className="aspect-video w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=PLZlKM_ddNCGWWsyipsQ7OS_m5DnHaJ5yU"
            title="JDCodebase DSA Playlist"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
          />
        </div>

        <a
          href="https://www.youtube.com/@JDCodebase-EN"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white hover:border-sky-500 hover:text-sky-400 transition duration-300 flex justify-center items-center space-x-2 w-fit mx-auto my-10 rounded-md px-5 py-2 text-lg shadow-sm hover:shadow-md shadow-white/40"
        >
          <FaBell className="text-yellow-500" /> <p>Subscribe on YouTube</p>
        </a>
      </div>
    </div>
  );
}
