import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
// ----------------------------------------------------------------------

const localRemotes = {
  MyFirstFrontend: "http://localhost:8001/assets/remoteEntry.js",
};

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: localRemotes,
      shared: ["react", "react-dom"],
    }),
  ],
});
