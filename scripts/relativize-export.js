const fs = require('fs');
const path = require('path');

const outputDir = path.join(process.cwd(), 'out');
const rewriteFrom = '/K-BEAUTY/';
const rewriteTo = './';
const textExtensions = new Set(['.html', '.js', '.json', '.txt', '.css', '.xml', '.map']);

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      walk(entryPath);
      continue;
    }

    const extension = path.extname(entry.name);
    if (!textExtensions.has(extension)) {
      continue;
    }

    const content = fs.readFileSync(entryPath, 'utf8');
    const rewritten = content.split(rewriteFrom).join(rewriteTo);

    if (rewritten !== content) {
      fs.writeFileSync(entryPath, rewritten);
    }
  }
}

if (!fs.existsSync(outputDir)) {
  throw new Error(`Missing output directory: ${outputDir}`);
}

walk(outputDir);