import { caller } from "./caller";

export function log(message: string, type: "warn" | "error" | "log" | "debug" = "debug"): void {
  console[type](`>>>${caller()}:\n${message}`);
}
