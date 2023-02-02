import { createServer } from "vite";
import { name } from "../shared/shared";
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
