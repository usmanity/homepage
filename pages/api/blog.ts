// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string;
// };

async function fetchBlog() {
  //   const response = await fetch("https://blog.usmanity.com/feed/json");
  //   const jsonResponse = await response.json();
  return {
    testing: "testing message",
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //   const blog = await fetchBlog();
  res.status(200).json({ blog: "hello" });
}
