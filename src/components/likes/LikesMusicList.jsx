/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useLikesStore } from "../../store/likesStore";
import TableHeadComp from "../TableHeadComp";

const LikesMusicList = () => {
  const { likedMusic, fetchLikedData } = useLikesStore();
  const handleAdd = (musicId) => {
    console.log(musicId);
  };

  useEffect(() => {
    fetchLikedData();
  }, []);
  return (
    <div className="container playlist">
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHeadComp />
          <TableBody>
            {likedMusic &&
              likedMusic.map((data, i) => (
                <TableRow
                  hover
                  key={data.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  className="tabel_hover"
                >
                  <TableCell sx={{ color: "#B3B3B3", textAlign: "center" }}>
                    {i + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="playlist_img_box">
                      <img src={data.album.images[2].url} alt={data.name} />
                      <div className="playlist_artist">
                        <h3 className="playlist_card_name">{data.name}</h3>
                        <h4 className="playlist_card_desc">
                          {data.artists[0].name}
                        </h4>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <h3 className="playlist_card_desc">{data.album.name}</h3>
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#B3B3B3" }}>
                    {data.album.release_date}
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleAdd(data.id)}>
                      <AddCircleOutlineIcon sx={{ color: "#fff" }} />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <audio controls src={data.preview_url} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default LikesMusicList;
