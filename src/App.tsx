import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

import "./App.css";
import { Route, Routes } from "react-router";
import NavPanel from "./components/NavPanel";

function App() {
  return (
  <>
  <NavPanel />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
  </Routes>
  </>
  );
}

export default App;
