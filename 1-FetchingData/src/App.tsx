import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import DataFetching from "./pages/data-fetching";
import UseRef from "./pages/react-hooks/use-ref";

function App() {
  return (
    <Router>
      <div className="page-container">
        <h1 className="heading">
          <Link to="/">Welcome to React Tutorials</Link>
        </h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data-fetching" element={<DataFetching />} />
        <Route path="/use-refs" element={<UseRef />} />
      </Routes>
    </Router>
  );
}

export default App;
