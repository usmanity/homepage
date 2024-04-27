<div class="pt-4 w-80 h-40">
  <div
    class="rotateInX text-gray-100 text-[40px] font-bold text-center
    flex items-center justify-center rounded-full border-2 w-12 h-12 bg-gray-800 mx-auto
    cursor-pointer hover:bg-gray-900 hover:shadow-lg duration-[220ms] top-0
    border-transparent hover:border-red-400/80 active:top-1 active:duration-200 active:transition-all relative"
  >
    <span class="relative -top-0.5 select-none">×</span>
  </div>
  <div class="flex justify-center items-center h-full gap-x-4">
    <div
      class="fadeInScaleUp w-12 h-12 bg-indigo-500 rounded-full cursor-pointer transition-all
       hover:bg-indigo-600 hover:shadow-lg hover:w-16 hover:h-16 duration-[420ms]"
    ></div>
    <div
      class="fadeInScaleUp w-12 h-12 bg-indigo-500 rounded-full cursor-pointer transition-all
    hover:bg-indigo-600 hover:shadow-lg hover:w-16 hover:h-16 duration-[420ms]"
    ></div>
    <div
      class="fadeInScaleUp w-12 h-12 bg-indigo-500 rounded-full cursor-pointer transition-all
    hover:bg-indigo-600 hover:shadow-lg hover:w-16 hover:h-16 duration-[420ms]"
    ></div>
    <div
      class="fadeInScaleUp w-12 h-12 bg-indigo-500 rounded-full cursor-pointer transition-all
    hover:bg-indigo-600 hover:shadow-lg hover:w-16 hover:h-16 duration-[420ms]"
    ></div>
  </div>
</div>

<style>
  @keyframes fadeInScaleUp {
    0% {
      opacity: 0;
      margin-left: -25%;
      transform: translateX(100%) translateY(-100px) scale(0.05); /* Starting above and scaled down */
    }
    100% {
      opacity: 1;
      margin: 0;
      transform: translateY(0) scale(1); /* End at normal position and full size */
    }
  }

  .fadeInScaleUp {
    opacity: 0;
    animation: fadeInScaleUp 1s ease-in-out forwards; /* Adjust duration and timing function as needed */
  }

  @keyframes rotateInX {
    0% {
      opacity: 0;
      transform: rotate(-90deg) scale(0.5);
    }
    100% {
      opacity: 1;
      transform: rotate(0deg) scale(1);
    }
  }

  .rotateInX {
    animation: rotateInX 1.3s cubic-bezier(0.54, -0.05, 0.39, 1.09) forwards;
  }
</style>
