// The Production Database Apology — one-line entry for make.fun.
// Writes the apology text (plus a trailing newline) to entry.txt
// inside the grader output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I'm sorry I wiped production; the backups are labeled daily, which I now understand was an aspiration rather than a schedule.";

const outDir = process.env.MAKEFUN_OUTPUT || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
