import { Container } from '@mui/material'
import Navbar from './components/navbar/Navbar'
import { NavLinksProvider } from './contexts/navLinks'
import Home from './view/Home'
import Projects from './view/Projects'
import Skills from './view/Skills'
import Contact from './view/Contact'

const App = () => {
  return (
    <>
      <NavLinksProvider>
        <Navbar />
      </NavLinksProvider>

      <Container sx={{my: '2rem'}}>
        <Home/>
        <Projects/>
        <Skills/>
        <Contact/>
      </Container>
    </>
  )
}

export default App
