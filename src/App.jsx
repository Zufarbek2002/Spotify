import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Likes from "./pages/Likes";
import PlayLists from "./pages/PlayLists";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Router>
      <Dashboard />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/like" element={<Likes />} />
        <Route path="/playlist/:id" element={<PlayLists />} />
      </Routes>
    </Router>
  );
};

export default App;
