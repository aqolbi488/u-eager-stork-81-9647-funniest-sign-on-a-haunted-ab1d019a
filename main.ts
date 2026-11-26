import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "DO NOT REBOOT RACK 7 — OUR DEAD SYSADMIN IS STILL ON-CALL AND HE HAS THE ONLY ROOT PASSWORD.";

const chars = [...line].length;
if (chars < 1 || chars > 120 || line.trim().length === 0) {
  throw new Error(`entry line must be 1-120 non-blank chars, got ${chars}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${chars} chars to /output/entry.txt`);
