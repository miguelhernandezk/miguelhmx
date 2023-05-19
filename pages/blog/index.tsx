import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";

import NavBar from "@/components/NavBar";
import HeaderPost from "@/components/pagesSections/[blogPostSlug]/HeaderPost";

import { getPosts } from "@/services/getPosts";
import { useEffect, useState } from "react";
import { BlogPost } from "@/interfaces/BlogPost";
import Footer from "@/components/Footer";
import BlogPostCard from "@/components/Cards/BlogPostCard";

export default function BlogPostPage() {
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
          {error === true ? errorMessage : null}
          <Grid container spacing={2}>
            {posts !== undefined && partialLoading === false
              ? posts.map((post) => (
                  <Grid key={post.id} item xs={12} md={6} lg={3}>
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
          <Footer />
        </Container>
      </Box>
    </>
  );
}
