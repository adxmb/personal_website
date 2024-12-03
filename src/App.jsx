import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./slides/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
