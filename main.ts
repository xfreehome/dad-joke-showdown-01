import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My son asked why I named our dog Biscuit. I said, 'Because every time I call him, he comes running — he's just that crumb-believable.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
