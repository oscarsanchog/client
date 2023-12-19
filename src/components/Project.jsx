import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'

const Project = ({
  id,
  name,
  description,
  image,
  link,
  repository,
  Technologies,
}) => {
  return (
    <Card>
      <CardMedia component='img' image={image} title={name} />
      <CardContent>
        <Typography component='h3'>{name}</Typography>
        <Typography component='p' variant='body'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {repository && (
          <IconButton>
            <GitHubIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  )
}
export default Project
