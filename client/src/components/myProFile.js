import React, {useState } from "react";
import "../components/css/profile.css";
import { BiChevronRightCircle } from "react-icons/bi";
import { FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { FiYoutube, FiTwitter, FiInstagram } from "react-icons/fi";
import { BsChatSquareDotsFill , BsFillPersonFill } from "react-icons/bs";
import Modalmodal from './ClientMessage';
import moment from 'moment';

// class Myprofile extends React.Component {
const Myprofile = (props) => {
  const {
    first_name,
    last_name,
    country,
    cost,
    pic,
    pics,
    Experience,
    sum,
    text,
    date,
    Email,
    phone,
    city,
    commentsText,
    trips,
    Language,
    Languages,
    comments,
    profile_sum,
  } = (props.location && props.location.state) || {};
  const [state, setState] = useState({
    startDate: { task: "00-00-00" },
    endDate: { task: "00-00-00" },
    numOfTour: 1,
  });
  const ratingsArray = (comments || [])
    .filter(({ rating }) => !!rating)
    .map(({ rating }) => rating);
  const arrAvg = ratingsArray.length
    ? ratingsArray.reduce((a, b) => a + b, 0) / ratingsArray.length
    : 0;
  const numOfReviews = comments.length;

  const comme = commentsText.map((t, i) => {
    const rowLen = commentsText.length;
    if (rowLen === i + 1) {
      return <div className=" commentsText">{t}</div>;
    }
    return <div className=" commentsText">{t} </div>;
  });

  // const dates = date.map((t, i) => {
  //     const rowLen = date.length;
  //     if (rowLen === i + 1) {
  //         return <div>{t}</div>
  //     }
  //     return <div>{t}</div>
  // })

  // const comms = (c, d) => {

  //     return <div> {c} {d} </div>
  // }

  const startDatechangeHandler = (event) => {
    const value = { task: event.target.value };
    setState({ ...state, startDate: value });
  };
  const endDatechangeHandler = (event) => {
    const value = { task: event.target.value };
    setState({ ...state, endDate: value });
  };

  function datediff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }
  function parseDate(str) {
    var mdy = str.split("-");
    return new Date(mdy[1], mdy[0] - 1, mdy[2]);
  }
  const numOfDays = datediff(
    parseDate(state.startDate.task),
    parseDate(state.endDate.task)
  );
  const number = state.numOfTour == 1 ? 1 : state.numOfTour * 0.5;
  const totalPrice = Math.round(
    numOfDays <= 0 ? 0 : numOfDays * parseInt(cost) * number
  );

  const datetext = comments.map((t, i) => {
    const rowLen = comments.length;
    if (rowLen === i + 1) {
      return (
        <div className="box-shadow">
          <BsFillPersonFill /> {t.text} <br /> <br />{" "}
          <div className="stroke">{moment(t.date).format('d / MMM / YYYY')}</div>{" "}
        </div>
      );
    }
    return (
      <div className="box-shadow">
        <BsFillPersonFill /> {t.text} <br /> <br />{" "}
        <div className="stroke"> {moment(t.date).format('d / MMM / YYYY')}</div>{" "}
      </div>
    );
  });
  return (
    <>
      <div className="CityCounStar">
        <div className="name">{first_name + " " + last_name}</div>
        <div className="cityCountry">{city + ", " + country}</div>
        <div class="rating" id="n">
          {[0, 1, 2, 3, 4].map((i) => {
            return <span className={i < arrAvg ? "full" : ""}>☆</span>;
          })}
        </div>
        <h6 className="views">{"(" + numOfReviews + " Reviews)"}</h6>

        <div className="spacer"></div>
      </div>
      <div className="containers ">
        <div className="b">
          {/* <img className="PicImg" src={pic} /> */}
          <Carousel>
            <Carousel.Item>
              <img src={pic} alt="EMEYE" className="PicImg" />
              <div class="carousel-caption">
                {/* <h3 >Slight mask</h3> */}
                {/* <p>Third text</p> */}
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img src={pics[0]} alt="Third slide" className="PicImg" />
              <div class="carousel-caption">
                {/* <h3 >Slight mask</h3> */}
                {/* <p>Third text</p> */}
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img src={pics[1]} alt="Third slide" className="PicImg" />
              <div class="carousel-caption">
                {/* <h3 >Slight mask</h3> */}
                {/* <p>Third text</p> */}
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img src={pics[2]} className="PicImg" />
              <div class="carousel-caption">
                {/* <h3 >Slight mask</h3> */}
                {/* <p>Third text</p> */}
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="c">
          <img className="img-style" src={pic} />
          <img className="img-style" src={pics[0]} />
          <img className="img-style" src={pics[1]} />
          <img className="img-style" src={pics[2]} />
        </div>

        <div className="a">
          <form id="form">
            <div className="form-Top">
              <div class="col-md-6 mb-3">
                <label for="validationTooltip01">Start Date</label>
                <input
                  value={state.startDate.task}
                  onChange={startDatechangeHandler}
                  id="StartDate"
                  placeholder=""
                  type="date"
                  class="form-control"
                  required
                />
              </div>
              <div className="col-md-6 mb-2">
                <label for="validationTooltip02">End Date</label>
                <input
                  value={state.endDate.task}
                  onChange={endDatechangeHandler}
                  id="EndDate"
                  type="date"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div class="col-md-6 mb-3">
                <label for="validationTooltip03">Tourists</label>
                {/* <input type="number" id="Tourists" class="form-control" required /> */}
                <select
                  onChange={(event) => {
                    setState({ ...state, numOfTour: event.target.value });
                  }}
                  name="Tourists"
                  id="Tourists"
                  placeholder=""
                >
                  {[1, 2, 3, 4, 5, 6, 7].map((i) => {
                    return (
                      <option key={i} type="number" value={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>

                {/* <div class="invalid-tooltip">
                                    Please provide a valid Tourists.
                                          
                                </div> */}
              </div>
            </div>

            <div className="cost">
              {/* <label for="validationTooltip02">Price per day :{cost}</label> */}
              <label for="validationTooltip02">
                Total Price :{totalPrice}$
              </label>
            </div>
            <div>
              {/* {<form className="contact-form" onSubmit={this.sendEmail}>
                                            <input type="hidden" name="contact_number" />
                                            <input type="hidden" name="user_name" value={this.props.name} />
                                            <input type="hidden" name="Country" value={this.props.Country} />
                                            <input type="hidden" name="cost" value={this.props.cost} />
                                            <input type="hidden" name="phone" value={this.props.phone} />
                                            <input type="hidden" name="user_email" value={this.props.email} />
                                            <input type="hidden" name="message" value={this.props.summary} /> */}
              {totalPrice>0?<Modalmodal email={Email}/>:<button type="submit" className="bookNow">
                Book Now
              </button>}                              
              
              
              {/* </form>} */}
            </div>
          </form>
        </div>
      </div>
      <div className="items">
        <div className="Experience">
          <div>
            <FaChevronCircleRight className="icons-svg" /> {}
            Experience: {trips + ""}
          </div>
          <div className="details">
            <FaChevronCircleRight className="icons-svg" /> {}
            Languages: {Language + ""}
          </div>
          <div className="details">
            <FaChevronCircleRight className="icons-svg" /> {}
            Activity Time: 7:00AM- 18:00PM
          </div>
          <div className="details">
            <div className="details">
              <FaChevronCircleRight className="icons-svg" /> {}
              <Link to="/country">Cancellation Policy</Link>
            </div>

            <br></br>
            <br></br>
          </div>
        </div>
        <div className="bar">{/* קן הפרדה */}</div>
        <div className="profile-Summary">{profile_sum}</div>
        <div className="bars">{/* קן הפרדה */}</div>

        <div className="comm">
          <BsChatSquareDotsFill /> Comments
          <br></br>
          {/* {ff} {dates} */}
          <br></br>
          {datetext}
          {/* <CommentGroup></CommentGroup> <br></br> */}
          {/* <div className="mDA">
            <div className="Icon">
              <Link to="#">
                <FiInstagram className="social-svg" />
              </Link>
            </div>
            <div className="Icon">
              <Link to="#">
                {" "}
                <FaFacebook className="social-svg" />
              </Link>
            </div>
            <div className="Icon">
              <Link to="#">
                <FiYoutube className="social-svg" />
              </Link>
            </div>
            <div className="Icon">
              <Link to="#">
                <FiTwitter className="social-svg" />
              </Link>
            </div>
          </div> */}
          {/* 
Comments: {text} <br/> */}
          {/*  commentsText : {ff} */}
        </div>
        <div className="barss">{/* קן הפרדה */}</div>
      </div>
    </>
  );
};

export default Myprofile;
