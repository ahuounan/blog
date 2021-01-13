const fs = require("fs");
const path = require("path");

const testPathRegex = /\w*__tests__\w*/;
const componentsPagePath = "src/components/pages";
const pagesPath = "src/pages";

function linkDir(dir, parent) {
  for (const page of dir) {
    if (testPathRegex.test(page.name)) {
      continue;
    }
    const targetPath = path.resolve(path.join(componentsPagePath, parent, page.name));
    const destPath = path.resolve(path.join(pagesPath, parent, page.name));

    if (fs.existsSync(destPath)) {
      fs.rmSync(destPath, { recursive: true });
    }

    if (page.isDirectory()) {
      fs.mkdirSync(destPath);
      linkDir(
        fs.readdirSync(targetPath, {
          withFileTypes: true
        }),
        page.name
      );
    } else {
      fs.symlinkSync(targetPath, destPath, { type: page.type });
    }
  }
}

const componentsPagesDir = fs.readdirSync(componentsPagePath, {
  withFileTypes: true
});

linkDir(componentsPagesDir, "/");
