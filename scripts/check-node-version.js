const fs = require("fs");
const path = require("path");

function deleteNodeModules() {
  const dir = path.resolve(__dirname, "..", "node_modules");
  if (fs.existsSync(dir)) {
    console.log("Deleting node_modules folder...");
    try {
      // Node 12+ recommended way:
      fs.rmSync(dir, { recursive: true, force: true });
      console.log("node_modules deleted.");
    } catch (err) {
      console.error("Failed to delete node_modules:", err);
    }
  }
}

const [major] = process.versions.node.split(".").map(Number);

if (major < 20) {
  console.error(
    "\x1b[31m%s\x1b[0m",
    `❌ ERROR: Node.js v${process.versions.node} detected. Please use Node.js v20 or higher.`
  );
  deleteNodeModules();
  process.exit(1);
}

const userAgent = process.env.npm_config_user_agent || "";

if (!userAgent.includes("pnpm")) {
  console.error(
    "\x1b[31m%s\x1b[0m",
    `❌ ERROR: Detected package manager is not pnpm. Please use pnpm to install dependencies.\nRun: pnpm install`
  );
  deleteNodeModules();
  process.exit(1);
}
