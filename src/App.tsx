import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage";
import { Route, Routes } from "react-router";
import s from "./App.module.scss";
import MainLayout from "./layout/MainLayout/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
      <div className={s.blueSpot}></div>
      <div className={s.purpleSpot}></div>
    </>
  );
}

export default App;
