import "./listitem.scss";
import bond from "../../images/bond.jpg";
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";

function ListItem(index) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://youtu.be/BIhNsAtPbPI";

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index.index * 230 - 50 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={bond} alt="007" />
      {isHovered && (
        <>
          <iframe
            id="ytplayer"
            width="100%"
            height="140px"
            type="text/html"
            src="https://www.youtube.com/embed/BIhNsAtPbPI?autoplay=1&controls=0&modestbranding=1&fs=0&loop=1&rel=0&iv_load_policy=3"
            frameborder="0"
            allowfullscreen
            allow="autoplay;"
          ></iframe>

          <div className="iteminfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>

            <div className="infoTop">
              <span>2hr 28min</span>
              <span className="age">13+</span>
              <span>2020</span>
            </div>

            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quia
              laboriosam ab aperiam mollit
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;
