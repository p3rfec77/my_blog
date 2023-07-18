import React, { useState } from "react";

import {
  Button,
  BuyMeCoffee,
  Cover,
  Post,
  PostGrid,
  Section,
  SocialNetwork,
  Title,
} from "@/components";

import { loadPosts } from "./api/posts.api";
import Head from "next/head";

const LOAD_MORE_STEP = 4;

export default function Home({ initialPosts, total }) {
  const [posts, setPosts] = useState(initialPosts);
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP);
  const [loading, setLoading] = useState(false);

  const isLoadButton = total > loadedAmount;
  const getMorePosts = async () => {
    setLoading(true);

    try {
      const data = await fetch(
        `/api/posts.api?start=${loadedAmount}&end=${
          loadedAmount + LOAD_MORE_STEP
        }`
      ).then((response) => response.json());

      setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
      setPosts([...posts, ...data.posts]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div>
      <Head>
        <title>My blog</title>
      </Head>

      <Section>
        <Cover title="Kiril<br/> Goygin" />
        <SocialNetwork />
        <BuyMeCoffee />
      </Section>

      <Section>
        <Title>New Post</Title>
        <PostGrid>
          {posts.map((post) => (
            <Post key={post.slug.current} {...post} />
          ))}
        </PostGrid>
        {isLoadButton && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button onClick={getMorePosts} disabled={loading}>
              Load more posts...
            </Button>
          </div>
        )}
      </Section>
    </div>
  );
}

export const getServerSideProps = async () => {
  const { posts, total } = await loadPosts(0, LOAD_MORE_STEP);

  return {
    props: {
      initialPosts: posts,
      total,
    },
  };
};
