import { useContext } from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxOutLinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailLockOutlined";
import { UIContext } from "../../context/ui";

const menuItems: string[] = ["Inbox", "Starred", "Send email", "Drafts"];

const SideBar = () => {
  const { menuOpen, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer
      anchor="left"
      open={menuOpen}
      onClose={() => closeSideMenu()}
    >
      <Box
        sx={{
          width: 250,
        }}
      >
        <Box
          sx={{
            padding: "5px 10px",
          }}
        >
          <Typography variant="h4">Menú</Typography>
        </Box>
        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 ? (
                  <InboxOutLinedIcon />
                ) : (
                  <MailOutlineOutlinedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};

export default SideBar;
