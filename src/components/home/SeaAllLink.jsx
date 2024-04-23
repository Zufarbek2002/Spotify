/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SeaAllLink = ({ data }) => {
  return (
    <Link to={`/moreplaylist/${data}`} className="card_link">
      SEE ALL
    </Link>
  );
};

export default SeaAllLink;
