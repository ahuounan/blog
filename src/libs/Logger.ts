export class Logger {
  public static log(message: string, type: 'warn' | 'error' | 'log' | 'debug' = 'debug'): void {
    console[type](`>>>${caller()}:\n${message}`);
  }
}

// https://github.com/totherik/caller/blob/master/index.js
// https://stackoverflow.com/questions/16697791/nodejs-get-filename-of-caller-function
export function caller(): string {
  const originalPrepareStackTrace = Error.prepareStackTrace;
  Error.prepareStackTrace = function (_, stack) {
    Error.prepareStackTrace = originalPrepareStackTrace;
    return stack;
  };

  const stack = new Error().stack as any;

  return stack[2].toString().match(/\((.+)\)/)[1];
}
