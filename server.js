const { join } = require('path');
const polka = require('polka');
const chokidar = require('chokidar');
const esbuild = require('esbuild');
const { esbuildOptions } = require('./scripts/build-prod.js');

const app = polka();
const { PORT = 3000 } = process.env;
const dir = join(__dirname, 'public');
const serve = require('serve-static')(dir);

(async () => {
  const builder = () => esbuild.build(esbuildOptions);
  chokidar.watch('src/**/*.*', {
    persistent: true,
    ignoreInitial: false,
    usePolling: false,
  }).on('all', async () => {
    await builder();
  });
})();

app
  .use(serve)
  .listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Running on http://localhost:${PORT}`);
  });
