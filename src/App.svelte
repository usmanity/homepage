<script lang="ts">
  import { Route, Router } from "svelte-routing";
  import MainContent from "./lib/MainContent.svelte";
  import Downloads from "./lib/downloads/Downloads.svelte";
  import Dots from "./lib/projects/Dots.svelte";
  import Stfuh from "./lib/projects/STFUH.svelte";
  export let url = "";
</script>

<Router {url}>
  <main class="bg-gray-100 min-h-screen dark:bg-stone-900 dark:text-white">
    <Route path="/downloads" component={Downloads} />
    <Route path="/projects/dots" component={Dots} />
    <Route path="/projects/STFUH" component={Stfuh} />
    <Route path="/"><MainContent /></Route>
  </main>
</Router>

<style>
</style>
