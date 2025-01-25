import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        "bootstrap/dist/css/bootstrap.min.css", // Marking this as external to avoid bundling
      ],
    },
  },
});
