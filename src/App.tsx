import "./App.css";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  MantineThemeOverride,
} from "@mantine/core";
import Layout from "./Layout";
import { useLocalStorage } from "@mantine/hooks";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const theme: MantineThemeOverride = {
    primaryShade: { dark: 8, light: 6 },
    colorScheme: colorScheme
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider withCSSVariables theme={theme}>
        <Layout />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
