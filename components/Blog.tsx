// @ts-ignore
export const Blog = ({ posts }) => {
  return (
    <div className="border md:my-0 md:m-auto my-2 md:w-2/3 w-full">
      <h1 className="border-b">Recent blog posts</h1>
      <div>
        {posts.map((post: any) => {
          return (
            <div
              className="flex text-left hover:cursor-pointer hover:opacity-50 transition-opacity"
              key={post.id}
              onClick={() => {
                // @ts-ignore
                window.location = post.url + "?referrer=homepage";
              }}
            >
              <div className="w-1/4 text-left pl-2">
                {post.date_published.split("T")[0]}
              </div>
              <div className="whitespace-nowrap text-ellipsis overflow-hidden w-3/4">
                {post.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
