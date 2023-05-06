import Counter from "@/components/Counters/Counter";
import { Box, Stack, Typography } from "@mui/material";

import styles from "../../../styles/pagesSections/index/AboutMe.module.css";
import Link from "next/link";

export default function AboutMe() {
  return (
    <Box
      id="about-me"
      component="section"
      className={`${styles.aboutMe} sectionMargin`}
    >
      <Typography
        variant="h6"
        component="h2"
        className={`${styles.heading2} ${styles.blogArticlesBT}`}
      >
        About me
      </Typography>
      <Stack
        spacing={3}
        direction={{ xs: "column", lg: "row" }}
        className={styles.aboutMeMainStack}
      >
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h5"
            component="h3"
            sx={{ fontWeight: "bold", mb: 2 }}
            className={styles.developingSitesHeading}
          >
            I&apos;ve been developing websites since 2021
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="secondary"
            sx={{ mb: 3 }}
          >
            Yeah, yeah. I know. Am I a developer or a sales engineer? Truth
            is... I&apos;m both. I started learning web development in 2021 and
            I discovered this is one of my biggest passions in life. That&apos;s
            why I&apos;m switching careers.
          </Typography>
          {/* <SecondaryButton
            text="More about me"
            textVariant="bold"
            fontSize={20}
          /> */}
        </Box>
        <Box>
          <Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 3, sm: 8 }}
            >
              <Counter quantity={2} tag="Years of experience" />
              <Counter quantity={10} tag="Succesful projects" />
            </Stack>
            <Typography variant="body1" component="p" color="secondary">
              I&apos;ve worked at&nbsp;
              <Link
                href="https://smartairfilters.com/en/"
                target="_blank"
                className="no-change-color-links"
              >
                Smart Air
              </Link>{" "}
              and I&apos;ve developed sites for some other minor customers.
              Developing not only frontend but backend as well in languages like
              Javascript and Python. But if you&apos;re wondering in which
              language I can do amazing stuff, then the answer is Javascript. I
              work with Next.js and Nest.js
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
