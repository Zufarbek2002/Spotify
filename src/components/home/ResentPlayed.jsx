/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useMusicStore } from "../../store/musicStore";
import DataRenderComp from "./DataRenderComp";
import { Box } from "@mui/material";

const ResentPlayed = () => {
  const { resentPlayed, fetchResentPlayed } = useMusicStore();

  useEffect(() => {
    fetchResentPlayed();
  }, []);

  return (
    <Box mb="50px">
      <div className="card_box_header">
        <h1 className="card_title">Recently played</h1>
        <div>
          <Link className="card_link">SEE ALL</Link>
        </div>
      </div>
      <div className="mixes_box">
        {resentPlayed &&
          resentPlayed.map((data) => (
            <DataRenderComp key={data.id} data={data} />
          ))}
      </div>
    </Box>
  );
};

export default ResentPlayed;
