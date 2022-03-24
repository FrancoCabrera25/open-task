import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";
import { FC, useContext } from "react";
import MenuOutlinedIcon from "@mui/icons-material/menuOutlined";
import { UIContext } from "../../context/ui";
import NextLink from "next/link";

const NavBar: FC = () => {
  const { openSideMenu } = useContext(UIContext);
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start" onClick={() => openSideMenu()}>
          <MenuOutlinedIcon />
        </IconButton>
        <NextLink href="/" passHref>
          <Link underline="none" color="white">
            <Typography variant="h6">OpenTask</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
