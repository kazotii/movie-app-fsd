import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const Layout = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>

      <main>
        <Outlet/>
      </main>

      <footer>Ты в самом низу страницы</footer>
    </div>
  );
};
