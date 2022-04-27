import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Head>
        <title>Muhammad Usman — Homepage</title>
        <meta name="description" content="Homepage of Muhammad Usman" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="font-bold text-center align-middle text-2xl">
          Welcome.
        </h1>
      </main>
    </div>
  );
};

export default Home;
