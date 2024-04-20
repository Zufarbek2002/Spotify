/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DataRenderComp from "./DataRenderComp";
import { usePlayListsStore } from "../../store/playListsStore";

const Playlist = () => {
  const { music, fetchData } = usePlayListsStore();
  const { id } = useParams();

  useEffect(() => {
    fetchData(id);
  }, []);
  return (
    <div>
      <div className="card_box_header">
        <h1 className="card_title">Playlist</h1>
        <div>
          <Link className="card_link">SEE ALL</Link>
        </div>
      </div>
      <div className="mixes_box">
        {music &&
          music.map((data) => <DataRenderComp key={data.id} data={data} />)}
      </div>
    </div>
  );
};

export default Playlist;
