const { dsaTopicPages } = require("./src/data/dsa/dsaTopicPages");
const { dsaProblems } = require("./src/data/dsa/dsaProblems");
const { languageContentMap } = require("./src/data/pl/allTopics");

const baseUrl = "https://jdcodebase.vercel.app";

const getDSATopicPaths = () =>
  dsaTopicPages.map(
    (t) => `/dsa/${t.title.toLowerCase().replace(/\s+/g, "-")}`
  );

const getDSAProblemPaths = () =>
  dsaProblems.flatMap((p) =>
    p.category.map(
      (cat) => `/problem/${cat.toLowerCase().replace(/\s+/g, "-")}/${p.slug}`
    )
  );

const getLangTopicPaths = () =>
  Object.entries(languageContentMap).flatMap(([lang, topics]) =>
    topics.map((topic) => `/languages/${lang}/${topic.slug}`)
  );

module.exports = {
  siteUrl: baseUrl,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: [],

  async additionalPaths(config) {
    const dsaTopics = getDSATopicPaths();
    const dsaProblems = getDSAProblemPaths();
    const langTopics = getLangTopicPaths();

    const all = [...langTopics, ...dsaTopics, ...dsaProblems];

    return all.map((path) => ({
      loc: path,
      lastmod: new Date().toISOString(),
    }));
  },
};
