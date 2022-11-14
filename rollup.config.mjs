import { nodeResolve } from "@rollup/plugin-node-resolve";

import copy from "rollup-plugin-copy";

const preserveDynamicImports = () => {
  return {
    name: "preserve-dynamic-imports",
    resolveDynamicImport(specifier) {
      // Never resolve dynamic imports.
      return false;
    },
    renderDynamicImport(target) {
      // Pass through the import statement unchanged.
      return {
        left: "import(",
        right: ")",
      };
    },
  };
};

export default [
  {
    input: "src/main.js",
    output: {
      file: "dist/main.js",
      format: "es",
    },
    plugins: [
      nodeResolve(),
      copy({
        targets: [
          {
            src: "src/index.html",
            dest: "dist",
          },
          {
            src: "src/manifest.json",
            dest: "dist",
          },
        ],
      }),
    ]
  },
  {
    input: "src/background.js",
    output: {
      file: "dist/background.js",
      format: "es",
    },
  },
  {
    input: "src/main-app.js",
    output: {
      file: "dist/main-app.js",
      format: "es",
    },
    plugins: [
      nodeResolve(),
    ],
  },
  {
    input: "src/custom-elements.js",
    output: {
      file: "dist/custom-elements.js",
      format: "es",
    },
    plugins: [
      nodeResolve(),
    ],
  },
  {
    input: "src/content.js",
    output: {
      file: "dist/content.js",
      format: "iife",
    },
    plugins: [
      preserveDynamicImports(),
    ],
  },
];
