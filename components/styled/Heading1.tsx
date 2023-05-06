import { Box, Stack, Typography } from "@mui/material";
import styles from "../../styles/styled/Heading1.module.css";

interface Heading1Props {
  text: string;
}

export default function Heading1({ text }: Heading1Props) {
  return (
    <Stack spacing={3} className={styles.mainContainer}>
      <Box component="div" className={styles.line} />
      <Typography variant="h4" component="h1" className={styles.headingStyle}>
        {text}
      </Typography>
    </Stack>
  );
}
