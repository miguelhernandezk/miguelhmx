import MainButton from "@/components/Buttons/MainButton";
import Heading1 from "@/components/styled/Heading1";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

import styles from "../../../styles/pagesSections/index/HeaderSection.module.css";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import Link from "next/link";

export default function HeaderSection() {
  return (
    <Box component="section" className={`sectionMargin`}>
      <Stack
        spacing={{ xs: 3, md: 20 }}
        direction={{ xs: "column", md: "row" }}
      >
        <Box component="div" className={styles.mainStackChild}>
          <Heading1 text="Hi, I'm Miguel, your new partner" />
          <Typography
            variant="body1"
            component="p"
            sx={{ mb: 4 }}
            color="secondary"
          >
            Hey! I&apos;m happy to see you&apos;re here. Welcome to my personal
            web space. Here you can find useful information about the projects I
            have previously worked on. But that&apos;s not all. You will also
            find inspiration to keep working toward your goals. So, either we
            work together or, at the very least, I will help you to succeed.
          </Typography>
          <Box component="div" className={styles.mainButton}>
            <MainButton />
          </Box>
        </Box>
        <Stack spacing={3} className={styles.mainStackChild}>
          <Stack
            spacing={3}
            direction={{ xs: "column", sm: "row", md: "column" }}
          >
            <Box component="div">
              <Stack spacing={1}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: "bold", mb: 2 }}
                >
                  About me
                </Typography>
                <Typography variant="body1" component="p" color="secondary">
                  Not only am I a fullstack web developer, but I&apos;m also an
                  expert in industrial automation technology, a technical sales
                  engineer, writer and a self-improvement lover.
                </Typography>
                <Box>
                  <Link href="#about-me">
                    <SecondaryButton
                      text="See more"
                      onClick={() => {
                        return 1;
                      }}
                    />
                  </Link>
                </Box>
              </Stack>
            </Box>
            <Divider sx={{ mb: 4 }} />
            <Box component="div">
              <Stack spacing={1}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: "bold", mb: 2 }}
                >
                  My work
                </Typography>
                <Typography variant="body1" component="p" color="secondary">
                  It&apos;s up to you to choose what your main interest topic
                  might be. I&apos;m here to help. I&apos;m sure I can surely
                  help you in any of my specialties.
                </Typography>
                <Box>
                  <Link href="#main-topics">
                    <SecondaryButton
                      text="See more"
                      onClick={() => {
                        return 1;
                      }}
                    />
                  </Link>
                </Box>
              </Stack>
            </Box>
          </Stack>
          <Divider />
          <Box component="div">
            <Typography variant="h6" component="h3" className={styles.heading2}>
              follow me
            </Typography>
            <Stack direction="row">
              <Link href="https://www.facebook.com/miguelhmx">
                <IconButton>
                  <FacebookRoundedIcon />
                </IconButton>
              </Link>
              <Link href="https://www.twitter.com/miguelhmx">
                <IconButton>
                  <TwitterIcon />
                </IconButton>
              </Link>
              <Link href="https://www.instagram.com/miguelhmx">
                <IconButton>
                  <InstagramIcon />
                </IconButton>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
