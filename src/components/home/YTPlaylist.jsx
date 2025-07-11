import { FaYoutube } from "react-icons/fa";

const playlistData = [
  {
    title: "DSA",
    desc: "Daily dose of data structures and algorithms to build strong problem-solving skills.",
    link: "PLZlKM_ddNCGWWsyipsQ7OS_m5DnHaJ5yU",
  },
  {
    title: "JavaScript",
    desc: "Master core JavaScript concepts including variables, functions, scope, closures, and async programming — with practical coding examples.",
    link: "PLZlKM_ddNCGVJLDaiLnlkgXOy5L4z6W78",
  },
  {
    title: "Array",
    desc: "Sharpen your skills with a variety of array-based coding challenges.",
    link: "PLZlKM_ddNCGXeuQwqmaXdxWaddwpfRHba",
  },
  {
    title: "String",
    desc: "Tackle popular string manipulation problems with clear explanations and code.",
    link: "PLZlKM_ddNCGVcIOHsch9q-3WoBz-G8OYn",
  },
];

export default function YTPlaylist() {
  return (
    <div className="bg-gradient-to-bl from-black via-gray-900 to-black min-h-screen text-white px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-3xl md:text-4xl text-center flex justify-center items-center gap-3 pb-4">
          <FaYoutube className="text-red-500" />
          <h1 className="font-bold">YouTube Playlists</h1>
        </div>

        <p className="text-center text-gray-300 text-lg mb-12">
          Explore structured learning paths and video series for DSA, strings,
          and more.
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {playlistData.map((data, index) => (
            <div
              key={index}
              className="bg-black/30 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:shadow-xl p-6 space-y-4 text-center"
            >
              <h2 className="text-2xl font-light">{data.title}</h2>
              <p className="text-gray-400 text-base">{data.desc}</p>

              <div className="aspect-video w-full overflow-hidden rounded-md">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/videoseries?list=${data.link}`}
                  title={data.title}
                  allowFullScreen
                />
              </div>

              <a
                href={`https://youtube.com/playlist?list=${data.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-blue-600 hover:bg-blue-800 transition text-white px-5 py-2 rounded-lg text-lg">
                  Open on YouTube
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
