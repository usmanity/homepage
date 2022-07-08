export const About = () => {
  return (
    <div
      className="border w-full align-top 
    m-auto md:w-1/3 md:mr-2 md:mt-0 my-4"
    >
      <div className="flex border-b dark:bg-slate-800 h-8 items-center">
        <div className="w-full">About</div>
      </div>
      <div className="flex border-b h-8 items-center text-left">
        <div className="w-1/3 sm:w-1/4 text-left pl-2">Name</div>
        <div className="w-2/3 sm:w-3/4">Muhammad Usman</div>
      </div>
      <div className="flex border-b h-8 items-center text-left">
        <div className="w-1/3 sm:w-1/4 text-left pl-2">Occupation</div>
        <div className="w-2/3 sm:w-3/4">Software Engineer</div>
      </div>
      <div className="flex h-8 items-center text-left">
        <div className="w-1/3 sm:w-1/4 text-left pl-2">Company</div>
        <div className="w-2/3 sm:w-3/4">Square - Block</div>
      </div>
    </div>
  );
};
