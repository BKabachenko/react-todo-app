import { Outlet } from "react-router";
import NavPanel from "../NavPanel/NavPanel";
import Header from "../Header/Header";
import s from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <div className={s.container}>
      <Header title="Simple To-Do App" />
      <NavPanel />
      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
