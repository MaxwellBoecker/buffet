// Copied from https://github.com/strapi/strapi/blob/master/scripts/link.js
// author: alexandrebodin

const { join } = require('path');
const execa = require('execa');
const fs = require('fs-extra');
const { promisify } = require('util');
const glob = promisify(require('glob').glob);

async function run() {
  const packageDirs = await glob('packages/*');

  console.log('Linking all packages');

  const packages = packageDirs.map(dir => ({
    dir,
    pkgJSON: fs.readJSONSync(join(dir, 'package.json')),
  }));

  await Promise.all(
    packages.map(({ dir }) => execa('yarn', ['link'], { cwd: dir }))
  );

  const packageNames = packages.map(p => p.pkgJSON.name).join(' ');
  console.log(`Package names: \n ${packageNames}\n`);
}

run().catch(err => console.error(err));
