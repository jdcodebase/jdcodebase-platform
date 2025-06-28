import SEO from "@/components/common/SEO";
import DsaMainContent from "@/components/dsa/DsaMainContent";
import DsaSidebar from "@/components/dsa/DsaSidebar";

export default function DSAPage() {
  return (
    <>
      <SEO
        title="Master Data Structures & Algorithms | DSA Practice Problems - JDCodebase"
        description="Practice Data Structures and Algorithms with categorized DSA problems, optimized solutions, and detailed explanations. Perfect for beginners and coding interviews."
        url="https://jdcodebase.vercel.app/dsa"
        image="https://jdcodebase.vercel.app/og-banner.png"
        keywords="DSA problems, data structures, algorithms, LeetCode solutions, coding interview, DSA practice, JavaScript DSA, JDCodebase"
      />

      <div className="flex min-h-screen flex-col md:flex-row bg-neutral-950 text-white">
        <DsaSidebar />
        <main className="flex-1 p-6">
          <DsaMainContent />
        </main>
      </div>
    </>
  );
}
