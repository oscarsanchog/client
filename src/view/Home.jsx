import { Box, Button, Typography } from '@mui/material'

const Home = () => {
  return (
    <section id='home'>
      <Typography variant='h5' component='p'>
        Hola, mi nombre es
      </Typography>
      <Box ml='3rem'>
        <Typography mt='3rem' variant='h1'>
          Óscar Sancho
        </Typography>
        <Typography ml='.5rem' variant='h4' component='h2'>
          Full Stack Developer
        </Typography>
        <Typography mt='3rem' width='44rem'>
          Vivo en Chile y me enfoco la entrega de soluciones de alta calidad y
          valor. Disfruto colaborando en equipos multidisciplinarios para
          alcanzar objetivos comunes y me fascina conectar con otros
          profesionales apasionados por el desarrollo de software. Contáctame
          para crear juntos.
        </Typography>
        <Button sx={{ my: '1rem', right: 9 }} component='a'>
          Curriculum Vitae
        </Button>
      </Box>
    </section>
  )
}
export default Home
