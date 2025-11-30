import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage";
import { Route, Routes } from "react-router";
import NavPanel from "./layout/NavPanel/NavPanel";
import Header from "./layout/Header/Header";
import s from "./App.module.scss"

function App() {
  return (
  <>
  <Header title="Simple To-Do App"/>
  <NavPanel />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
  </Routes>
  <div className={s.blueSpot}></div>
  <div className={s.purpleSpot}></div>
  </>
  );
}

export default App;
