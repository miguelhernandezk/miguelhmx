import Head from "next/head";
import { Inter } from "next/font/google";
import { Box, Container, Grid, Input } from "@mui/material";

import NavBar from "@/components/NavBar";
import HeaderPost from "@/components/pagesSections/[blogPost]/HeaderPost";

import styles from "../styles/[blogPost].module.css";
import BlogImageContainer from "@/components/pagesSections/[blogPost]/BlogImageContainer";
import AuthorDate from "@/components/pagesSections/[blogPost]/AuthorDate";
import PostBody from "@/components/pagesSections/[blogPost]/PostBody";
import { getPosts } from "@/services/getPosts";
import { useEffect, useState } from "react";
import { BlogPost, BlogPostContentful } from "@/interfaces/BlogPost";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import BlogPostCard from "@/components/Cards/BlogPostCard";
import { url } from "inspector";
import { EntryCollection } from "contentful";

const inter = Inter({ subsets: ["latin"] });

export default function BlogPostPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>();
  const [partialLoading, setPartialLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSetPosts = async () => {
    const postsCollectionResponse = await getPosts();
    if (postsCollectionResponse.error) {
      setError(true);
      setErrorMessage(postsCollectionResponse.helperText as string);
      setPartialLoading(false);
    } else {
      setError(false);
      setErrorMessage("");
      setPartialLoading(false);
      const myPosts: BlogPost[] = postsCollectionResponse.data;
      setPosts(myPosts);
    }
  };
  useEffect(() => {
    onSetPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Blog - Miguel Hernández</title>
        <meta name="description" content="Miguel Hernández description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box component="main">
        <NavBar />
        <Container>
          <HeaderPost pageTitle="Blog" />
          <Grid container spacing={2}>
            {posts !== undefined
              ? posts.map((post) => (
                  <Grid item xs={12} md={6} lg={3}>
                    <BlogPostCard
                      src={
                        post.highlightImage?.file?.url !== null &&
                        post.highlightImage?.file?.url !== undefined
                          ? new URL(`https:${post.highlightImage.file.url}`)
                          : new URL(
                              "https://plus.unsplash.com/premium_photo-1665159465429-575f5e08eff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80"
                            )
                      }
                      title={post.pageTitle}
                      text={post.summary}
                      slug={post.slug}
                    />{" "}
                  </Grid>
                ))
              : null}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
