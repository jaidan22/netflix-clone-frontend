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

  //   useEffect(() => (listRef.current.style.transform = `translate(0px)`));

  const handleClick = (dir) => {
    let dist = listRef.current.getBoundingClientRect().x - 50;
    if (dir === "left" && slideCount > 0) {
      setSlideCount(slideCount - 1);
      listRef.current.style.transform = `translate(${+235 + dist}px)`;
    } else if (dir === "right" && slideCount < 3) {
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
          onClick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
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
