/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useMorePlaylistStore } from "../../store/morePlaylist";
import { useParams } from "react-router-dom";
import DataRenderComp from "../DataRenderComp";
// import "../../sass/morePlaylist/MorePlaylistStyle.scss"

const MorePlaylistComp = () => {
  const { moreMusic, fetchMoreMusic } = useMorePlaylistStore();
  const { id } = useParams();

  useEffect(() => {
    fetchMoreMusic(id);
  }, []);

  return (
    <div className="container more_playlist_box">
      {moreMusic &&
        moreMusic.map((data) => <DataRenderComp key={data.id} data={data} />)}
    </div>
  );
};

export default MorePlaylistComp;
