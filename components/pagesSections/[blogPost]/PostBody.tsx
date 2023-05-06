import { Box } from "@mui/material";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styles from "../../../styles/pagesSections/[blogPost]/PostBody.module.css";
import stylesMD from "../../../styles/MDStyles.module.css";

interface PostBodyProps {
  postBody: string;
}

export default function PostBody({ postBody }: PostBodyProps) {
  return (
    <Box className={styles.bodyContainer}>
      <ReactMarkdown className={stylesMD.MDStyles}>{postBody}</ReactMarkdown>
    </Box>
  );
}
