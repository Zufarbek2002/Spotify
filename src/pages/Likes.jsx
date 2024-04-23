import Dashboard from "../components/Dashboard";
import LikesHeader from "../components/likes/LikesHeader";
import LikesMusicList from "../components/likes/LikesMusicList";
import "../sass/likesStyle/LikesStyle.scss";

const Likes = () => {
  return (
    <>
      <Dashboard />
      <LikesHeader />
      <LikesMusicList />
    </>
  );
};

export default Likes;
