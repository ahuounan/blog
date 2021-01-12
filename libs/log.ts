export function log(message: string, type: "warn" | "error" | "log" | "debug" = "log"): void {
  console[type](`>>>${message}`);
}
