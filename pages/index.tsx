import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { About } from "../components/About";
import { Blog } from "../components/Blog";
import { Contact } from "../components/Contact";

export async function getServerSideProps() {
  const response = await fetch("https://blog.usmanity.com/feed/json");
  const jsonResponse = await response.json();
  return {
    props: {
      blog: jsonResponse,
    },
  };
}

// @ts-ignore
const Home: NextPage = ({ blog }) => {
  const [hidden, setHidden] = useState(false);
  console.log({
    blog,
    items: blog.items,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      const lsHelloValue = localStorage.getItem("hideHello");
      if (lsHelloValue) {
        setHidden(true);
      } else {
        setTimeout(() => {
          localStorage.setItem("hideHello", "true");
          setHidden(true);
        }, 4000);
      }
    }
  }, [hidden]);

  return (
    <div
      className="
      flex flex-col h-screen max-h-min
      motion-reduce:transition-none motion-reduce:hover:transform-none
    "
    >
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

      <main className="h-full transition-all">
        <div
          className="flex h-full justify-center items-center text-center
        bg-white dark:bg-black dark:text-white
        "
        >
          <div
            className={`${
              hidden ? "hidden" : ""
            } items-center transition-all animate-[fadeOut_4s_ease-out] delay-1000`}
          >
            <h1 className="flex justify-center font-bold animate-[wave] text-3xl">
              <span className="font-emoji transition-transform animate-[wave_3s_ease-in]">
                👋
              </span>{" "}
              Hello.
            </h1>
          </div>
          <div
            className={`${
              !hidden ? "hidden" : ""
            } transition-all px-4 w-full flex flex-col md:flex-row align-top`}
          >
            <About />
            <Contact />
            <Blog posts={blog.items} />
          </div>
          {/* <div>
            {blog?.items &&
              blog.items.map((item: any) => {
                return <p>{item.title}</p>;
              })}
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default Home;
