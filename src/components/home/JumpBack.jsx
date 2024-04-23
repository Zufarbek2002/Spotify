/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Box } from "@mui/material";
import { useMusicStore } from "../../store/musicStore";
import DataRenderComp from "../DataRenderComp";
import SeaAllLink from "./SeaAllLink";

const JumpBack = () => {
  const { jumpBack, fetchJumpBack } = useMusicStore();

  useEffect(() => {
    fetchJumpBack();
  }, []);
  return (
    <Box mb="50px">
      <div className="card_box_header">
        <h1 className="card_title">Jump back in</h1>
        <div>
          <SeaAllLink data="0JQ5DAqbMKFLVaM30PMBm4" />
        </div>
      </div>
      <div className="mixes_box">
        {jumpBack &&
          jumpBack
            .slice(0, 4)
            .map((data) => <DataRenderComp key={data.id} data={data} />)}
      </div>
    </Box>
  );
};

export default JumpBack;
