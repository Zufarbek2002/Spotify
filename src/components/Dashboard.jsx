/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Box, Button, IconButton, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddBoxIcon from "@mui/icons-material/AddBox";
import like from "../assets/likes.png";
import { getToken } from "../token/getToken";
import { useMusicStore } from "../store/musicStore";
import "../sass/Dashboard.scss";

const Dashboard = () => {
  const { music, fetchData } = useMusicStore();
  useEffect(() => {
    fetchData();
  }, []);
  const handleUrl = (url) => {
    localStorage.setItem("album-data", url);
  };
  const handleToken = async () => {
    await getToken();
    window.location.href = "/";
  };
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
          <span className="icon_name">Home</span>
        </Typography>
      </NavLink>

      <Link>
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
          <span className="icon_name">Search</span>
        </Typography>
      </Link>

      <Link>
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
          <span className="icon_name">Your Library</span>
        </Typography>
      </Link>

      <Box sx={{ mt: 3 }}>
        <Link>
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
            <span className="icon_name">Create Playlist</span>
          </Typography>
        </Link>

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
            <span className="icon_name">Liked Songs</span>
          </Typography>
        </NavLink>
      </Box>
      <Box textAlign="center" mt={5} className="del">
        <Button onClick={handleToken} variant="contained">
          Get Token
        </Button>
      </Box>
      <div className="dashboar_box">
        {music &&
          music.splice(0, 8).map((data) => (
            <NavLink
              key={data.id}
              to={`/playlist/${data.id}`}
              onClick={() => handleUrl(data.href)}
            >
              <h3 className="dashboar_card_name">{data.name}</h3>
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
