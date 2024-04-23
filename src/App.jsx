import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import PlayLists from "./pages/PlayLists";
import Login from "./pages/Login";

const App = () => {
  const token = localStorage.getItem("token")
  return (
    <Router>
      {token ? (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/like" element={<Likes />} />
        <Route path="/playlist/:id" element={<PlayLists />} />
      </Routes>
      ) : <Login />}
    </Router>
  );
};

export default App;
