import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Stack,
  SvgIconTypeMap,
  Typography,
} from "@mui/material";
import BookRoundedIcon from "@mui/icons-material/BookRounded";

import styles from "../../styles/MainTopicCard.module.css";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Link from "next/link";

interface MainTopicCardProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  text: string;
  externalUrl?: string;
}

export default function MainTopicCard({
  Icon,
  title,
  text,
  externalUrl,
}: MainTopicCardProps) {
  return (
    <Card className={styles.cardContainer}>
      <CardActionArea
        className={styles.cardActionArea}
        onClick={() =>
          externalUrl !== undefined
            ? window.location.assign(externalUrl)
            : alert("This section is under construction")
        }
      >
        <CardContent className={styles.cardContent}>
          <Stack>
            <Avatar className={styles.iconContainer}>
              <Icon className={styles.iconStyle} />
            </Avatar>
            <CardHeader title={title} className={styles.cardHeader} />
            <Typography
              variant="body1"
              component="p"
              className={styles.cardText}
            >
              {text}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
