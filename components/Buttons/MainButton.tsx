import { Avatar, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import styles from "../../styles/Buttons/MainButton.module.css";
import Link from "next/link";

export default function MainButton() {
  return (
    <Avatar className={styles.mainContainerButton}>
      <Link href="#about-me">
        <IconButton>
          <KeyboardArrowDownIcon className={styles.animatedMainButtonIcon} />
        </IconButton>
      </Link>
    </Avatar>
  );
}
