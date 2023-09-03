import { Nitro } from "nitropack";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  devtools: { enabled: true },
  typescript: {
    strict: false,
    typeCheck: false,
  },
  imports: {
    // Auto-import pinia stores defined in `~/stores`
    dirs: ["stores", "stores/**"],
  },
  modules: [
    // Installed modules
    "@pinia/nuxt",
  ],
  pinia: {
    autoImports: ["defineStore", "storeToRefs"],
  },
  hooks: {
    "nitro:build:before": (nitro: Nitro) => {
      nitro.options.moduleSideEffects.push("reflect-metadata");
    },
  },
  ssr: false,
});
