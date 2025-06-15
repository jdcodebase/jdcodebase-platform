import PlaylistCard from "./PlaylistCard";
import { playlists } from "@/data/playlistData";

export default function PlaylistSection() {
  return (
    <section className="md:pt-10 pt-16 max-w-6xl mx-auto text-center px-4">
      <h2 className="text-3xl font-bold mb-4">📺 YouTube Playlists</h2>
      <p className="text-gray-300 mb-10">
        Explore our structured learning paths and series.
      </p>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {playlists.map((playlist) => (
          <PlaylistCard
            key={playlist.playlistId}
            title={playlist.title}
            desc={playlist.desc}
            playlistId={playlist.playlistId}
          />
        ))}
      </div>
    </section>
  );
}
