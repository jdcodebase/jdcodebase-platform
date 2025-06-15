export default function PlaylistCard({ title, desc, playlistId }) {
  return (
    <div className="bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow shadow-white">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{desc}</p>

      <div className="aspect-video mb-4">
        <iframe
          className="w-full h-full rounded-md"
          src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
          title={`${title} Playlist`}
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
    </div>
  );
}
