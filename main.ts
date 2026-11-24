import { writeFileSync, mkdirSync } from "node:fs";

// Prompt: the excuse a robot vacuum gives after eating a sock
const LINE = "I did not eat your sock. At 04:12 I logged it as debris, at 04:13 I logged it as lunch, and at 04:14 the status light started blinking: 'one sock short of a pair.'";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}

if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n");
