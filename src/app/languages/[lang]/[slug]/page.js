import Link from "next/link";
import { notFound } from "next/navigation";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { languageContentMap } from "@/data/pl/allTopics";
import QuizBlock from "@/components/pl/js/QuizBlock";

export async function generateMetadata({ params }) {
  const { lang, slug } = params;
  const contentList = languageContentMap[lang];

  if (!contentList) {
    return {
      title: "Language Not Found | JDCodebase",
      description: "This programming language is not yet available.",
    };
  }

  const topic = contentList.find((t) => t.slug === slug);

  if (!topic) {
    return {
      title: "Topic Not Found | JDCodebase",
      description: "This topic was not found in the selected language content.",
    };
  }

  return {
    title: `${topic.title} – ${lang.toUpperCase()} | JDCodebase`,
    description:
      topic.description ||
      `Explore "${
        topic.title
      }" in ${lang.toUpperCase()} with examples and hands-on practice at JDCodebase.`,
    keywords: [
      "JDCodebase",
      "Learn programming",
      `${lang} tutorial`,
      `${topic.title}`,
      `${topic.title} ${lang}`,
      "JavaScript",
      "TypeScript",
      "C++",
      "DSA",
      "Coding practice",
      "Frontend development",
      "Web development",
    ],
    openGraph: {
      title: `${topic.title} – ${lang.toUpperCase()} | JDCodebase`,
      description:
        topic.description ||
        `Learn about "${
          topic.title
        }" in ${lang.toUpperCase()} with code samples and explanations.`,
      url: `https://jdcodebase.vercel.app/languages/${lang}/${slug}`,
      siteName: "JDCodebase",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${topic.title} – JDCodebase`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${topic.title} – ${lang.toUpperCase()} | JDCodebase`,
      description:
        topic.description ||
        `Master ${
          topic.title
        } in ${lang.toUpperCase()} on JDCodebase with examples and clear explanations.`,
      images: ["/og-image.png"],
    },
  };
}

export default function JSTopicPage({ params }) {
  const { lang, slug } = params;
  const contentList = languageContentMap[lang];

  if (!contentList) return notFound();

  const topic = contentList.find((t) => t.slug === slug);

  if (!topic) return notFound();

  return (
    <div className="space-y-10 max-w-5xl mx-auto text-white bg-gradient-to-br from-black via-gray-900 to-black px-5 md:px-10 py-10 rounded-md shadow-md shadow-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-light mb-5 text-blue-600">
          {topic.title}
        </h1>

        {topic.content.map((block, i) => {
          switch (block.type) {
            case "intro":
              return (
                <div key={i} className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">
                    {block.heading}
                  </h2>
                  <p className="text-gray-300">{block.text}</p>
                </div>
              );
            case "heading":
              return (
                <div key={i}>
                  <h2 className="text-2xl font-light my-2 text-blue-500">
                    {block.text}
                  </h2>
                </div>
              );
            case "subHeading":
              return (
                <div key={i}>
                  <h2 className="text-lg font-light my-2 text-blue-500">
                    {block.text}
                  </h2>
                </div>
              );
            case "list":
              return (
                <div key={i} className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">
                    {block.heading}
                  </h2>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    {block.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            case "paragraph":
              return (
                <p key={i} className="text-gray-300 mb-4">
                  {block.text}
                </p>
              );
            case "code":
              return (
                <div key={i} className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">
                    {block.heading}
                  </h2>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto text-sm shadow text-wrap">
                    {block.code}
                  </pre>
                </div>
              );
            case "question":
              return (
                <div key={i} className="mb-2">
                  <p className="text-lg font-normal mb-2">{block.question}</p>
                  <p className="text-md font-light mb-2 text-gray-500">
                    {block.answer}
                  </p>
                </div>
              );
            case "quiz":
              return <QuizBlock key={i} block={block} />;

            case "navigation":
              return (
                <div
                  key={i}
                  className="md:flex md:justify-between md:gap-4 space-y-5 md:space-y-0 mt-5"
                >
                  {block.previous && (
                    <Link
                      href={block.previous.href}
                      className="border border-white hover:border-sky-500 hover:text-sky-400 transition duration-300 px-6 py-3 rounded-lg text-lg flex items-center justify-center shadow-sm hover:shadow-md shadow-white/40 w-full md:w-fit text-center"
                    >
                      <GrFormPreviousLink size={22} /> {block.previous.title}
                    </Link>
                  )}

                  {block.next && (
                    <Link
                      href={block.next.href}
                      className="border border-white hover:border-sky-500 hover:text-sky-400 transition duration-300 px-6 py-3 rounded-lg text-lg flex items-center justify-center shadow-sm hover:shadow-md shadow-white/40 w-full md:w-fit text-center"
                    >
                      {block.next.title} <GrFormNextLink size={22} />
                    </Link>
                  )}
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
      <footer className="text-gray-300 my-4 text-center">
        @JDCodebase • Learn JavaScript the right way 🚀
      </footer>
    </div>
  );
}
