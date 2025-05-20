import "./App.css";
import { MantineProvider } from "@mantine/core";
import DashBoard from "./components/dashboard";
import ThemeProvider from "./themeContext";

function App() {
  return (
    <ThemeProvider>
      <MantineProvider>
        <DashBoard />
      </MantineProvider>
    </ThemeProvider>
  );
}

export default App;
