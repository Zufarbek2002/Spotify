/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Box } from "@mui/material";
import { useMusicStore } from "../../store/musicStore";
import DataRenderComp from "../DataRenderComp";
import SeaAllLink from "./SeaAllLink";

const Uniquely = () => {
  const { uniquely, fetchUniquely } = useMusicStore();

  useEffect(() => {
    fetchUniquely();
  }, []);
  return (
    <Box mb="50px">
      <div className="card_box_header">
        <h1 className="card_title">Uniquely yours</h1>
        <div>
          <SeaAllLink data="0JQ5DAqbMKFCbimwdOYlsl" />
        </div>
      </div>
      <div className="mixes_box">
        {uniquely &&
          uniquely
            .slice(0, 4)
            .map((data) => <DataRenderComp key={data.id} data={data} />)}
      </div>
    </Box>
  );
};

export default Uniquely;
