import { Typography } from '@mui/material'
import MainProject from '../components/MainProject'
import { useSelector } from 'react-redux'

const Projects = () => {
  const mainProjects = useSelector((state) =>
    state.projects.filter((project) => {
      return (
        project.name === 'Mōru App' || project.name === 'Driver Race Finder'
      )
    })
  )
  console.log(mainProjects)

  return (
    <section id='projects'>
      <Typography mb='2rem' component='h2' variant='h3'>
        Proyectos
      </Typography>
      {mainProjects.map(
        ({ id, name, description, image, link, repository, Technologies }) => {
          return (
            <MainProject
              key={id}
              name={name}
              description={description}
              image={image}
              link={link}
              repository={repository}
              technologies={Technologies}
            />
          )
        }
      )}
    </section>
  )
}
export default Projects
