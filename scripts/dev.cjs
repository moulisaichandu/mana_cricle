// Run the local development server in this process, using the webpack compiler.
// Useful in restricted Windows workspaces where the CLI's child-process fork is unavailable.
process.env.NEXT_TELEMETRY_DISABLED = '1';
process.env.NODE_ENV = 'development';
process.env.__NEXT_DEV_SERVER = '1';
require('next/dist/server/lib/start-server').startServer({
  dir: process.cwd(), port: Number(process.env.PORT || 3000), hostname: '127.0.0.1', isDev: true,
}).catch(error => { console.error(error); process.exitCode = 1; });
