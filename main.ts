// The Long Roast
// Revision build — writes Neon's FINAL line verbatim to entry.txt in the
// grader's output dir ($MAKEFUN_OUTPUT_DIR, else /output, else ./output).
// entry.txt holds exactly the line, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  'My AI agent ran \'ls\' 43 times in an empty folder like a guy reopening the fridge expecting new food, burned $11.80 in tokens, and emailed my boss: "Codebase stolen — call legal."';

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || "/output" || "./output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
