/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Box } from "@mui/material";
import { useMusicStore } from "../../store/musicStore";
import DataRenderComp from "../DataRenderComp";
import SeaAllLink from "./SeaAllLink";

const MadeFor = () => {
  const { madeForYou, fetchMadeFor } = useMusicStore();

  useEffect(() => {
    fetchMadeFor();
  }, []);
  return (
    <Box mb="50px">
      <div className="card_box_header">
        <h1 className="card_title">Made for you</h1>
        <div>
          <SeaAllLink data="0JQ5DAqbMKFHOzuVTgTizF" />
        </div>
      </div>
      <div className="mixes_box">
        {madeForYou &&
          madeForYou
            .slice(0, 4)
            .map((data) => <DataRenderComp key={data.id} data={data} />)}
      </div>
    </Box>
  );
};

export default MadeFor;
