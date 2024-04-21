/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
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
      <TableContainer >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="table_title">TITLE</TableCell>
              <TableCell className="table_title">ALBUM</TableCell>
              <TableCell className="table_title">DATE ADDED</TableCell>
              <TableCell className="table_title" align="right">img</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {music &&
              music.map((data) => (
                <TableRow
                  hover
                  key={data.track.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <div className="playlist_img">
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
                  <TableCell >
                    <IconButton onClick={() => handleAdd(data.track.id)}>
                      <AddCircleOutlineIcon sx={{ color: "#fff" }} />
                    </IconButton>
                  </TableCell>
                  <TableCell >
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
