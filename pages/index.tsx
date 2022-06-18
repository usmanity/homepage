import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen max-h-min">
      <Head>
        <title>Muhammad Usman — Homepage</title>
        <meta name="description" content="Homepage of Muhammad Usman" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7293487990175847"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <main className="h-full">
        <div
          className=" flex flex-col h-full justify-center text-center
        bg-white dark:bg-black dark:text-white
        "
        >
          <h1 className="font-bold">
            <span className="font-emoji">👋</span> Hello.
          </h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
