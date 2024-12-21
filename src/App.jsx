import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./slides/Home";
import Cursor from "./components/Cursor";

export default function App() {
  return (
    <Router>
      <Cursor />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
