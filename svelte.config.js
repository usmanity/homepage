import adapter from "@sveltejs/adapter-static";
const dev = process.argv.includes("dev");

const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      strict: false,
    }),
    paths: {
      base: "",
    },
  },
};

export default config;
