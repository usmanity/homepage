// @ts-ignore
export const Blog = ({ posts }) => {
  return (
    <div className="border md:my-0 md:m-auto my-2 w-full md:w-3/5">
      <div className="flex border-b dark:bg-slate-800 h-8 sm:h-12 items-center">
        <div className="w-full">Recent blog posts</div>
      </div>
      <div>
        {posts.map((post: any) => {
          return (
            <div
              className="flex text-left hover:cursor-pointer hover:opacity-50 transition-opacity
               border-b dark:border-gray-400 h-8 sm:h-12 items-center last-of-type:border-0"
              key={post.id}
              onClick={() => {
                // @ts-ignore
                window.location = post.url + "?referrer=homepage";
              }}
            >
              <div className="w-1/3 sm:w-1/4 text-left pl-2 tabular-nums">
                {post.date_published.split("T")[0]}
              </div>
              <div className="w-2/3 sm:w-3/4 whitespace-nowrap text-ellipsis overflow-hidden">
                {post.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
