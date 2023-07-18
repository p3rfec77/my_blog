// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { client } from "@/lib/client";

export default async function posts(req, res) {
  const { start, end } = req.query;

  if (isNaN(Number(start)) || isNaN(Number(start))) {
    return res.status(400).json({
      error: "Data Invalid",
    });
  }

  const { posts } = await loadPosts(start, end);
  res.status(200).json({
    posts,
  });
}

export const loadPosts = async (start, end) => {
  const query = `{
    "posts": *[_type == "post"] | order(publishedDate desc) [${start}...${end}] {_id, publishedDate, title, slug, description, image},
    "total": count(*[_type == "post"])
  }`;

  const { posts, total } = await client.fetch(query);

  return {
    posts,
    total,
  };
};
