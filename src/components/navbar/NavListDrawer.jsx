import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useContext } from "react";
import { NavLinksContext } from "../../contexts/navLinks";

const NavListDrawer = ({ setOpen }) => {
  const navLinksArray = useContext(NavLinksContext)
  
  return (
    <Box sx={{ width: 250 }} component='nav'>
      <List>
        {navLinksArray.map(({ title, path, icon }) => (
          <ListItem key={title}>
            <ListItemButton to={path} onClick={() => setOpen(false)}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
export default NavListDrawer