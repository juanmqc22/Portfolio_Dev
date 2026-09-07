import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// O site é servido a partir da raiz do repositório (index.html + /build).
// Por isso o build sai de app/ direto para a raiz, sem apagar assets/,
// desktop_pc/ e planet/, que são estáticos e versionados.
export default defineConfig({
  plugins: [react()],
  publicDir: false,
  build: {
    outDir: "../",
    assetsDir: "build",
    emptyOutDir: false,
  },
});
