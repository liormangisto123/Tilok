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

const Camping = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div>
        <Carousel>
          <Carousel.Item interval={300}>
            <img
              height="700px"
              width="100px"
              className="d-block w-100"
              src="https://dgoz6t0l59f4w.cloudfront.net/blog_article_assets/images/000/000/522/original/25.jpg?1562195168"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Enjoy your Camping...</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={300}>
            <img
              height="700px"
              width="200px"
              className="d-block w-100"
              src="https://www.tripsavvy.com/thmb/XqfdCS0YQ4aqtJsEsA5zNZAP0QQ=/2137x1202/smart/filters:no_upscale()/sunrise-camping--676019412-5b873a5a46e0fb0050f2b7e0.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Enjoy your Camping...</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={300}>
            <img
              height="700px"
              width="200px"
              className="d-block w-100"
              src="https://media.cntraveler.com/photos/5f3c1421163f0cf4e60af119/16:9/w_2560%2Cc_limit/GettyImages-618049526.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Enjoy your Camping...</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={300}>
            <img
              height="700px"
              width="200px"
              className="piccc"
              src="https://www.pitchup.com/images/1/image/private/s--nfJTnvjR--/c_limit,h_2400,w_3200/e_improve,fl_progressive/q_auto/b_rgb:000,g_south_west,l_pitchup.com_wordmark_white_watermark,o_15/v1/camping_mihinoa/447597.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Enjoy your Camping...</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="nimrod">
        <YouTube videoId="glwIKhBfWYM" opts={opts} onReady={_onReady} />

        <div className="text">
          <h1>When the sun sets, the magic begins… </h1>
          The history of recreational camping is often traced back to Thomas
          Hiram Holding, a British travelling tailor, but it was actually first
          popularised in the UK on the river Thames. By the 1880s large numbers
          of visitors took part in the pastime, which was connected to the late
          Victorian craze for pleasure boating. The early camping equipment was
          very heavy, so it was convenient to transport it by boat or to use
          craft that converted into tents.[1] Although Thomas Hiram Holding is
          often seen as the father of modern camping in the UK, he was
          responsible for popularising a different type of camping in the early
          twentieth century. He experienced the activity in the wild from his
          youth, when he had spent much time with his parents traveling across
          the American prairies. Later he embarked on a cycling and camping tour
          with some friends across Ireland. His book on his Ireland experience,
          Cycle and Camp in Connemara led to the formation of the first camping
          group in 1901, the Association of Cycle Campers, later to become the
          Camping and Caravanning Club. He wrote The Campers Handbook in 1908,
          so that he could share his enthusiasm for the great outdoors with the
          world.
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Camping;
