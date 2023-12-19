import { Button, Grid, Typography } from '@mui/material'
import MainProject from '../components/MainProject'
import { useSelector } from 'react-redux'
import Project from '../components/Project'
import { useState } from 'react'

const Projects = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(false)

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

      {showMoreProjects && (
        <Grid container justifyContent='center' gap='5.9rem'>
          {projects.map(
            ({
              id,
              name,
              description,
              image,
              link,
              repository,
              Technologies,
            }) => {
              return (
                <Grid item key={id}>
                  <Project
                    key={id}
                    name={name}
                    description={description}
                    image={image}
                    link={link}
                    repository={repository}
                    Technologies={Technologies}
                  />
                </Grid>
              )
            }
          )}
        </Grid>
      )}

      <Button
        sx={{ margin: 'auto', display: 'block' }}
        onClick={() => setShowMoreProjects(!showMoreProjects)}
      >
        {showMoreProjects ? 'Ver menos' : 'Mostrar más proyectos'}
      </Button>
    </section>
  )
}
export default Projects
