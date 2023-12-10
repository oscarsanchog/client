import { createContext } from 'react'
import PersonIcon from '@mui/icons-material/Person'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import EmailIcon from '@mui/icons-material/Email';

export const NavLinksContext = createContext()

export const NavLinksProvider = ({ children }) => {
  const navLinksArray = [
    { title: 'Sobre mí', path: '/#about', icon: <PersonIcon /> },
    // { title: 'Experiencia', path: '/#experience'},
    { title: 'Proyectos', path: '/#projects', icon: <BusinessCenterIcon /> },
    { title: 'Skills', path: '/#skills', icon: <ComputerOutlinedIcon /> },
    { title: 'Contacto', path: '/#contact', icon: <EmailIcon /> },
  ]

  return (
    <NavLinksContext.Provider value={navLinksArray}>
      {children}
    </NavLinksContext.Provider>
  )
}
