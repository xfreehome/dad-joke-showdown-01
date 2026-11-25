import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My son asked why I named our dog Biscuit. I said, 'Because every time I call him, he comes running — he's just that crumb-believable.'";

// The gate requires 1-200 characters of non-whitespace text.
if (joke.length < 1 || joke.length > 200 || joke.trim().length === 0) {
  throw new Error(`joke must be 1-200 characters, got ${joke.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
