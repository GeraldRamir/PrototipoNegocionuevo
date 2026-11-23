import { readdirSync } from "node:fs";
import path from "node:path";

/** Lists the files actually present in /public/images so missing photos render a placeholder. */
export function getAvailableImages(): string[] {
  try {
    return readdirSync(path.join(process.cwd(), "public", "images"));
  } catch {
    return [];
  }
}
