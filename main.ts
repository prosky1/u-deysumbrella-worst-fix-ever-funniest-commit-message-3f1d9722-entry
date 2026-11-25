// Worst Fix Ever: Funniest Commit Message
// make.fun competition: u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722
//
// The entry is a single commit message, at most 100 characters, for a bug
// fix that made everything worse. This program writes that one line to
// /output/entry.txt, where the sealed scorer checks it (UTF-8, 1-100
// characters, not only whitespace) before it goes before the pairwise judge.
//
// Run with Node 22.18+ (the grader runs Node 22.23.4):
//   node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "fix: removed the bug. it took the database with it as a souvenir";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 100;

function validate(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${text.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line (no line breaks)");
  }
}

validate(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

// Read back what was written and confirm it round-trips byte for byte,
// so a silent write failure can never pass as a valid entry.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== ENTRY) {
  throw new Error(
    `verification failed: file holds ${written.length} characters, expected ${ENTRY.length}`,
  );
}
console.log(`wrote ${ENTRY.length} characters to ${OUTPUT_PATH}`);
