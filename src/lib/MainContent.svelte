<script>
  import AboutMe from "./bento/AboutMe.svelte";
  import LogoView from "./bento/LogoView.svelte";
  import Projects from "./bento/Projects.svelte";
  import TheInternet from "./bento/TheInternet.svelte";

</script>
<div class="w-full items-center block py-6 px-4">
  <div class="mx-auto max-w-2xl lg:max-w-5xl flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-5">
    <div class="about-me-section">
      <AboutMe />
    </div>
    <div class="logo-view-section">
      <LogoView />
    </div>
    <div class="projects-section col-span-2">
      <Projects />
    </div>
    <div class="around-the-internet col-span-2">
      <TheInternet />
    </div>
  </div>
</div>
