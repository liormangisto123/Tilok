import React from "react";
import Search from "../search";
import Footer from "../footer";
import YouTube from "react-youtube";
import { Container, Row, Col, Media, Figure } from "react-bootstrap";
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
      <br />
      <br />

      <div className="nimrod">
        <YouTube videoId="XHeDps0fX6c" opts={opts} onReady={_onReady} />
        <Figure>
          <Figure.Image
            width="250px"
            height="400px"
            alt="171x180"
            src="data:image/jpeg;base64,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"
          />
          <Figure.Image
            width="250px"
            height="300px"
            alt="171x180"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMIw077TrqOY_WK_h7SryKFLTzR7d8q-9vMQ&usqp=CAU"
          />
          <Figure.Image
            width="250px"
            height="381px"
            alt="171x180"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRk3qb6qzhw9V4RmGwLoBcSTqMPL0amUfgyOg&usqp=CAU"
          />
          <Figure.Caption>
            <div className="text">
              <h1>WellCome To Italy</h1>
              Italy, country of south-central Europe, occupying a peninsula that
              juts deep into the Mediterranean Sea. Italy comprises some of the
              most varied and scenic landscapes on Earth and is often described
              as a country shaped like a boot. At its broad top stand the Alps,
              which are among the world’s most rugged mountains. <br />
              Italy’s highest points are along Monte Rosa, which peaks in
              Switzerland, and along Mont Blanc, which peaks in France. The
              western Alps overlook a landscape of Alpine lakes and
              glacier-carved valleys that stretch down to the Po River and the
              Piedmont. Tuscany, to the south of the cisalpine region, is
              perhaps the country’s best-known region. From the central Alps,
              running down the length of the country, radiates the tall Apennine
              Range, which widens near Rome to cover nearly the entire width of
              the Italian peninsula. South of Rome the Apennines narrow and are
              flanked by two wide coastal plains, one facing the Tyrrhenian Sea
              and the other the Adriatic Sea. Much of the lower Apennine chain
              is near-wilderness, hosting a wide range of species rarely seen
              elsewhere in western Europe, such as wild boars, wolves, asps, and
              bears. The southern Apennines are also tectonically unstable, with
              several active volcanoes, including Vesuvius, which from time to
              time belches ash and steam into the air above Naples and its
              island-strewn bay. At the bottom of the country, in the
              Mediterranean Sea, lie the islands of Sicily and Sardinia.
            </div>
          </Figure.Caption>
        </Figure>
      </div>

      <Footer />
    </>
  );
};

export default Italy;
