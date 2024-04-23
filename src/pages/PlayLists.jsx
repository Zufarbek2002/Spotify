// import { useParams } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Playlist from "../components/playlists/Playlist";
import PlaylistHeader from "../components/playlists/PlaylistHeader";

const PlayLists = () => {
  return (
    <div>
      <Dashboard />
      <PlaylistHeader />
      <Playlist />
    </div>
  );
};

export default PlayLists;
