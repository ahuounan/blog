// https://github.com/totherik/caller/blob/master/index.js
// https://stackoverflow.com/questions/16697791/nodejs-get-filename-of-caller-function
export function caller(depth = 2): string | null {
  const originalPrepareStackTrace = Error.prepareStackTrace;
  Error.prepareStackTrace = function (_, stack) {
    Error.prepareStackTrace = originalPrepareStackTrace;
    return stack;
  };

  const stack = (new Error().stack as unknown) as CallStack[];
  const dirname = process.env.PWD || __dirname;
  const regexp = new RegExp(`${dirname}/(.*.tsx?):.*`);

  return stack[depth].toString().match(regexp)?.[1] ?? null;
}

interface CallStack {
  toString: () => string;
}
