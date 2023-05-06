import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";

import styles from "../../../styles/pagesSections/[blogPost]/AuthorDate.module.css";

interface AuthorDateProps {
  avatarSrc?: URL;
}

export default function AuthorDate({ avatarSrc }: AuthorDateProps) {
  return (
    <Box className={`sectionMargin ${styles.AuthorDateContainer}`}>
      <Stack spacing={3}>
        <Stack
          spacing={3}
          direction={{ xs: "column", sm: "row" }}
          className={styles.secondaryStack}
        >
          <Stack
            direction="row"
            spacing={2}
            className={styles.avatarNameContainer}
          >
            <Avatar
              className={styles.avatar}
              src={
                avatarSrc !== undefined && avatarSrc !== null
                  ? avatarSrc.href
                  : undefined
              }
            />
            <Typography
              variant="body1"
              component="p"
              className={styles.authorName}
            >
              Miguel Hernández
            </Typography>
          </Stack>
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
              {new Date().toLocaleDateString("es-MX", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}{" "}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              className={`${styles.categoryText} ${styles.bold} ${styles.uppercase}`}
              color="secondary"
            >
              Articles
            </Typography>
          </Stack>
        </Stack>
        <Divider />
      </Stack>
    </Box>
  );
}
