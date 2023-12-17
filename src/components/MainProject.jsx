import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material'

import { getProjects } from '../services/DB/get'

import GitHubIcon from '@mui/icons-material/GitHub'

const Project = () => {
  
  return (
    <Card sx={{transition:'0.2s', '&:hover': { transform: 'scale(1.05)'}}}>
      <CardActionArea sx={{ display: 'flex', justifyContent: 'left' }}>
        <CardMedia
          component='img'
          image='https://via.placeholder.com/200x200'
          sx={{ width: '50rem', height: '25rem' }}
        />

        <Box>
          
          <CardContent>
            <Typography component='h3' variant='h4'>
              Título
            </Typography>

            <Typography maxWidth='20rem' component='p' variant='body'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              labore, earum voluptatem voluptatum reprehenderit dolorum delectus
              saepe tenetur porro quibusdam quod et officia. Voluptatem nam
              perspiciatis officiis fugiat vitae dicta!
            </Typography>
          </CardContent>

          <CardActions>
            <IconButton>
              <GitHubIcon sx={{ m: 'auto' }} />
            </IconButton>
          </CardActions>
        </Box>
      </CardActionArea>
    </Card>
  )
}
export default Project
