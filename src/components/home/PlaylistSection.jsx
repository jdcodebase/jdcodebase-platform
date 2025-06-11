import PlaylistCard from "./PlaylistCard";
import { playlists } from "@/data/playlistData";

export default function PlaylistSection() {
  return (
    <section className="md:pt-10 pt-16 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">📺 YouTube Playlists</h2>
      <p className="text-gray-300 mb-10">
        Explore our structured learning paths and series.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {playlists.map((item, index) => (
          <PlaylistCard
            key={index}
            title={item.title}
            desc={item.desc}
            playlistId={item.playlistId}
          />
        ))}
      </div>
    </section>
  );
}
