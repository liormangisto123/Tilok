import React from "react";
import Search from "../search";
import Footer from "../footer";
import YouTube from "react-youtube";
import { Container, Row, Col, Media, Figure, Carousel } from "react-bootstrap";
import "../css/templa.css";

const opts = {
  height: "390",
  width: "750",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 4,
  },
};
function _onReady(event) {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
}

const Wildlife = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              height="700px"
              width="200px"
              className="d-block w-100"
              src="https://www.natgeofineart.com/wp-content/uploads/2019/03/1777910_Joubert_2800px.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Enjoy your Extreme</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              height="700px"
              width="200px"
              className="d-block w-100"
              src="https://www.expertafrica.com/images/background-image/84420d694e0e4742a7d0dff372dec309.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Enjoy your Extreme</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              height="700px"
              width="200px"
              className="d-block w-100"
              src="https://mk0cs00242yfx7ww7i54.kinstacdn.com/wp-content/uploads/sites/5/Liuwa-Plains-National-Park1.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Enjoy your Extreme</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              height="700px"
              width="200px"
              className="d-block w-100"
              src="https://www.manyeleti.com/assets/img/big-five-safari-manyeleti.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Enjoy your Extreme</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              height="700px"
              width="100px"
              className="d-block w-100"
              src="https://www.robertsafaris-adventure.com/wp-content/uploads/2019/06/kenya-safaris-in-samburu-national-reserve-girrafe-robert-safaris-adventure.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Enjoy your Extreme</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="nimrod">
        <YouTube videoId="Pe0Ci3z5xTw" opts={opts} onReady={_onReady} />

        <div className="text">
          <h1>Welcome to the other side of Life</h1>
          Wildlife traditionally refers to undomesticated animal species, but
          has come to include all organisms that grow or live wild in an area
          without being introduced by humans.[1] Wildlife can be found in all
          ecosystems. Deserts, forests, rainforests, plains, grasslands, and
          other areas, including the most developed urban areas, all have
          distinct forms of wildlife. While the term in popular culture usually
          refers to animals that are untouched by human factors, most scientists
          agree that much wildlife is affected by human activities.[2] Humans
          have historically tended to separate civilization from wildlife in a
          number of ways, including the legal, social, and moral senses. Some
          animals, however, have adapted to suburban environments. This includes
          such animals as domesticated cats, dogs, mice, and rats. Some
          religions declare certain animals to be sacred, and in modern times,
          concern for the natural environment has provoked activists to protest
          against the exploitation of wildlife for human benefit or
          entertainment.
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Wildlife;
