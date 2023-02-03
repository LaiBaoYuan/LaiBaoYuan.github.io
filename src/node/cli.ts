import { createServer } from "vite";
import { version } from "../../package.json";
import name from './b'
console.log(name);

console.log(version);

const createDevServer = async () => {
  const server = await createServer({
    server: {
      port: 9000,
    },
  });
  await server.listen();
  server.printUrls();
};

createDevServer();
