import Wrapper from "./Components/Wrapper";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Util/Theme.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper />
    </ThemeProvider>
  );
}

export default App;
