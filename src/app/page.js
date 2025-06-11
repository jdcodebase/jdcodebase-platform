import PlaylistSection from "@/components/home/PlaylistSection";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";

export default function HomePage() {
  return (
    <main className="text-white px-5">
      <HeroSection />
      <PlaylistSection />
      <section className="my-20 text-center text-lg italic text-gray-200">
        “Built for every self-taught developer who’s serious about mastering
        code.”
      </section>
      <FeaturesSection />

      <section className="mt-20 text-center sm:max-w-1/2 mx-auto">
        <h2 className="text-2xl font-bold mb-3">🎬 Check Out JDCodebase</h2>
        <p className="mb-4 text-gray-400">
          Watch our latest content and start coding now.
        </p>

        <div className="flex justify-center">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLZlKM_ddNCGWWsyipsQ7OS_m5DnHaJ5yU"
            title="JDCodebase Playlist"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          />
        </div>

        <a
          href="https://www.youtube.com/@JDCodebase-EN"
          target="_blank"
          className="inline-block mt-6 bg-blue-600 px-6 py-3 rounded-md text-white hover:bg-blue-500 transition"
        >
          Subscribe on YouTube
        </a>
      </section>
    </main>
  );
}
