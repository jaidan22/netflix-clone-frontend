import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import "./list.scss";
import ListItem from "../listitem/ListItem";
import { useEffect, useRef, useState } from "react";

function List() {
  const listRef = useRef();
  const [slideCount, setSlideCount] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (dir) => {
    setIsMoved(true);
    let dist = listRef.current.getBoundingClientRect().x - 50;
    if (dir === "left" && slideCount > 0) {
      setSlideCount(slideCount - 1);
      listRef.current.style.transform = `translate(${+235 + dist}px)`;
    } else if (dir === "right" && slideCount < 4) {
      setSlideCount(slideCount + 1);
      listRef.current.style.transform = `translate(${-235 + dist}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="slider left"
          style={{ display: isMoved ? "block" : "none" }}
          onClick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </div>
        <ArrowForwardIosOutlined
          className="slider right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default List;
