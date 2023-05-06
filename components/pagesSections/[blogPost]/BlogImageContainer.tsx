import { Box } from "@mui/material";
import Image from "next/image";
import { Parallax } from "react-parallax";

import styles from "../../../styles/pagesSections/[blogPost]/BlogImageContainer.module.css";

interface BlogImageContainerProps {
  src: string;
}

export default function BlogImageContainer({ src }: BlogImageContainerProps) {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={src}
      bgImageAlt="the cat"
      strength={500}
    >
      <Box className={styles.BlogImageContainer}></Box>
    </Parallax>
  );
}
