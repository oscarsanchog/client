import Navbar from './components/navbar/Navbar'
import { NavLinksProvider } from './contexts/navLinks'

const App = () => {
  return (
    <>
      <NavLinksProvider>
        <Navbar />
      </NavLinksProvider>
      <div>Portfolio</div>
    </>
  )
}

export default App
