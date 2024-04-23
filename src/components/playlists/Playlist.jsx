/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TableHeadComp from "../TableHeadComp";
import { usePlayListsStore } from "../../store/playListsStore";
import { useLikesStore } from "../../store/likesStore";
import "../../sass/homeStyle/PlayList.scss";

const Playlist = () => {
  const { music, fetchData } = usePlayListsStore();
  const { fetchLikeData } = useLikesStore();
  const { id } = useParams();

  const handleAdd = (musicId) => {
    fetchLikeData(musicId);
  };

  useEffect(() => {
    fetchData(id);
  }, []);

  return (
    <div className="container playlist">
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHeadComp />
          <TableBody>
            {music &&
              music.map((data, i) => (
                <TableRow
                  hover
                  key={data.track.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  className="tabel_hover"
                >
                  <TableCell sx={{ color: "#B3B3B3", textAlign: "center" }}>
                    {i + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="playlist_img_box">
                      <img
                        src={data.track.album.images[2].url}
                        alt={data.track.name}
                      />
                      <div className="playlist_artist">
                        <h3 className="playlist_card_name">
                          {data.track.name}
                        </h3>
                        <h4 className="playlist_card_desc">
                          {data.track.artists[0].name}
                        </h4>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <h3 className="playlist_card_desc">
                      {data.track.album.name}
                    </h3>
                  </TableCell>
                  <TableCell sx={{ color: "#B3B3B3", textAlign: "center" }}>
                    {data.added_at.split("T", [1])}
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleAdd(data.track.id)}>
                      {data.track.id ? (
                        <AddCircleOutlineIcon sx={{ color: "#fff" }} />
                      ) : (
                        <FavoriteIcon sx={{ color: "#63CF6C" }} />
                      )}
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <audio controls src={data.track.preview_url} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Playlist;
