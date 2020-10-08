import React, { Component, useContext, useEffect, useState } from "react";
import { searchGuides } from "../api/index";
import { AppContext } from "../context/appContext";
import "../components/css/search-bar-row.css";
// import { ListItemAvatar } from '@material-ui/core';

const Search = (props) => {
  const appContext = useContext(AppContext);
  const [state, setState] = useState({
    items: [],
    country: "",
    city: "",
    cost: "",
    language: "" /*להוסיף שיהיה מערך */,
    searchResult: [],
  });

  const changeHandler = (event) => {
    // let name = event.target.name;
    // let value = event.target.value
    const { name, value } = event.target;

    setState({ ...state, [name]: value });
  };

  const getSearchResult = async () => {
    const { language, country, city, cost } = state;
    const response = await searchGuides(
      country.trim().toUpperCase(),
      language.trim().toUpperCase(),
      city.trim().toUpperCase(),
      cost.trim().toUpperCase()

    );
    const guides = response.data.data;

    appContext.setState({ filterItems: guides });
    if (props.history) {
      props.history.push("/guides/listGuides");
    }
  };



  const { filterItems } = state;
  return (
    <div className="searchContainer">
      <section className="search-sec">
        <div className="container">
          <form action="#" method="post" noValidate="novalidate">
            <div className="row">
              <div className="col-lg-12">
                <div className="row search-row">
                  <div className=" col-md-3 p-0">
                    <input
                      type="text"
                      name="country"
                      onChange={changeHandler}
                      className="form-control search-slt"
                      placeholder="Country"
                    />
                  </div>
                  <div className=" col-md-3 p-0">
                    <input
                      type="text"
                      name="city"
                      onChange={changeHandler}
                      className="form-control search-slt"
                      placeholder="City"
                    />
                  </div>
                  <div className=" col-md-2 p-0">
                    <input
                      type="text"
                      name="cost"
                      onChange={changeHandler}
                      className="form-control search-slt"
                      placeholder="Cost"
                    />
                  </div>
                  <div className=" col-md-3 p-0">
                    <select
                      name="language"
                      onChange={changeHandler}
                      className="form-control search-slt"
                      id="exampleFormControlSelect1"
                    >
                      <option>Select Language</option>
                      <option>Spanish</option>
                      <option>Hebrew</option>
                      <option>English</option>
                      <option>French</option>
                    </select>
                  </div>
                  <div  className=" col-md-1 p-0">
                    <button
                      type="button"
                      onClick={getSearchResult}
                     
                      className="btn btn-danger wrn-btn"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
export default Search;
