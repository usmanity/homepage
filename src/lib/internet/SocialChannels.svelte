<script>
  import Channel from "./Channel.svelte";

</script>
<div class="rounded-3xl py-6 px-8 bg-white min-h-min min-w-full dark:bg-zinc-800 dark:border dark:border-zinc-700">
  <div class="text-green-600 dark:text-neutral-100 font-medium font-heading text-xl">
    Social Channels
  </div>
  <div class="font-medium text-md text-gray-800 mt-1">
    Find me online in various places.
  </div>
  <div class="list-of-channels mt-3">
    <Channel name="Github" color="slate" link="https://github.com/usmanity" />
    <Channel name="Instagram" color="orange" link="https://instagram.com/usmanity" />
    <Channel name="Tumblr" color="purple" link="https://photography.usmanity.com" />
  </div>
</div>
