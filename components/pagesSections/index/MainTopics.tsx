import { Box, Grid, Typography } from "@mui/material";
import MainTopicCard from "../../Cards/MainTopicCard";
import BookRoundedIcon from "@mui/icons-material/BookRounded";

import styles from "../../../styles/pagesSections/index/MainTopics.module.css";

export default function MainTopics() {
  return (
    <Box
      id="main-topics"
      component="section"
      className={`${styles.mainTopics} sectionMargin`}
    >
      <Typography
        variant="h6"
        component="h2"
        className={`${styles.heading2} ${styles.blogArticlesBT}`}
      >
        Main Topics
      </Typography>
      <Grid container spacing={3} justifyContent="space-between">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <MainTopicCard
            Icon={BookRoundedIcon}
            title="Web development"
            text="Portfolio projects, tech blog and my developer skills."
            externalUrl="https://techblog.miguelhernandezmx.com/"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <MainTopicCard
            Icon={BookRoundedIcon}
            title="Industrial Automation (Spanish)"
            text="Tutorials and stuff on industrial automation."
            externalUrl="https://www.youtube.com/channel/UC6HLZHD-q5AcD9_K95U04iw"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <MainTopicCard
            Icon={BookRoundedIcon}
            title="Entrepreneur (Spanish)"
            text="My entrepreneur projects."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <MainTopicCard
            Icon={BookRoundedIcon}
            title="Self Improvement (Spanish)"
            text="Learn how to achive your goals by improving yourself."
          />
        </Grid>
      </Grid>
    </Box>
  );
}
