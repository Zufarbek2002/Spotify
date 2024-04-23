/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useMorePlaylistStore } from "../../store/morePlaylist";

const MorePlaylistHeader = () => {
  const { moreMusic, fetchMoreMusic } = useMorePlaylistStore();

  useEffect(() => {
    fetchMoreMusic();
  }, []);

  return (
    <div className="playlist_header">
      {moreMusic.length > 0 && (
        <>
          <div className="playlist_img">
            <img
              className="img"
              src={moreMusic[0].images[0].url}
              alt={moreMusic[0].name}
            />
          </div>
          <div className="playlist_text_box">
            <p className="playlist_text">{moreMusic[0].type}</p>
            <h2 className="playlist_title">{moreMusic[0].name}</h2>
            <p>{moreMusic[0].description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default MorePlaylistHeader;
