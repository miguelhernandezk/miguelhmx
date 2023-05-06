import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import MenuOpenIcon from "@mui/icons-material/MenuOpen";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, mb: 8 }}>
      <AppBar position="static" sx={{ background: "#1B1F24" }} elevation={0}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            color="primary"
            sx={{ fontWeight: "bold" }}
          >
            &lt;/&gt;
          </Typography>
          <Link href="/">
            <Typography
              variant="h6"
              component="p"
              sx={{
                flexGrow: 1,
                fontWeight: "bold",
                textDecoration: " none",
                color: "white",
              }}
            >
              Miguel Hernandez
            </Typography>
          </Link>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuOpenIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
