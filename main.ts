// Entry for the make.fun "Office Joke Open" bounty.
// Writes one single-line office joke (<= 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I set my status to 'in a meeting' so nobody would bother me. Now I'm in a meeting about why my status says 'in a meeting.'";

// The gate requires 1-200 characters of UTF-8 text, not only whitespace.
const length = [...JOKE].length;
if (length < 1 || length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke must be 1-200 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${length} characters to /output/entry.txt`);
