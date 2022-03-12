
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/menuOutlined';


const NavBar: FC = () => {
  return (
   <AppBar position= 'sticky' elevation={0}>
       <Toolbar>
        <IconButton size='large' edge='start'>
         <MenuOutlinedIcon />   
        </IconButton>
        <Typography variant= 'h6'>OpenTask</Typography>
       </Toolbar>
   </AppBar>
  )
}

export default NavBar