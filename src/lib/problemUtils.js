import fs from "fs";
import path from "path";

export function getProblemData(slug) {
  const filePath = path.join(
    process.cwd(),
    "src/data/json_data",
    `${slug}.json`
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent);
}
