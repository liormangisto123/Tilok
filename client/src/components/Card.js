import React from "react";
import "./css/card.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out our Top destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://www.news4jax.com/resizer/XNrh_d0EC1i7Azik92IQ_y2_DzI=/1600x900/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/cloudfront-us-east-1.images.arcpublishing.com/gmg/YXRZ6EVYXBAPVEM3QY2PQXI27Y.jpg"
              text="Travel in Georgia"
              label="Adventure"
              path="/georgia"
            />
            <CardItem
              src="https://static01.nyt.com/images/2020/06/09/world/09virus-italy2/09virus-italy2-mediumSquareAt3X.jpg"
              text="Travel in Italy"
              label="Pleasure"
              path="/italy"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="assets/Extreme.jpg"
              text="Extreme trip"
              label="Extreme"
              path="/extreme"
            />
            <CardItem
              src="https://www.parks.vic.gov.au/-/media/project/pv/main/parks/images/places-to-see/great-otway-national-park/cape-otway-apollo-bay/3-camping-great-otway-national-park-cape-otway-1920x1124.jpg?h=450&w=768&la=en&hash=C98C2CF6BC62862D00E1D47E4D6C16705DC26ADE"
              text="Come and enjoy the best nature reserves"
              label="Adventure"
              path="/camping"
            />
            <CardItem
              src="https://media-cdn.tripadvisor.com/media/photo-s/1b/08/2c/9f/training-courses-and.jpg"
              text="Come and enjoy the wildlife"
              label="Adrenaline"
              path="/wildlife"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
