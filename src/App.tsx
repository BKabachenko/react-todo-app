import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

import "./App.css";
import { Route, Routes } from "react-router";
import NavPanel from "./layout/NavPanel/NavPanel";
import Header from "./layout/Header/Header";

function App() {
  return (
  <>
  <Header title="Simple To-Do App"/>
  <NavPanel />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
  </Routes>
  </>
  );
}

export default App;
