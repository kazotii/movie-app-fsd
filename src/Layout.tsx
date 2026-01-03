import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

export const Layout = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>

      <main>
        <Outlet/>
      </main>

      <footer>
        <h1 className="text-amber-500">MOVIE FOOTER</h1>
      </footer>
    </div>
  );
};
