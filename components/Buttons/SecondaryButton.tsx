import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import styles from "../../styles/Buttons/SecondaryButton.module.css";

interface SecondaryButtonProps {
  text: string;
  textVariant?: "bold" | "normal";
  fontSize?: number;
  onClick: () => void;
}

export default function SecondaryButton({
  text,
  textVariant,
  fontSize,
  onClick,
}: SecondaryButtonProps) {
  return (
    <Button
      className={`${styles.secondaryButton} ${
        textVariant === "bold" ? styles.boldText : null
      }`}
      onClick={onClick}
    >
      <Typography
        variant="body1"
        component="p"
        className={`${textVariant === "bold" ? styles.boldText : null}`}
        fontSize={
          fontSize !== null && fontSize !== undefined ? fontSize : undefined
        }
      >
        {text}&nbsp;
      </Typography>
      <ArrowForwardIcon className={styles.iconButton} />
      <Box className={styles.growingLine} />
    </Button>
  );
}
