<script>
  import Blog from "../internet/Blog.svelte";
  import SocialChannels from "../internet/SocialChannels.svelte";

</script>
<div>
  <h2 class="text-3xl md:text-4xl font-medium font-heading text-green-400 dark:text-green-600 my-6 pl-8">Around the Internet</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    <Blog />
    <SocialChannels />
  </div>
</div>
