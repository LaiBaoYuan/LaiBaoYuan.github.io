import { defineConfig } from "rollup";
import { resolve } from "path";
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import { fileURLToPath } from "url";
import alias from "@rollup/plugin-alias";

const ROOT = fileURLToPath(import.meta.url);
const r = (p: string) => resolve(ROOT, "..", p);

export default defineConfig({
  input: [r("./src/node/cli.ts")],
  output: {
    format: "esm",
    dir: r("dist"),
  },
  plugins: [commonjs(), nodeResolve({ preferBuiltins: false }), json()],
});
