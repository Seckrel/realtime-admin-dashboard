import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";
import { Box } from "@mantine/core";
import { globalStyles } from "./mantineStyles";

function Layout() {
  const { classes } = globalStyles();
  return (
    <>
      <Header />
      <Box className={classes.backgroundColorScheme} component="section">
        <Menu />
        <Box component="main" className={classes.backgroundColorScheme}>
          <Main />
        </Box>
      </Box>
    </>
  );
}

export default Layout;
