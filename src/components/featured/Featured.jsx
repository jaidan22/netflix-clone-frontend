import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";
import movieimg from "../../images/dark-knight-title.jpeg";
import moviebg from "../../images/dark-knight-bg.jpg";

function Featured(type) {
  return (
    <div className="featured">
      {console.log(type.type)}
      {type.type && (
        <div className="category">
          <span>{type.type === "movies" ? "Movies" : "TV Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Adventure</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="thriller">Thriller</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}

      <img src={moviebg} alt="user" width="100%" />
      <div className="info">
        <img src={movieimg} alt="movie" />
        <span className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, magni,
          nisi error dolorem nam ea impedit ratione optio ad unde illo quis
          necessitatibus dolore alias est veniam velit. Numquam tenetur possimus
          nisi nobis ab nulla repellendus ex beatae veritatis maiores.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
