/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { usePlayListsStore } from "../../store/playListsStore";
import "../../sass/playListStyle/PlayListHeader.scss";

const PlaylistHeader = () => {
  const { urlMusic, fetchUrlData } = usePlayListsStore();

  useEffect(() => {
    fetchUrlData();
  }, []);

  return (
    <div className="playlist_header">
      {urlMusic.length > 0 && (
        <>
          <div className="playlist_img">
            <img
              className="img"
              src={urlMusic[0].images[0].url}
              alt={urlMusic[0].name}
            />
          </div>
          <div className="playlist_text_box">
            <p className="playlist_text">{urlMusic[0].type}</p>
            <h2 className="playlist_title">{urlMusic[0].name}</h2>
            <p>{urlMusic[0].description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default PlaylistHeader;
