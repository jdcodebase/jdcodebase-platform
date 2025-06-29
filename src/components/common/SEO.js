import Head from "next/head";

export default function SEO({
  title = "JDCodebase – Tech Simplified",
  description = "Master DSA, real-world projects, and developer blogs with JDCodebase. Built for self-taught devs serious about coding.",
  url = "https://jdcodebase.vercel.app",
  image = "https://jdcodebase.vercel.app/og-banner.png",
  keywords = "DSA, JavaScript, coding projects, developer blogs, JDCodebase, interview prep",
  robots = "index, follow",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="JDCodebase" />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="JDCodebase" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
