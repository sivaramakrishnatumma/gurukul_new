import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import routes from "./routes";

function App() {
  const routing = useRoutes(routes(true));

  return <ThemeProvider theme={theme}>{routing}</ThemeProvider>;
}

export default App;
