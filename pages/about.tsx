import Bar from "../components/Bar";

const About = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <Bar />
      <div
        className="relative bg-white px-6 pt-10 pb-8 
      shadow-sm ring-1 ring-gray-900/5 sm:mx-auto sm:min-w-max sm:max-w-lg md:max-w-screen-lg sm:rounded-lg sm:px-10"
      >
        <h1 className="text-2xl font-semibold mb-2 -mt-2">About</h1>
        <div className="m-w-full">
          <p>I&apos;m a software engineer based in Portland, Oregon.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
