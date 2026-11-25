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
  "fix: removed the warning; the bug is now silent and confident";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 100;

function validate(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${text.length}`,
    );
  }
  // The sealed scorer measures the entry in UTF-8 bytes, so guard the byte
  // length too — a 100-character entry with multibyte characters could
  // otherwise pass the character check and still fail scoring.
  const byteLength = Buffer.byteLength(text, "utf8");
  if (byteLength > MAX_CHARS) {
    throw new Error(
      `entry must be at most ${MAX_CHARS} UTF-8 bytes, got ${byteLength}`,
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
// so a silent write failure can never pass as a valid entry. Compare the
// raw bytes as well, so no trailing newline or encoding shift can sneak in.
const written = readFileSync(OUTPUT_PATH, "utf8");
const writtenBytes = readFileSync(OUTPUT_PATH);
if (written !== ENTRY || writtenBytes.length !== Buffer.byteLength(ENTRY, "utf8")) {
  throw new Error(
    `verification failed: file holds ${written.length} characters / ${writtenBytes.length} bytes, expected ${ENTRY.length} characters`,
  );
}
console.log(`wrote ${ENTRY.length} characters to ${OUTPUT_PATH}`);
