import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import DataFetching from "./pages/data-fetching";
import UseRef from "./pages/react-hooks/use-ref";
import ReactKeys from "./pages/react-keys";

// React Query Setup
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ReactQuery from "./pages/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
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
          <Route path="/react-keys" element={<ReactKeys />} />
          <Route path="/react-query" element={<ReactQuery />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
