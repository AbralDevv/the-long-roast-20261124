import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const roast =
  "My AI agent is so useless it autocompletes my sentences wrong, then charges me rent for living in my own codebase.";

// Gate: the entry must be one line, 1–200 chars, not only whitespace.
const line = roast.trim();
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`invalid roast line: ${line.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
