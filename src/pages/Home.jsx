import HomeHeader from "../components/home/HomeHeader";
import JumpBack from "../components/home/JumpBack";
import MadeFor from "../components/home/MadeFor";
import ResentPlayed from "../components/home/ResentPlayed";
import TopMixes from "../components/home/TopMixes";
import Uniquely from "../components/home/Uniquely";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <div className="container">
        <TopMixes />
        <MadeFor />
        <ResentPlayed />
        <JumpBack />
        <Uniquely />
      </div>
    </>
  );
};

export default Home;
