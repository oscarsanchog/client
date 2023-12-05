import { createContext } from 'react'
import PersonIcon from '@mui/icons-material/Person';

export const NavLinksContext = createContext()

export const NavLinksProvider = ({ children }) => {
  const navLinksArray = [
    { title: 'Sobre mí', path: '/#about', icon: <PersonIcon /> },
    // { title: 'Experiencia', path: '/#experience'},
    { title: 'Proyectos', path: '/#projects' },
    { title: 'Tech skills', path: '/#skills' },
    { title: 'Contacto', path: '/#contact' },
  ]

  return (
    <NavLinksContext.Provider value={navLinksArray}>
      {children}
    </NavLinksContext.Provider>
  )
}
