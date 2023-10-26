<script>
  import Blog from "../internet/Blog.svelte";
  import SocialChannels from "../internet/SocialChannels.svelte";

</script>
<div>
  <h2 class="text-3xl font-medium font-heading text-green-400 my-6">Around the Internet</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Blog />
    <SocialChannels />
  </div>
</div>
