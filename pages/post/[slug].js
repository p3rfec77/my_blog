import React from "react";
import Head from "next/head";

import { format } from "date-fns";

import { Article, Content, Title } from "@/components";

import { client } from "@/lib/client";

import styles from "./styles.module.scss";

const Post = ({ post }) => {
  const date = format(new Date(post.publishedDate), "dd MMM yyyy");
  return (
    <>
      <Head>
        <title>{post.meta_title}</title>
      </Head>

      <Article backUrl="/" classname={styles.post}>
        <Title className={styles.postTitle}>{post.title}</Title>
        <p className={styles.postDate}>{date}</p>
        <Content body={post.body} />
      </Article>
    </>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const query = '*[_type == "post"] {slug}';

  const posts = await client.fetch(query);
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`;
  const post = await client.fetch(query);

  return {
    props: {
      post,
    },
  };
};
