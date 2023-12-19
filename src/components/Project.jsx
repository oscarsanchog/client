import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'
import { useState } from 'react'

const Project = ({
  id,
  name,
  description,
  image,
  link,
  repository,
  Technologies,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false)

  return (
    <Card
      sx={{
        maxWidth: '20rem',
        transition: '0.2s',
        '&:hover': { transform: 'scale(1.05)' },
        mb: '4rem',
      }}
    >
      <Link href={link} target='_blank'>
        <CardMedia height='250rem' component='img' image={image} title={name} />
      </Link>

      <CardContent>
        <Link href={link} target='_blank'>
          <Typography textAlign='center' mb='1rem' component='h3' variant='h4'>
            {name}
          </Typography>
        </Link>

        <Typography mb='1rem' maxWidth='20rem' component='p' variant='body'>
          {showFullDescription ? description : `${description.slice(0, 73)}...`}
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
          <Link
            href={repository}
            target='_blank'
            component='a'
            sx={{ margin: 'auto', mb: '1rem' }}
          >
            <GitHubIcon />
          </Link>
        )}
      </CardActions>
    </Card>
  )
}
export default Project
