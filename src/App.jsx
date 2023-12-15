import { Container } from '@mui/material'
import Navbar from './components/navbar/Navbar'
import { NavLinksProvider } from './contexts/navLinks'

const App = () => {
  return (
    <>
      <NavLinksProvider>
        <Navbar />
      </NavLinksProvider>
      <Container>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          perferendis, vitae et molestias at harum magnam voluptatibus eius
          dicta velit, ipsa nobis aspernatur autem repellat ex animi eos rerum
          molestiae?
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          perferendis, vitae et molestias at harum magnam voluptatibus eius
          dicta velit, ipsa nobis aspernatur autem repellat ex animi eos rerum
          molestiae?
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          perferendis, vitae et molestias at harum magnam voluptatibus eius
          dicta velit, ipsa nobis aspernatur autem repellat ex animi eos rerum
          molestiae?
        </div>
      </Container>
    </>
  )
}

export default App
