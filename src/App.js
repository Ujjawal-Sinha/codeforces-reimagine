import "./App.css";
import { Home, Problem, LoginSignup } from "./pages";
import { Routes, Route } from "react-router-dom";
import Problem from "./Problem"; // Adjust the path if necessary

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problems" element={<Problem />} />
        <Route path="/auth" element={<LoginSignup />} />
      </Routes>
    </>
  );
}

export default App;
