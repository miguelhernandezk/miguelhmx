import Heading1 from "@/components/styled/Heading1";
import { Box } from "@mui/material";

import styles from "@/styles/pagesSections/[blogPostSlug]/HeaderPost.module.css";

interface HeaderPostProps {
  pageTitle: string;
}

export default function HeaderPost({ pageTitle }: HeaderPostProps) {
  return (
    <Box className={styles.headingContainer}>
      <Heading1 text={pageTitle} />
    </Box>
  );
}
