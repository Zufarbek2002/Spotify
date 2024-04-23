import likesImage from "../../assets/likes.png";

const LikesHeader = () => {
  return (
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
  );
};

export default LikesHeader;
