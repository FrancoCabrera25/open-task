import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { FC, useContext } from "react";
import MenuOutlinedIcon from "@mui/icons-material/menuOutlined";
import { UIContext } from "../../context/ui";

const NavBar: FC = () => {
  const { openSideMenu } = useContext(UIContext);
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start" onClick={() => openSideMenu()}>
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6">OpenTask</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
