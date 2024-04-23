/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useMusicStore } from "../../store/musicStore";
import DataRenderComp from "../DataRenderComp";
import { Box } from "@mui/material";
import SeaAllLink from "./SeaAllLink";

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
          <SeaAllLink data="0JQ5DAqbMKFQ00XGBls6ym" />
        </div>
      </div>
      <div className="mixes_box">
        {resentPlayed &&
          resentPlayed
            .slice(0, 4)
            .map((data) => <DataRenderComp key={data.id} data={data} />)}
      </div>
    </Box>
  );
};

export default ResentPlayed;
