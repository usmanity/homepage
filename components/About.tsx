export const About = () => {
  return (
    <div className="border m-auto md:w-1/3 md:mr-2 md:mt-0 w-full align-top">
      <div className="flex border-b dark:bg-slate-800 h-8 items-center">
        <div className="w-full">About</div>
      </div>
      <div className="flex border-b h-8 items-center">
        <div className="w-2/5 text-left pl-2">Name</div>
        <div>Muhammad Usman</div>
      </div>
      <div className="flex border-b h-8 items-center">
        <div className="w-2/5 text-left pl-2">Occupation</div>
        <div>Software Engineer</div>
      </div>
      <div className="flex h-8 items-center">
        <div className="w-2/5 text-left pl-2">Company</div>
        <div>Square - Block</div>
      </div>
    </div>
  );
};
