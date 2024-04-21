import { useState } from "react";
import { useMusicStore } from "../../store/musicStore";
import "../../sass/homeStyle/HomeHeader.scss";

const HomeHeader = () => {
  const { music, fetchData } = useMusicStore();

  useState(() => {
    fetchData();
  }, []);
  console.log(music);
  console.log(localStorage.getItem("album-data"))
  return (
    <div className="home_header">
      <h2 className="home_title">Good afternoon</h2>
      <div className="home_box">
        {music &&
          music.map((data) => (
            <div key={data.id} className="home_card">
              <div className="home_img">
                <img src={data.images[0].url} alt={data.name} />
              </div>
              <h3 className="home_card_name">{data.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeHeader;