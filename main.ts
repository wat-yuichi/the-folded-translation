import { mkdir, writeFile } from "node:fs/promises";

const entry = "After twelve night classes, Rosa read the medicine label herself, then tucked her daughter's translation back into the drawer.";

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", entry, "utf8");
