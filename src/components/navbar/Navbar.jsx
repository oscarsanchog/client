import { useContext, useState } from 'react'

import { NavLinksContext } from '../../contexts/navLinks'

import NavListDrawer from './NavListDrawer'

import {
  AppBar,
  Box,
  Drawer,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
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
      <AppBar position='sticky'>
        <Toolbar component='nav'>
          <Grid container spacing={0}>
            <Grid item xs={4} sx={{ m: 'auto' }}>
              <IconButton
                sx={{ display: { xs: 'flex', md: 'none' } }}
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>

              <List
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  gap: 3,
                  width: 'fit-content',
                }}
              >
                {navLinksArray.map(({ title, path }) => (
                  <ListItem disablePadding key={title}>
                    <ListItemButton sx={{ p: 0 }} to={path}>
                      <ListItemText
                        sx={{ whiteSpace: 'nowrap' }}
                        primary={title}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={4} sx={{ mt: 1, textAlign: 'center' }}>
              <Link href='#home'>
                <Box
                  component='img'
                  src='https://res.cloudinary.com/dwadajlyw/image/upload/v1702507432/portfolio/theme/logoSinFondo.png'
                  sx={{
                    width: '70px',
                    borderRadius: '50%',
                  }}
                />
              </Link>
            </Grid>

            <Grid item xs={4} sx={{ textAlign: 'center', m: 'auto' }}>
              <List
                sx={{
                  display: { xs: 'none', sm: 'flex' },
                  gap: 4,
                  justifyContent: 'right',
                }}
              >
                <ListItem sx={{ px: 0, width: '24px' }}>
                  <ListItemButton sx={{ px: 0 }}>
                    <LinkedInIcon sx={{ m: 'auto' }} />
                  </ListItemButton>
                </ListItem>

                <ListItem sx={{ px: 0, width: '24px' }}>
                  <ListItemButton sx={{ px: 0, width: 24 }}>
                    <GitHubIcon sx={{ m: 'auto' }} />
                  </ListItemButton>
                </ListItem>

                <ListItem sx={{ px: 0, width: '24px' }}>
                  <ListItemButton sx={{ px: 0, width: 24 }}>
                    <EmailIcon sx={{ m: 'auto' }} />
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{ display: { xs: 'flex', md: 'none' } }}
        open={open}
        anchor='left'
        onClose={() => setOpen(false)}
      >
        <NavListDrawer setOpen={setOpen} />
      </Drawer>
    </>
  )
}
export default Navbar
