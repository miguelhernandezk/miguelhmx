import { Stack, Typography } from "@mui/material";

import styles from "../../styles/Counters/Counter.module.css";

interface CounterProps {
  quantity: number;
  tag: string;
}

export default function Counter({ quantity, tag }: CounterProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      className={styles.counterContainer}
    >
      <Typography variant="h4" component="p" className={styles.number}>
        {quantity}&nbsp;
      </Typography>
      <Typography variant="h6" component="p" className={styles.tag}>
        {tag}
      </Typography>
    </Stack>
  );
}
