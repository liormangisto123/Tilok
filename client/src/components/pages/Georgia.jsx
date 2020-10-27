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

const Georgia = () => {
  return (
    <>
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
              src="https://images.pexels.com/photos/2832061/pexels-photo-2832061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>WellCome To Georgia</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              height="700px"
              width="200px"
              className="d-block w-100"
              src="https://images.pexels.com/photos/2910598/pexels-photo-2910598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>WellCome To Georgia</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height="700px"
              width="200px"
              className="d-block w-100"
              src="https://cdn1.modernadventure.com/app/uploads/2018/10/22131134/Day1_ModernAdventure-Kachka-WhyWeTravel-V3-edited.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>WellCome To Georgia</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height="700px"
              width="200px"
              className="d-block w-100"
              src="https://www.nationalgeographic.com/content/dam/travel/rights-exempt/SponsorContent/international/Georgia-Tourism/Only-in-Georgia/Image_3.adapt.1900.1.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>WellCome To Georgia</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height="700px"
              width="200px"
              className="d-block w-100"
              src="https://georgiantravelguide.com/storage/files/imereti-bagratis-tadzari.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>WellCome To Georgia</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="nimrod">
        <YouTube videoId="KNUcUBdYT58" opts={opts} onReady={_onReady} />

        <div className="text">
          <h1>WellCome To Georgia</h1>
          Known today as the "Peach State," Georgia, founded in 1733, is one of
          the original 13 states. <br />
          It was named in honor of England's King George II. During the Civil
          War, the fall of Atlanta was a crucial turning point in the defeat of
          the South. Today, Atlanta, which became Georgia's capital in 1868, is
          a thriving city with major national corporations, and it is considered
          the economic and cultural center of the Southeast. The state flower is
          the Cherokee rose.
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Georgia;
