import SecondaryButton from "@/components/Buttons/SecondaryButton";
import { BlogPost } from "@/interfaces/BlogPost";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

import styles from "../../../styles/pagesSections/index/BlogAndArticles.module.css";
import { useRouter } from "next/router";

export default function BlogAndArticles({ posts }: { posts: BlogPost[] }) {
  const router = useRouter();
  return (
    <Box
      component="section"
      className={`${styles.blogAndArticles} sectionMargin`}
    >
      <Stack spacing={3} direction={{ xs: "column", md: "row" }}>
        <Stack spacing={3} className={styles.mainStackChild}>
          <Typography variant="h6" component="h2" className={styles.heading2}>
            Blog & latest articles
          </Typography>
          <Typography variant="h5" component="p" className={styles.checkOut}>
            Check out my latest articles and tutorials
          </Typography>
          <Box>
            <SecondaryButton
              text="Browse all articles"
              textVariant="bold"
              onClick={() => router.push("blog")}
            />
          </Box>
        </Stack>

        <Stack spacing={3} className={styles.mainStackChild}>
          {posts.map((blogPost) => (
            <Stack key={blogPost.pageTitle} spacing={2}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                justifyContent="flex-start"
                className={styles.dateAndCategory}
              >
                <Typography
                  variant="body1"
                  component="p"
                  color="secondary"
                  className={`${styles.bold} ${styles.uppercase}`}
                >
                  {new Date(blogPost.datePublished).toLocaleDateString(
                    "es-MX",
                    {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }
                  )}{" "}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  className={`${styles.categoryText} ${styles.bold} ${styles.uppercase}`}
                  color="secondary"
                >
                  {blogPost.category}
                </Typography>
              </Stack>
              <Typography
                variant="h6"
                component="h4"
                className={styles.blogPostTitle}
              >
                <Link href={`blog${blogPost.slug}`} className={styles.links}>
                  {blogPost.pageTitle}
                </Link>
              </Typography>
              <Divider />
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
