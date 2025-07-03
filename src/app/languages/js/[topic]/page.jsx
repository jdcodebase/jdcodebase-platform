import { notFound } from "next/navigation";
import { topicComponents, topicMetadataMap } from "../topicConfig";

export async function generateMetadata({ params }) {
  const meta = topicMetadataMap[params.topic];
  if (!meta) return notFound();
  return meta;
}

export default async function TopicPage({ params }) {
  const loader = topicComponents[params.topic];
  if (!loader) return notFound();

  const Component = (await loader()).default;
  return <Component />;
}
