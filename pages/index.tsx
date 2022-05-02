import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <Head>
        <title>Muhammad Usman — Homepage</title>
        <meta name="description" content="Homepage of Muhammad Usman" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-white rounded-sm shadow-sm min-w-max mx-auto">
          <h1 className="font-bold text-center align-middle text-2xl">
            <span className="font-emoji">👋</span> Hello.
          </h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
