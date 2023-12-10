import { useContext, useState } from 'react'

import { NavLinksContext } from '../../contexts/navLinks'

import NavListDrawer from './NavListDrawer'
import {
  AppBar,
  Box,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const navLinksArray = useContext(NavLinksContext)

  return (
    <>
      <AppBar>
        <Toolbar component='nav' sx={{ display: 'grid' }}>
          <Grid container spacing={0}>
            <Grid item xs={4} sx={{ m: 'auto' }}>
              <List sx={{ display: { xs: 'none', sm: 'flex' } }}>
                {navLinksArray.map(({ title, path }) => (
                  <ListItem disablePadding key={title}>
                    <ListItemButton sx={{ width: 91, p: 0 }} to={path}>
                      <ListItemText
                        sx={{ textAlign: 'center' }}
                        primary={title}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={4} sx={{ mt: 1.4, textAlign: 'center' }}>
              <Box
                component='img'
                src='https://res.cloudinary.com/dwadajlyw/image/upload/v1701698414/portfolio/theme/logo.png'
                sx={{
                  width: '50px',
                  borderRadius: '50%',
                }}
              />
            </Grid>

            <Grid item xs={4} sx={{ textAlign: 'center' }} >
              <List sx={{ display: 'flex', gap: 4, justifyContent:'right'}}>
                <ListItem sx={{px:0, width: '24px'}} >
                  <ListItemButton sx={{px: 0 }} >
                    <LinkedInIcon sx={{ m: 'auto'}} />
                  </ListItemButton>
                </ListItem>

                <ListItem sx={{px:0, width: '24px'}} >
                  <ListItemButton sx={{px: 0, width: 24}}>
                    <GitHubIcon  sx={{ m: 'auto' }} />
                  </ListItemButton>
                </ListItem>

                <ListItem sx={{px:0, width: '24px'}} >
                  <ListItemButton sx={{px: 0, width: 24}}>
                    <EmailIcon sx={{ m: 'auto' }} />
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{ display: { xs: 'flex', sm: 'none' } }}
        open={open}
        anchor='right'
        onClose={() => setOpen(false)}
      >
        <NavListDrawer setOpen={setOpen} />
      </Drawer>
    </>
  )
}
export default Navbar
