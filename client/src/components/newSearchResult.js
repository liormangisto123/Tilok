import React from "react";
import "../components/css/searchResult.css";

export default function SearchResults(props) {
  // const classes = useStyles();

  return (
    <div class="container">
      <section class="col-xs-12 col-sm-6 col-md-12">
        <article class="search-result row">
          <div class="col-xs-12 col-sm-12 col-md-3">
            <a href="#" title="view profile" class="thumbnail">
              <img
                width="250px"
                height="200px"
                src={props.pic}
                alt="guide pic"
              />
            </a>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-2">
            <ul class="meta-search">
              <li>
                <i class="glyphicon glyphicon-calendar"></i>{" "}
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
          <div class="col-xs-12 col-sm-12 col-md-7 excerpet">
            <h3>
              <a href="#" title="">
                {props.first_name + " " + props.last_name}
              </a>
            </h3>
            <ul>
              <li>Country:{props.country}</li>
              <li>City:{props.city}</li>
              <li>Cost:{props.cost}</li>
            </ul>
            <span class="plus">
              <a href="#" title="view profile">
              <i class="fa fa-plus"></i>
                {/* <i class="glyphicon glyphicon-plus"></i> */}
              </a>
            </span>
          </div>
          <span class="clearfix borda"></span>
        </article>
      </section>
    </div>
  );
}
