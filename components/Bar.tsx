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
    <div className="bg-white border border-slate-100 mx-10 my-6 rounded-md py-4 px-8 shadow-sm">
      <div className="flex">
        {pages.map((page) => {
          return (
            <div className="mr-2" key="page.link" onClick={(page) => {}}>
              <Link href={page.link} key={page.title}>
                {page.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bar;
