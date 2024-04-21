/* eslint-disable react-hooks/exhaustive-deps */
import { useLikesStore } from "../store/likesStore";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useEffect } from "react";
import likesImage from "../assets/likes.png";
import "../sass/likesStyle/LikesStyle.scss";

const Likes = () => {
  const { likedMusic, fetchLikedData } = useLikesStore();
  const handleAdd = (musicId) => {
    console.log(musicId);
  };

  useEffect(() => {
    fetchLikedData();
  }, []);

  return (
    <>
      <div className="images_box_header">
        <div className="images_img">
          <img src={likesImage} alt="" />
        </div>
        <div className="images_text_box">
          <p className="images_text">
            PUBLIC <br /> PLAYLIST
          </p>
          <h2 className="images_title">Liked Songs</h2>
          <p>davedirect3 * 34 songs</p>
        </div>
      </div>
      <div className="container">
        <div className="playlist">
          {likedMusic &&
            likedMusic.map((data) => (
              <div key={data.id} className="playlist_card">
                <div className="playlist_img">
                  <img src={data.album.images[2].url} alt={data.name} />
                  <div className="playlist_artist">
                    <h3 className="playlist_card_name">{data.name}</h3>
                    <h4 className="playlist_card_name">
                      {data.artists[0].name}
                    </h4>
                  </div>
                </div>
                <h3 className="playlist_card_name">{data.album.name}</h3>
                <IconButton onClick={() => handleAdd(data.id)}>
                  <AddCircleOutlineIcon sx={{ color: "#fff" }} />
                </IconButton>
                <audio controls src={data.preview_url} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Likes;
