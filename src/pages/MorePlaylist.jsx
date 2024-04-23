import Dashboard from "../components/Dashboard";
import MorePlaylistComp from "../components/morePlayList/MorePlaylistComp";
import MorePlaylistHeader from "../components/morePlayList/MorePlaylistHeader";

const MorePlaylist = () => {
  return (
    <div>
      <Dashboard />
      <MorePlaylistHeader />
      <MorePlaylistComp />
    </div>
  );
};

export default MorePlaylist;
