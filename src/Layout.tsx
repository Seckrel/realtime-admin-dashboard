import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";

function Layout() {
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
