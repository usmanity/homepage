import Link from "next/link";

const pages = [
  {
    link: "/about",
    title: "About",
  },
  {
    link: "https://blog.usmanity.com",
    title: "Blog",
  },
  {
    title: "Home",
    link: "/",
  },
];

const Bar = () => {
  return (
    <div className="border border-slate-100 mx-10 my-6 rounded-3xl py-4 px-8 shadow-sm">
      <div className="flex">
        {pages.map((page) => {
          return (
            <div className="mr-2" onClick={(page) => {}}>
              <Link href={page.link}>{page.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bar;
