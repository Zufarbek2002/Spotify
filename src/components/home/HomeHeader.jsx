/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import { useMusicStore } from "../../store/musicStore";
import "../../sass/homeStyle/HomeHeader.scss";

const HomeHeader = () => {
  const { music, fetchData } = useMusicStore();

  useEffect(() => {
    fetchData();
  }, []);
  const handleUrl = (url) => {
    localStorage.setItem("album-data", url);
  };
  return (
    <div className="home_header">
      <h2 className="home_title">Good afternoon</h2>
      <div className="home_box">
        {music ? (
          music.slice(0, 6).map((data) => (
            <Link
              key={data.id}
              to={`/playlist/${data.id}`}
              onClick={() => handleUrl(data.href)}
              className="home_card"
            >
              <div className="home_img">
                <img src={data.images[0].url} alt={data.name} />
              </div>
              <h3 className="home_card_name">{data.name}</h3>
            </Link>
          ))
        ) : (
          <Navigate to="/login" />
        )}
      </div>
    </div>
  );
};

export default HomeHeader;
