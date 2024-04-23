import { TableCell, TableHead, TableRow } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const TableHeadComp = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell className="table_title">#</TableCell>
        <TableCell className="table_title">TITLE</TableCell>
        <TableCell className="table_title">ALBUM</TableCell>
        <TableCell className="table_title" width="150px">
          DATE ADDED
        </TableCell>
        <TableCell className="table_title"></TableCell>
        <TableCell className="table_title" align="center">
          <AccessTimeIcon />
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeadComp;
