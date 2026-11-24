import { writeFileSync, mkdirSync } from "node:fs";

// Prompt: the excuse a robot vacuum gives after eating a sock
const LINE = "I thought it was a dust bunny with commitment issues. I stand by my choices.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n");
