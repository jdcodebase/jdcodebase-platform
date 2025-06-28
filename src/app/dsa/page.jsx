import SEO from "@/components/common/SEO";
import DsaMainContent from "@/components/dsa/DsaMainContent";
import DsaSidebar from "@/components/dsa/DsaSidebar";

export default function DSAPage() {
  return (
    <>
      <SEO
        title="Data Structures & Algorithms | JDCodebase"
        description="Explore DSA problems and solutions categorized by topics. Master data structures and algorithms with JDCodebase."
        url="https://jdcodebase.vercel.app/dsa"
        image="https://jdcodebase.vercel.app/og-banner.png"
        keywords="DSA, data structures, algorithms, coding problems, LeetCode, interview prep, JDCodebase"
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
