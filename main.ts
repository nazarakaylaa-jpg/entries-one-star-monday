// SPDX-License-Identifier: MIT
// One Star for Monday — writes a one-star review of Monday,
// as if Monday were a restaurant, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review =
  "One star. The waiter seated me at Monday, served my weekend overcooked, and charged me for the alarm clock.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review + "\n", "utf8");
