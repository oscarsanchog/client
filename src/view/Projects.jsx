import { Typography } from '@mui/material'
import MainProject from '../components/MainProject'
import { useSelector } from 'react-redux'
import Project from '../components/Project'

const Projects = () => {
  const mainProjects = useSelector((state) =>
    state.projects.filter((project) => {
      return (
        project.name === 'Mōru App' || project.name === 'Driver Race Finder'
      )
    })
  )
  const projects = useSelector((state) =>
    state.projects.filter((project) => {
      return (
        project.name !== 'Mōru App' && project.name !== 'Driver Race Finder'
      )
    })
  )

  return (
    <section id='projects'>
      <Typography mb='3rem' component='h2' variant='h3'>
        Proyectos
      </Typography>
      {mainProjects.map(
        (
          { id, name, description, image, link, repository, Technologies },
          index
        ) => {
          return (
            <MainProject
              key={id}
              name={name}
              description={description}
              image={image}
              link={link}
              repository={repository}
              Technologies={Technologies}
              position={index}
            />
          )
        }
      )}
      {projects.map(
        ({ id, name, description, image, link, repository, Technologies }) => {
          return (
            <Project
              key={id}
              name={name}
              description={description}
              image={image}
              link={link}
              repository={repository}
              Technologies={Technologies}
            />
          )
        }
      )}
    </section>
  )
}
export default Projects
