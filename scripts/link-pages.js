const fs = require('fs');
const path = require('path');

const componentsPagePath = 'src/components/pages';
const pagesPath = 'src/pages';

const componentsPages = fs.readdirSync(componentsPagePath, {
  withFileTypes: true
});

for (const page of componentsPages) {
  const targetPath = path.resolve(path.join(componentsPagePath, page.name));
  const destPath = path.resolve(path.join(pagesPath, page.name));
  if (fs.existsSync(destPath)) {
    fs.rmSync(destPath);
  }
  fs.symlinkSync(targetPath, destPath, { type: page.type });
}
