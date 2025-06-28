export default function PlaylistCard({ title, desc, playlistId }) {
  return (
    <article
      className="bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-blue-500/20 hover:scale-[1.01] transition duration-200"
      role="group"
      aria-label={`${title} playlist card`}
    >
      <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{desc}</p>

      <div className="aspect-video mb-4 rounded-md overflow-hidden">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
          title={`${title} YouTube Playlist`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>

      <a
        href={`https://www.youtube.com/playlist?list=${playlistId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-colors"
      >
        Open on YouTube
      </a>
    </article>
  );
}
