import { useContext, useState } from 'react'
import NavListDrawer from './NavListDrawer'
import { NavLinksContext } from '../../contexts/navLinks'
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'


const Navbar = () => {
  const [open, setOpen] = useState(false)
  const navLinksArray = useContext(NavLinksContext)

  return (
    <>
      <AppBar position='static'>
        <Toolbar component='nav'>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }}}>
            {navLinksArray.map(({ title, path }) => (
              <Button key={title} to={path} color='inherit'>
                {title}
              </Button>
            ))}
          </Box>

          <Box
            component='img'
            src='https://res.cloudinary.com/dwadajlyw/image/upload/v1701698414/portfolio/theme/logo.png'
            sx={{ width: '50px', borderRadius: '50%', margin: 'auto' }}
          />

          <IconButton
            sx={{ display: { xs: 'flex', sm: 'none' } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{ display: { xs: 'flex', sm: 'none' }}}
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
