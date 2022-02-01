import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      {/* <iframe
        src="https://www.youtube.com/embed/BIhNsAtPbPI?autoplay=1&loop=1&modestbranding=1"
        frameborder="0"
        controls="0"
        sandbox="autoplay;"
      /> */}

      {/* <iframe
            width="100%"
            height="140px"
            src="https://www.youtube.com/embed/BIhNsAtPbPI?autoplay=1"
            frameborder="0"
            allow="autoplay;"
      /> */}

      <iframe
        src="https://www.youtube.com/embed/BIhNsAtPbPI?autoplay=1&disablekb=0&modestbranding=1&iv_load_policy=3&color=white"
        frameborder="0"
        allowFullScreen
        width="100%"
        height="100%"
        allow="autoplay;"
      />
    </div>
  );
}

export default Watch;
