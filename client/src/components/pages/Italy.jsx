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

const Italy = () => {
  return (
    <>
      {/* <Search /> */}
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
              src="https://lightfoottravel.imgix.net/public/destination/ColosseumRomeItalyEurope.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Wellcome to Italy</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              height="700px"
              width="100px"
              className="d-block w-100"
              src="https://image.cnbcfm.com/api/v1/image/106450161-15845451151362020-03-08t120126z_538376540_rc2off9mub6x_rtrmadp_3_health-coronavirus-italy.jpg?v=1584545185&w=1600&h=900"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Wellcome to Italy</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height="700px"
              width="200px"
              className="d-block w-100"
              src="https://www.telegraph.co.uk/content/dam/Travel/2020/January/italy-beach-tropea.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Wellcome to Italy</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height="700px"
              width="200px"
              className="d-block w-100"
              src="https://static.euronews.com/articles/stories/04/71/97/36/1440x810_cmsv2_26eddd8e-55c6-5e46-9b05-c5d090f5649d-4719736.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Wellcome to Italy</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height="700px"
              width="200px"
              className="d-block w-100"
              src="https://www.state.gov/wp-content/uploads/2018/11/Italy-2109x1406.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Wellcome To Italy</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="nimrod">
        <YouTube videoId="zworaQSsB-0" opts={opts} onReady={_onReady} />

        <div className="text">
          <h1>WellCome To Italy</h1>
          Italy, country of south-central Europe, occupying a peninsula that
          juts deep into the Mediterranean Sea. Italy comprises some of the most
          varied and scenic landscapes on Earth and is often described as a
          country shaped like a boot. At its broad top stand the Alps, which are
          among the world’s most rugged mountains. <br /><br />
          Italy’s highest points are along Monte Rosa, which peaks in
          Switzerland, and along Mont Blanc, which peaks in France. The western
          Alps overlook a landscape of Alpine lakes and glacier-carved valleys
          that stretch down to the Po River and the Piedmont. Tuscany, to the
          south of the cisalpine region, is perhaps the country’s best-known
          region.<br /><br /> From the central Alps, running down the length of the country,
          radiates the tall Apennine Range, which widens near Rome to cover
          nearly the entire width of the Italian peninsula. South of Rome the
          Apennines narrow and are flanked by two wide coastal plains, one
          facing the Tyrrhenian Sea and the other the Adriatic Sea. Much of the
          lower Apennine chain is near-wilderness, hosting a wide range of
          species rarely seen elsewhere in western Europe, such as wild boars,
          wolves, asps, and bears. The southern Apennines are also tectonically
          unstable, with several active volcanoes, including Vesuvius, which
          from time to time belches ash and steam into the air above Naples and
          its island-strewn bay. At the bottom of the country, in the
          Mediterranean Sea, lie the islands of Sicily and Sardinia.
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Italy;
