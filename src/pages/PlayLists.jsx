// import { useParams } from "react-router-dom";
import Playlist from "../components/playlists/Playlist";
import PlaylistHeader from "../components/playlists/PlaylistHeader";

const PlayLists = () => {

  return (
    <div >
      <PlaylistHeader />
      <Playlist />
    </div>
  );
};

export default PlayLists;
