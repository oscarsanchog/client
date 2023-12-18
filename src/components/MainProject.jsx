import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Link,
  Typography,
} from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'
import { useState } from 'react'

const MainProject = ({
  id,
  name,
  description,
  image,
  link,
  repository,
  Technologies,
  position,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false)

  return (
    <Card
      sx={{
        transition: '0.2s',
        '&:hover': { transform: 'scale(1.05)' },
        mb: '4rem',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'left' }}>
        {position % 2 === 0 ? (
          <>
            <Link href={link} target='_blank'>
              <CardMedia
                component='img'
                image={image}
                sx={{ width: '40rem', height: '25rem' }}
              />
            </Link>

            <Box m='auto'>
              <CardContent>
                <Link href={link} target='_blank'>
                  <Typography
                    textAlign='center'
                    mb='1rem'
                    component='h3'
                    variant='h4'
                  >
                    {name}
                  </Typography>
                </Link>

                <Typography
                  component='h5'
                  fontStyle='italic'
                  textAlign='center'
                  mb='1rem'
                  variant='subtitle'
                >
                  2023
                </Typography>

                <Typography
                  mb='1rem'
                  maxWidth='20rem'
                  component='p'
                  variant='body'
                >
                  {showFullDescription
                    ? description
                    : `${description.slice(0, 73)}...`}
                </Typography>

                <Button
                  sx={{ margin: 'auto', display: 'block' }}
                  onClick={() => setShowFullDescription(!showFullDescription)}
                >
                  {showFullDescription ? 'Ver menos' : 'Ver más'}
                </Button>
              </CardContent>

              <CardActions>
                {repository && (
                  <IconButton sx={{margin:'auto'}}>
                    <GitHubIcon/>
                  </IconButton>
                )}
              </CardActions>
            </Box>
          </>
        ) : (
          <>
            <Box m='auto'>
              <CardContent>
                <Link href={link} target='_blank'>
                  <Typography
                    textAlign='center'
                    mb='1rem'
                    component='h3'
                    variant='h4'
                  >
                    {name}
                  </Typography>
                </Link>

                <Typography
                  component='h5'
                  fontStyle='italic'
                  textAlign='center'
                  mb='1rem'
                  variant='subtitle'
                >
                  2023
                </Typography>

                <Typography
                  mb='1rem'
                  maxWidth='20rem'
                  component='p'
                  variant='body'
                >
                  {showFullDescription
                    ? description
                    : `${description.slice(0, 73)}...`}
                </Typography>

                <Button
                  sx={{ margin: 'auto', display: 'block' }}
                  onClick={() => setShowFullDescription(!showFullDescription)}
                >
                  {showFullDescription ? 'Ver menos' : 'Ver más'}
                </Button>
              </CardContent>

              <CardActions >
                {repository && (
                  <IconButton sx={{margin:'auto'}}>
                    <GitHubIcon />
                  </IconButton>
                )}
              </CardActions>
            </Box>

            <Link href={link} target='_blank'>
              <CardMedia
                component='img'
                image={image}
                sx={{ width: '40rem', height: '25rem' }}
              />
            </Link>
          </>
        )}
      </Box>
    </Card>
  )
}
export default MainProject
