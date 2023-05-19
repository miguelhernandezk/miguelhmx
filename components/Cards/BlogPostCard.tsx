import ReactMarkdown from "react-markdown";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

import styles from "../../styles/BlogPostCard.module.css";
import { useRouter } from "next/router";

interface BlogPostCardProps {
  src: URL;
  title: string;
  text: string;
  slug: string;
}

export default function BlogPostCard({
  src,
  title,
  text,
  slug,
}: BlogPostCardProps) {
  const router = useRouter();
  return (
    <Card className={styles.cardStyle}>
      <CardActionArea onClick={() => router.push(`blog/${slug}`)}>
        <CardMedia
          component="img"
          height="140"
          image={src.href}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Box className={styles.textBody}>
            <ReactMarkdown>{text}</ReactMarkdown>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
