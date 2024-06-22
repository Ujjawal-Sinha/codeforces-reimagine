import "./App.css";
import { Home, Problem } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problems" element={<Problem />} />
      </Routes>
    </>
  );
}

export default App;
