/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../../sass/homeStyle/TopMixes.scss";


const DataRenderComp = ({ data }) => {
  return (
    <Link to={`/playlist/${data.id}`} className="card">
      <img src={data.images[0].url} alt={data.name} />
      <h3 className="card_name">{data.name}</h3>
      <h4 className="card_desc">{data.description}</h4>
    </Link>
  );
};

export default DataRenderComp;
