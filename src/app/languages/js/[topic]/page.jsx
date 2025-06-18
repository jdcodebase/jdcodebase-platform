import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

const topicComponents = {
  "what-is-js": dynamic(() => import("../content/what-is-js")),
  history: dynamic(() => import("../content/history")),
};

export default function TopicPage({ params }) {
  const TopicComponent = topicComponents[params.topic];

  if (!TopicComponent) return notFound();

  return (
    <div>
      <TopicComponent />
    </div>
  );
}
