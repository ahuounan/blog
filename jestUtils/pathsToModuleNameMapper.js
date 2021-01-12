// Credit to
// https://github.com/kulshekhar/ts-jest/blob/master/src/config/paths-to-module-name-mapper.ts

// we don't need to escape all chars, so commented out is the real one
// const escapeRegex = (str: string) => str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
const escapeRegex = str => str.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");

module.exports = {
  pathsToModuleNameMapper(mapping, { prefix = "" } = Object.create(null)) {
    const jestMap = {};
    for (const fromPath of Object.keys(mapping)) {
      let pattern;
      const toPaths = mapping[fromPath];
      // check that we have only one target path
      if (toPaths.length === 0) {
        continue;
      }

      // split with '*'
      const segments = fromPath.split(/\*/g);
      if (segments.length === 1) {
        const paths = toPaths.map(target => {
          const enrichedPrefix = prefix !== "" && !prefix.endsWith("/") ? `${prefix}/` : prefix;

          return `${enrichedPrefix}${target}`;
        });
        pattern = `^${escapeRegex(fromPath)}$`;
        jestMap[pattern] = paths.length === 1 ? paths[0] : paths;
      }

      if (segments.length === 2) {
        const paths = toPaths.map(target => {
          const enrichedPrefix = prefix !== "" && !prefix.endsWith("/") ? `${prefix}/` : prefix;

          return `${enrichedPrefix}${target.replace(/\*/g, "$1")}`;
        });
        pattern = `^${escapeRegex(segments[0])}(.*)${escapeRegex(segments[1])}$`;
        jestMap[pattern] = paths.length === 1 ? paths[0] : paths;
      }
    }

    return jestMap;
  }
};
