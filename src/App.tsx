import "./App.css";
import { MantineProvider } from "@mantine/core";
import Layout from "./Layout";

function App() {
  return (
    <MantineProvider withCSSVariables>
      <Layout />
    </MantineProvider>
  );
}

export default App;
