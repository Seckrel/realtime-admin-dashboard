import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";
import { useMantineTheme } from "@mantine/core";

function Layout() {
  const theme = useMantineTheme();
  return (
    <>
      <Header />
      <section>
        <Menu />
        <main>
          <Main />
        </main>
      </section>
    </>
  );
}

export default Layout;
