export const Blog = ({ posts }) => {
  return (
    <div className="border m-auto my-2 w-3/5">
      <h1 className="border-b">Recent blog posts</h1>
      <div>
        {posts.map((post) => {
          return (
            <div
              className="flex text-left hover:cursor-pointer hover:opacity-50 transition-opacity"
              onClick={() => {
                location = post.url + "?referrer=homepage";
              }}
            >
              <div className="w-1/5 text-left pl-2">
                {post.date_published.split("T")[0]}
              </div>
              <div className="whitespace-nowrap text-ellipsis overflow-hidden w-4/5">
                {post.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
