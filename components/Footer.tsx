import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <Box className={`${styles.footer} sectionMargin`}>
      <Stack spacing={3}>
        <Box>
          <Stack
            direction="row"
            spacing={3}
            className={styles.avatarNameRoleContainer}
          >
            <Avatar className={styles.avatar} />
            <Stack>
              <Typography className={styles.name}>Miguel Hernández</Typography>
              <Typography className={styles.role} color="secondary">
                Automation sales engineer
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box>
          <Stack direction="row" className={styles.iconList}>
            <Link href="https://www.facebook.com/miguelhmx" target="_blank">
              <IconButton>
                <FacebookRoundedIcon />
              </IconButton>
            </Link>
            <Link href="https://www.twitter.com/miguelhmx" target="_blank">
              <IconButton>
                <TwitterIcon />
              </IconButton>
            </Link>
            <Link href="https://www.instagram.com/miguelhmx" target="_blank">
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </Link>
          </Stack>
        </Box>
        <Divider />
        <Box>
          <Stack className={styles.bottomFooter}>
            {/* <List>
              <ListItem>Inicio</ListItem>
            </List> */}
            <Typography>
              Copyright © Miguel Hernández | Designed by Miguel Hernández
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
