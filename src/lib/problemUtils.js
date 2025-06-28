import fs from "fs";
import path from "path";

export function getProblemData(slug) {
  try {
    const filePath = path.join(
      process.cwd(),
      "src/data/json_data",
      `${slug}.json`
    );

    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (err) {
    console.error(`Error reading problem data for slug: ${slug}`, err);
    return null;
  }
}
