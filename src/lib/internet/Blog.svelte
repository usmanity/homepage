<script>

  import RightArrow from "../../assets/RightArrow.svelte";

</script>
<div class="rounded-3xl py-6 px-8 bg-white min-h-min min-w-full dark:bg-zinc-800 dark:border dark:border-zinc-700">
  <div class="text-green-600 dark:text-neutral-200 font-medium font-heading text-xl">
    Blog
  </div>
  <div class="font-medium text-md text-gray-800 dark:text-neutral-100 mt-1">
    I write about music, tools, keyboards, and many other things that have interested me over the years.
  </div>
  <img src="/mango.png" class="rounded-xl mt-4 dark:brightness-50 dark:hover:brightness-90 transition-all duration-1000 ease-in-out" alt="mango"/>
  <div class=" flex flex-row-reverse font-medium font-heading text-xl">
  <div class="rounded-full bg-green-400 hover:bg-green-600 cursor-pointer transition-colors
     text-white w-8 h-8 flex items-center justify-center text-center mt-3
     dark:text-stone-900 dark:bg-green-800">
     <a href="https://blog.usmanity.com/?ref=usmanity.com" target="_blank">
      <RightArrow />
    </a>
    </div>
  </div>
</div>
