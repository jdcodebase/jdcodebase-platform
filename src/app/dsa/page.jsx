import Head from "next/head";
import DsaMainContent from "@/components/dsa/DsaMainContent";
import DsaSidebar from "@/components/dsa/DsaSidebar";

export default function DSAPage() {
  return (
    <>
      <Head>
        <title>Data Structures & Algorithms | JDCodebase</title>
        <meta
          name="description"
          content="Explore DSA problems and solutions categorized by topics. Master data structures and algorithms with JDCodebase."
        />
        <meta property="og:title" content="DSA | JDCodebase" />
        <meta
          property="og:description"
          content="Daily DSA problems with solutions, code, and explanation. Build strong problem-solving skills with JDCodebase."
        />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://yourdomain.com/dsa" />
        <meta
          property="og:image"
          content="https://yourdomain.com/preview.jpg"
        /> */}
      </Head>

      <div className="flex min-h-screen flex-col md:flex-row bg-neutral-950 text-white">
        <DsaSidebar />
        <main className="flex-1 p-6">
          <DsaMainContent />
        </main>
      </div>
    </>
  );
}
