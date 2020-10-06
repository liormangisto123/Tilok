import React from "react";
import "../components/css/searchResult.css";
import { AiOutlineGlobal, AiFillDatabase } from 'react-icons/ai';


export default function SearchResults(props) {
  // const classes = useStyles();

  return (
    <div class="container">
      <section class="col-xs-12 col-sm-6 col-md-12">
        <div class="singleResult">
          <article class="search-result row">
            <div class="col-xs-12 col-sm-12 col-md-3">
              <a href="#" title="view profile" class="thumbnail">
                <img
                  width="200px"
                  height="150px"
                  src={props.pic}
                  alt="guide pic"
                />
              </a>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-9 excerpet">
              <div className="info">
                <h3>
                  <a href="#" title="">
                    {props.first_name + " " + props.last_name}
                  </a>
                </h3>
                <div >
                  <ul >
                    <li>
                      <div class="rating">
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <span>

                  summery:

              </span>
                <div>{props.summery}</div>

                <div className="ex-la-minediv">


                  <div className="ex-la">
                    <ul>

                      <li><AiFillDatabase /> Experience:</li>

                      <li>{props.Experience}</li>
                    </ul>
                  </div>

                  <div className="ex-la A">
                    <ul>

                      <li><AiOutlineGlobal />Language:</li>

                      <li>{props.Language}</li>
                    </ul>
                  </div>
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
