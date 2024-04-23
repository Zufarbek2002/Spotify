import { NavLink } from "react-router-dom";
import { Box, IconButton, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddBoxIcon from "@mui/icons-material/AddBox";
import like from "../assets/likes.png";
import "../sass/Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <NavLink to="/">
        <Typography
          className="text"
          sx={{
            color: "#b2b2b2",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <IconButton color="inherit">
            <HomeIcon fontSize="large" />
          </IconButton>
          Home
        </Typography>
      </NavLink>

      <NavLink to="/search">
        <Typography
          className="text"
          sx={{
            color: "#b2b2b2",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <IconButton color="inherit">
            <SearchIcon fontSize="large" />
          </IconButton>
          Search
        </Typography>
      </NavLink>

      <NavLink to="/library">
        <Typography
          className="text"
          sx={{
            color: "#b2b2b2",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <IconButton color="inherit">
            <LibraryMusicIcon fontSize="large" />
          </IconButton>
          Your Library
        </Typography>
      </NavLink>

      <Box sx={{ mt: 3 }}>
        <NavLink to="/playlist">
          <Typography
            className="text"
            sx={{
              color: "#b2b2b2",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <IconButton color="inherit">
              <AddBoxIcon fontSize="large" />
            </IconButton>
            Create Playlist
          </Typography>
        </NavLink>

        <NavLink to="/like">
          <Typography
            className="text"
            sx={{
              color: "#b2b2b2",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div className="likes_img">
              <img src={like} />
            </div>
            Liked Songs
          </Typography>
        </NavLink>
      </Box>
    </div>
  );
};

export default Dashboard;
