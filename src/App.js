import { StyledEngineProvider } from '@mui/material/styles';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";

function App() {
  return (
    <>
    <StyledEngineProvider injectFirst>
      <Navbar />
      <Hero />
    </StyledEngineProvider>
    </>
  );
}

export default App;
