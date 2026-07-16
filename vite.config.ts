import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@api": "/src/api",
      "@assets": "/src/assets",
      "@consts": "/src/consts",
      "@hooks": "/src/hooks",
      "@interfaces": "/src/interfaces",
      "@layouts": "/src/layouts",
      "@pages": "/src/pages",
      "@providers": "/src/providers",
      "@routes": "/src/routes",
      "@utils": "/src/utils",
      "@data": "/src/data",
    },
  },
});
