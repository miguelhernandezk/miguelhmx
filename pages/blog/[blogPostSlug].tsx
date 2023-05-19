import Head from "next/head";
import { Box, Container } from "@mui/material";

import NavBar from "@/components/NavBar";
import HeaderPost from "@/components/pagesSections/[blogPostSlug]/HeaderPost";

import styles from "@/styles/[blogPost].module.css";
import BlogImageContainer from "@/components/pagesSections/[blogPostSlug]/BlogImageContainer";
import AuthorDate from "@/components/pagesSections/[blogPostSlug]/AuthorDate";
import PostBody from "@/components/pagesSections/[blogPostSlug]/PostBody";
import { getPostBySlug, getPosts } from "@/services/getPosts";
import { BlogPost } from "@/interfaces/BlogPost";
import Footer from "@/components/Footer";

interface Props {
  post: BlogPost;
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const postsResponse = await getPosts();
  if (postsResponse.error) {
    console.log("Entro a este undefined");
    return { paths: undefined, fallback: false };
  } else {
    const myPosts: BlogPost[] = postsResponse.data;
    const paths = myPosts.map((post) => ({
      params: { blogPostSlug: post.slug },
    }));
    return { paths, fallback: false };
  }
}

export async function getStaticProps({
  params,
}: {
  params: { blogPostSlug: string };
}) {
  const onSetPosts = async () => {
    const postsResponse = await getPostBySlug(params.blogPostSlug);
    if (postsResponse.error) {
      return {
        props: {
          post: undefined,
        },
      };
    } else {
      const myPost: BlogPost[] = postsResponse.data;
      return {
        props: {
          post: myPost,
        },
      };
    }
  };
  return onSetPosts();
}

export default function BlogPostPage({ post }: Props) {
  return (
    <>
      <Head>
        <title>{post?.pageTitle} - Miguel Hernández</title>
        <meta name="description" content="Miguel Hernández description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content={post.highlightImage?.file.url} />
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
          {post !== null && post !== undefined ? (
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
