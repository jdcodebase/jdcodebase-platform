import { metadata as whatIsJsMeta } from "./content/what-is-js";
import { metadata as historyMeta } from "./content/history";
import { metadata as versionsMeta } from "./content/versions";
import { metadata as howToRunMeta } from "./content/how-to-run";
import { metadata as variablesMeta } from "./content/variables";

export const topicComponents = {
  "what-is-js": () => import("./content/what-is-js"),
  history: () => import("./content/history"),
  versions: () => import("./content/versions"),
  "how-to-run": () => import("./content/how-to-run"),
  variables: () => import("./content/variables"),
};

export const topicMetadataMap = {
  "what-is-js": whatIsJsMeta,
  history: historyMeta,
  versions: versionsMeta,
  "how-to-run": howToRunMeta,
  variables: variablesMeta,
};
