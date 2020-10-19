import React, { Component, useContext, useEffect, useState } from "react";
import "../components/css/profile.css";
// import '../components/css/dataGuide.css'
// import emailjs from 'emailjs-com';
import { BiChevronRightCircle } from "react-icons/bi";
import { FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { FiYoutube, FiTwitter, FiInstagram } from "react-icons/fi";
import { $ } from "jquery";

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
    email,
    phone,
    city,
    trips,
    Language,
    Languages,
    comments,
    profile_sum,
  } = (props.location && props.location.state) || {};
  const [state, setState] = useState({
    startDate: { task: "00-00-00" },
    endDate: { task: "00-00-00" },
  });
  const ratingsArray = (comments || [])
    .filter(({ rating }) => !!rating)
    .map(({ rating }) => rating);
  const arrAvg = ratingsArray.length
    ? ratingsArray.reduce((a, b) => a + b, 0) / ratingsArray.length
    : 0;
  const numOfReviews = comments.length;

  const [startDate, setstartDate] = useState({});
  const [endDate, setendDate] = useState({});

  const startDatechangeHandler = (event) => {
    const value = { task: event.target.value };
    // const { value } = event.target;
    setState({ ...state, startDate: value });
    // setstartDate(value)
    // console.log(startDate)
  };
  const endDatechangeHandler = (event) => {
    const value = { task: event.target.value };
    // const { value } = event.target;
    setState({ ...state, endDate: value });
    // setendDate(value)
    // console.log(endDate)
  };

  function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }
  function parseDate(str) {
    var mdy = str.split("-");
    return new Date(mdy[2], mdy[0] - 1, mdy[1]);
  }
  //    datediff(state.endDate.task-state.startDate.task/(1000 * 60 * 60 * 24))
  const Date =
    (state.endDate.task - state.startDate.task) / (1000 * 60 * 60 * 24);
  const totalPrice = Date;

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
                  value={startDate.task}
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
                  value={endDate.task}
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
                <select name="Tourists" id="Tourists" placeholder="">
                  <option type="number" value="one">
                    1
                  </option>
                  <option type="number" value="two">
                    2
                  </option>
                  <option type="number" value="tree">
                    3
                  </option>
                  <option type="number" value="four">
                    4
                  </option>
                  <option type="number" value="five">
                    5
                  </option>
                  <option type="number" value="six">
                    6
                  </option>
                  <option type="number" value="seven">
                    7+
                  </option>
                </select>

                {/* <div class="invalid-tooltip">
                                    Please provide a valid Tourists.
                                          
                                </div> */}
              </div>
            </div>

            <div className="cost">
              {/* <label for="validationTooltip02">Price per day :{cost}</label> */}
              <label for="validationTooltip02">Total Price :{totalPrice}</label>
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
              <button type="submit" className="bookNow">
                Book Now
              </button>
              {/* </form>} */}
            </div>
          </form>
        </div>
      </div>
      <div className="items">
        <div className="Experience">
          <div>
            <FaChevronCircleRight className="social-svg"/> {}
            Experience: {trips + ""}
          </div>
          <div className="details">
            <FaChevronCircleRight className="social-svg"/> {}
            Languages: {Language + ""}
          </div>
          <div className="details">
            <FaChevronCircleRight className="social-svg"/> {}
            Activity Time: 7:00AM- 18:00PM
          </div>
          <div className="details">
            <div className="details">
              <FaChevronCircleRight className="social-svg"/> {}
              <Link to="/country">Cancellation Policy</Link>
            </div>

            <br></br>
            <br></br>
          </div>
        </div>
        <div className="bar">{/* קן הפרדה */}</div>
        <div className="profile-Summary">{profile_sum}</div>
        <div className="bars">{/* קן הפרדה */}</div>
        <div className="mDA">
          <div className="contact">Contact me:</div>
          <div className="Icon">
            <Link to="#">
              <FiInstagram className="social-svg"/>
            </Link>
          </div>
          <div className="Icon">
            <Link to="#">
              {" "}
              <FaFacebook className="social-svg"/>
            </Link>
          </div>
          <div className="Icon">
            <Link to="#">
              <FiYoutube className="social-svg"/>
            </Link>
          </div>
          <div className="Icon">
            <Link to="#">
              <FiTwitter className="social-svg"/>
            </Link>
          </div>
        </div>
        <div className="barss">{/* קן הפרדה */}</div>
      </div>
    </>
  );
};

export default Myprofile;
