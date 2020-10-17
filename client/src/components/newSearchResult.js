import React from "react";
import "../components/css/searchResult.css";
<<<<<<< HEAD
import { AiOutlineGlobal, AiFillDatabase } from 'react-icons/ai';
import Modal from '../../src/components/pages/profile'



=======
import { AiOutlineGlobal, AiFillDatabase } from "react-icons/ai";
<<<<<<< HEAD
>>>>>>> master

=======
import { BiDollar } from "react-icons/bi";
import { Link } from 'react-router-dom';
>>>>>>> master
export default function SearchResults(props) {
  // const classes = useStyles();
  const ratingsArray = (props.comments || [])
    .filter(({ rating }) => !!rating)
    .map(({ rating }) => rating);
  const arrAvg = ratingsArray.length
    ? ratingsArray.reduce((a, b) => a + b, 0) / ratingsArray.length
    : 0;
  // props.array.map(obj=> ({ ...obj, ratingAvg: arrAvg }))

  return (
    <div class="container">

      <section class="col-xs-12 col-sm-6 col-md-12">
        <div class="singleResult">
          <article class="search-result row">
            <div class="col-xs-12 col-sm-12 col-md-3">
<<<<<<< HEAD
      
            <Modal text={props.first_name+' '+props.last_name} src={props.pic} country={props.country} cost={props.cost} com={props.com}
                            date={props.date} summary={props.summary} />
                
              {/* </a> */}
=======
              <a href="#" title="view profile" class="thumbnail">
                <img
                  width="100%%"
                  height="195vh"
                  src={props.pic}
                  alt="guide pic"
                />
              </a>
>>>>>>> master
            </div>

            <div class="col-xs-12 col-sm-12 col-md-9 excerpet">
              <div className="info">
                <h3>
<<<<<<< HEAD
                  <a href="Modal" title="">
=======
                <Link to={{
                    pathname:`/guides/${props.id}`,
                    state: {
                      first_name:props.first_name,
                      last_name:props.last_name,
                      country: props.country,
                      city:props.city,
                      pic: props.pic,
                      cost: props.cost+ '$',
                      sum: props.summary,
                      profile_sum:props.profile_summary,
                      text:  props.text,
                      date : props.date,
                      email:props.email,
                      phone:props.phone,
                      comments:props.comments,
                    }
                    
                   
                  }}>
                    {props.first_name + " " + props.last_name} 
                  </Link>
                  {/* <a href="#" title="">
>>>>>>> master
                    {props.first_name + " " + props.last_name}
                  </a> */}
                </h3>
                <div>
                  <ul>
                    <li>
                      <div class="rating">
                        {[0, 1, 2, 3, 4].map((i) => {
                          return (
                            <span className={i < arrAvg ? "full" : ""}>☆</span>
                          );
                        })}
                      </div>
                    </li>
                  </ul>
                </div>
<<<<<<< HEAD
                <span>

                summary:

              </span>
                <div>{props.summary}</div>
=======
                <span>summary:</span>
                <div className="summary">{props.summary}</div>
>>>>>>> master

                <div className="ex-la-minediv">
                  <div className="ex-la">
                    <ul>
                      <li>
                        <AiFillDatabase /> Experience:
                      </li>

                      <li>{props.Experience}</li>
                    </ul>
                  </div>

                  <div className="ex-la A">
                    <ul id="lang-list">
                      <li>
                        <AiOutlineGlobal /> Language:
                      </li>

                      <li>{props.Language}</li>
                    </ul>
                  </div>
                </div>
                <div className="ex-la B">
                  <ul>
                    <li>
                      {props.cost}<BiDollar/>/day
                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <span class="clearfix borda"></span>
            
          </article>
        </div>
      </section>
    </div>
  );
}
