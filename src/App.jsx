import "./App.css";
import { MantineProvider } from "@mantine/core";
import DashBoard from "./components/dashboard";
function App() {
  return (
    <MantineProvider>
      <DashBoard />
    </MantineProvider>
  );
}

export default App;
