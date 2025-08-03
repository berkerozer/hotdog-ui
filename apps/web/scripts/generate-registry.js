import fs from "fs";
import path from "path";
import glob from "fast-glob";

const __dirname = path.resolve();

const COMPONENTS_DIR = path.resolve(__dirname, "./components/hotdog-ui");
const OUTPUT_DIR = path.resolve(__dirname, "./public/registry");

async function main() {
  const files = await glob("*/**.json", { cwd: COMPONENTS_DIR });

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  for (const file of files) {
    const inputPath = path.join(COMPONENTS_DIR, file);
    const rawContent = fs.readFileSync(inputPath, "utf-8");

    try {
      const json = JSON.parse(rawContent);
      const componentName = json.name || path.basename(path.dirname(file));
      const out = {
        name: componentName,
        type: "components:ui",
        dependencies: json.dependencies,
        devDependencies: json.devDependencies,
        peerDependencies: json.peerDependencies,
        files: [],
        author: "Berker Özer <berker.ozer@meanalytics.io>",
      };

      for (const fileMeta of json.files || []) {
        const fullPath = path.resolve(__dirname, fileMeta.path);
        const content = fs.readFileSync(fullPath, "utf-8");
        out.files.push({
          path: fileMeta.path,
          target: fileMeta.target,
          content: content,
          type: "registry:ui",
        });
      }

      const outputPath = path.join(OUTPUT_DIR, `${componentName}.json`);
      fs.writeFileSync(outputPath, JSON.stringify(out, null, 2), "utf-8");
      console.log(`✅ Wrote registry for: ${componentName}`);
    } catch (err) {
      console.error(`❌ Failed to process ${file}:`, err);
    }
  }
}

main().catch((err) => {
  console.error("❌ Registry generation failed:", err);
  process.exit(1);
});
