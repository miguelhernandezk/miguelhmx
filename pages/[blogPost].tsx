import Head from "next/head";
import { Box, Container } from "@mui/material";

import NavBar from "@/components/NavBar";
import HeaderPost from "@/components/pagesSections/[blogPost]/HeaderPost";

import styles from "../styles/[blogPost].module.css";
import BlogImageContainer from "@/components/pagesSections/[blogPost]/BlogImageContainer";
import AuthorDate from "@/components/pagesSections/[blogPost]/AuthorDate";
import PostBody from "@/components/pagesSections/[blogPost]/PostBody";
import { getPostBySlug } from "@/services/getPosts";
import { useEffect, useState } from "react";
import { BlogPost } from "@/interfaces/BlogPost";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function BlogPostPage() {
  const router = useRouter();
  const [post, setPost] = useState<BlogPost>();
  const [partialLoading, setPartialLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSetPosts = async (slug: string) => {
    const postsResponse = await getPostBySlug(slug);
    if (postsResponse.error) {
      setError(true);
      setErrorMessage(postsResponse.helperText as string);
      setPartialLoading(false);
    } else {
      setError(false);
      setErrorMessage("");
      setPartialLoading(false);
      const myPost: BlogPost = postsResponse.data;
      // router.push(myPost.slug, undefined, { shallow: true });
      setPost(myPost);
    }
  };
  useEffect(() => {
    if (
      router.isReady &&
      router.query.blogPost !== undefined &&
      router.query.blogPost !== null
    ) {
      onSetPosts(
        typeof router.query.blogPost === "string"
          ? router.query.blogPost
          : "not found"
      );
    }
  }, [router.isReady, router.query.blogPost]);

  return (
    <>
      <Head>
        <title>{post?.pageTitle} - Miguel Hernández</title>
        <meta name="description" content="Miguel Hernández description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box component="main">
        <NavBar />
        <Container>
          <Box className={styles.headingContainer}>
            <HeaderPost
              pageTitle={
                post !== null && post !== undefined ? post.pageTitle : ""
              }
            />
          </Box>
        </Container>
        {error === true ? errorMessage : null}
        {post?.highlightImage !== null &&
        post?.highlightImage !== undefined &&
        post?.highlightImage.file.url !== "" ? (
          <BlogImageContainer src={post.highlightImage.file.url} />
        ) : null}
        <Container className={styles.postContainer}>
          <AuthorDate
            avatarSrc={
              post !== undefined &&
              post.author !== undefined &&
              post.author.profilePicture !== undefined
                ? post.author.profilePicture
                : undefined
            }
          />
          {partialLoading === false && post !== null && post !== undefined ? (
            <PostBody postBody={post.body} />
          ) : null}
        </Container>
        <Container>
          <Footer />
        </Container>
      </Box>
    </>
  );
}
