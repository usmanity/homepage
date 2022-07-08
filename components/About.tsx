export const About = () => {
  return (
    <div
      className="border align-top 
    m-auto w-full md:w-2/5 md:mr-2 md:mt-0 my-4 max-h-48"
    >
      <div className="flex border-b dark:bg-slate-800  h-8 sm:h-12 items-center">
        <div className="w-full">About</div>
      </div>
      <div className="flex border-b  h-8 sm:h-12 items-center text-left">
        <div className="w-1/3 sm:w-2/5 text-left pl-2">Name</div>
        <div className="w-2/3 sm:w-3/5">Muhammad Usman</div>
      </div>
      <div className="flex border-b  h-8 sm:h-12 items-center text-left">
        <div className="w-1/3 sm:w-2/5 text-left pl-2">Occupation</div>
        <div className="w-2/3 sm:w-3/5">Software Engineer</div>
      </div>
      <div className="flex  h-8 sm:h-12 items-center text-left">
        <div className="w-1/3 sm:w-2/5 text-left pl-2">Company</div>
        <div className="w-2/3 sm:w-3/5">Square - Block</div>
      </div>
    </div>
  );
};
