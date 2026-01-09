import { Outlet } from "react-router-dom";
import { Header } from "../widgets/Header";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};