const esbuild = require('esbuild');

const esbuildOptions = {
  entryPoints: ['src/index.js'],
  bundle: true,
  loader: { ".js": "jsx" },
  minify: true,
  sourcemap: true,
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  outbase: '../src',
  outfile: 'public/dist/index.js',
  platform: "browser",
  define: {
    "process.env.NODE_ENV": '"development"',
    global: "window",
  }
};

esbuild.buildSync(esbuildOptions);

module.exports = {
  esbuildOptions,
}
