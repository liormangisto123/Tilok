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

const Extreme = () => {
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
              src="https://cdnp.flypgs.com/files/Ekstrem_Sporlar/yamac-parasutu-nasil-yapilir.jpg"
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
              src="https://i.dailymail.co.uk/1s/2018/10/12/13/4990382-0-image-a-32_1539348513831.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Enjoy your Extreme</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height="700px"
              width="200px"
              className="d-block w-100"
              src="https://2yrh403fk8vd1hz9ro2n46dd-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/Hyper-20-inch-Nitro-Circus-bmx-kids-bike-bicycle-text-3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Enjoy your Extreme</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height="700px"
              width="200px"
              className="d-block w-100"
              src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Ice_Climbing.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Enjoy your Extreme</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="nimrod">
        <YouTube videoId="DgNoch68twM" opts={opts} onReady={_onReady} />

        <div className="text">
          <h1>Welcome to the Real Thrill </h1>
          At Extreme Trips, we are adventure junkies with a thirst for making
          stories. We have spent many years selfishly doing our own adventures
          and have met many amazing guides and other adventurers.
          <br /> We have decided to share this lifestyle and help others create
          amazing stories. Throughout the years we have established
          relationships with some of the most experienced and fun guides and we
          offer amazing guided and fun extreme trips throughout the year. Keep
          checking our site to see new and upcoming trips. Also, if you have a
          group and want us to help plan and guide an extreme trip your group
          wishes to do, please contact us. Let us use our experience to work out
          all the logistics involved in your trip and allow yourselves to enjoy
          the fun and adventure stuff!
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Extreme;
