<script>
  const getDownload = function (/** @type {string} */ path) {
    console.log(`downloading ${path}`);
  };
</script>

<div class="w-full items-center block py-6 px-4">
  <div
    class="rounded-3xl py-6 px-8 bg-white min-h-[360px] min-w-[300px]
    dark:bg-zinc-800 dark:border dark:border-zinc-700 mx-auto max-w-2xl lg:max-w-5xl"
  >
    <h1 class="text-2xl font-semibold">Downloads</h1>
    <ul class="mt-4 grid grid-cols-3 gap-4">
      <li class="border rounded-xl overflow-hidden">
        <div class="bg-gradient-to-r from-indigo-300 to-amber-400">
          <img
            src="/iTerm2_alternative.png"
            alt="iterm2 icon screenshot"
            class="max-h-72"
          />
        </div>
        <div class="p-4 flex items-center justify-between">
          <div>Alternative icon for iTerm2</div>
          <a
            href="/downloads/iTerm2_alternative.icns"
            target="_blank"
            class="h-7 w-7 flex items-center text-white bg-green-500 rounded-full p-2 hover:bg-green-800 cursor-pointer"
          >
            ↓
          </a>
        </div>
      </li>
      <li class="border rounded-xl overflow-hidden">
        <div class="bg-gradient-to-r from-amber-400 to-blue-400">
          <img
            src="/alfred-battery-info.png"
            alt="iterm2 icon screenshot"
            class="aspect-auto h-full mx-auto max-h-72"
          />
        </div>
        <div class="p-4 flex items-center justify-between">
          <div>Battery info for Alfred</div>
          <a
            href="/downloads/battery-info.zip"
            target="_blank"
            class="h-7 w-7 flex items-center text-white bg-green-500 rounded-full p-2 hover:bg-green-800 cursor-pointer"
          >
            ↓
          </a>
        </div>
      </li>
    </ul>
  </div>
</div>
