import { Typography } from "@mui/material"
import Project from "../components/MainProject"

const Projects = () => {
  return (
    <section id="projects">
      <Typography mb='2rem' component='h2' variant='h3'>
        Proyectos
      </Typography>
      <Project/>
    </section>
  )
}
export default Projects