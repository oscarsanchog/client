import { Container } from '@mui/material'
import Navbar from './components/navbar/Navbar'
import { NavLinksProvider } from './contexts/navLinks'
import Home from './view/Home'
import Projects from './view/Projects'
import Skills from './view/Skills'
import Contact from './view/Contact'
import { useEffect } from 'react'
import { getProjects, getTechnologies } from './services/DB/getData'
import { useDispatch } from 'react-redux'
import { setProjects } from './redux/slices/projectsSlice'
import { setTechnologies } from './redux/slices/technologiesSlice'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getData()
  }, [dispatch])

  const getData = async () => {
    const projects = await getProjects()
    const technologies = await getTechnologies()
    dispatch(setProjects(projects))
    dispatch(setTechnologies(technologies))
  }

  return (
    <>
      <NavLinksProvider>
        <Navbar />
      </NavLinksProvider>

      <Container sx={{ my: '2rem' }}>
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </Container>
    </>
  )
}

export default App
