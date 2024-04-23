/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useMusicStore } from "../../store/musicStore";
import DataRenderComp from "../DataRenderComp";
import { Box } from "@mui/material";

const TopMixes = () => {
  const { topMixes, fetchTopMixes } = useMusicStore();
  useEffect(() => {
    fetchTopMixes();
  }, []);

  return (
    <Box mb="50px" mt="50px">
      <div className="card_box_header">
        <h1 className="card_title">Your top mixes</h1>
        <div>
          <Link className="card_link">SEE ALL</Link>
        </div>
      </div>
      <div className="mixes_box">
        {topMixes &&
          topMixes.slice(0,4).map((data) => (
            <DataRenderComp key={data.id} data={data} />
          ))}
      </div>
    </Box>
  );
};

export default TopMixes;
