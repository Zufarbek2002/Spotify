import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import PlayLists from "./pages/PlayLists";
import Login from "./pages/Login";
import MorePlaylist from "./pages/MorePlaylist";

const App = () => {
  const token = localStorage.getItem("token");
  return (
    <Router>
      {token ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/like" element={<Likes />} />
          <Route path="/playlist/:id" element={<PlayLists />} />
          <Route path="/moreplaylist/:id" element={<MorePlaylist />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      ) : (
        <Login />
      )}
    </Router>
  );
};

export default App;
