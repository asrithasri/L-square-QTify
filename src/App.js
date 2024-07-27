import { StyledEngineProvider } from '@mui/material/styles';
import Navbar from "./Components/Navbar/Navbar.jsx";


function App() {
  return (
    <>
    <StyledEngineProvider injectFirst>
      <Navbar />
    </StyledEngineProvider>
    </>
  );
}

export default App;
