import * as React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5">Villa of Sweden</Typography>
        <Typography variant="h5">+255 715 168 659</Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
