import PlaylistSection from "@/components/home/PlaylistSection";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import SEO from "@/components/common/SEO";

export default function HomePage() {
  return (
    <>
      <SEO
        title="JDCodebase – Learn DSA, Projects & Blogs for Developers"
        description="Explore developer-focused content in DSA, JavaScript, and hands-on projects. JDCodebase is your launchpad."
        url="https://jdcodebase.vercel.app"
        image="https://jdcodebase.vercel.app/og-banner.png"
        keywords="DSA tutorials, JavaScript projects, developer blogs, self-taught dev roadmap, coding tutorials, JDCodebase"
      />

      <main className="text-white px-5">
        <HeroSection />
        <PlaylistSection />

        <section className="my-20 text-center text-lg italic text-gray-200 max-w-3xl mx-auto">
          “Built for every self-taught developer who’s serious about mastering
          code.”
        </section>

        <FeaturesSection />
        <section
          className="mt-20 text-center max-w-3xl mx-auto px-4"
          aria-label="YouTube Section"
        >
          <h2 className="text-3xl font-bold mb-3">🎬 Check Out JDCodebase</h2>
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
            aria-label="Subscribe to JDCodebase YouTube Channel"
            className="inline-block mt-6 mb-5 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md transition-colors"
          >
            🔔 Subscribe on YouTube
          </a>
        </section>
      </main>
    </>
  );
}
