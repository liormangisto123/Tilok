import React, { Component, useContext, useEffect, useState } from "react";
import { searchGuides } from "../api/index";
<<<<<<< HEAD
// import '../../src/components/css/searchBar.css'
// import { ListItemAvatar } from '@material-ui/core';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filterItems: [],
      country: "",
      city: "",
      cost: "",
      language: "" /*להוסיף שיהיה מערך */,
      searchResult: []
    };
  }

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
=======
import { AppContext } from "../context/appContext";
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
>>>>>>> master
  };

  const getSearchResult = async () => {
    const { language, country, city, cost } = state;
    const response = await searchGuides(
      country.trim().toLowerCase(),
      language.trim().toLowerCase(),
      city.trim().toLowerCase(),
      cost.trim().toLowerCase()

    );
    console.log(country.trim().toLowerCase())
    const guides = response.data.data;

    appContext.setState({ filterItems: guides });
    if (props.history) {
      props.history.push("/guides/listGuides");
    }
  };

<<<<<<< HEAD
  render() {
    const { filterItems } = this.state;
    return (
      <div>
        <section className="search-sec">
          <div className="container">
            <form action="#" method="post" novalidate="novalidate">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                      <input
                        type="text"
                        name="country"
                        onChange={this.changeHandler}
                        className="form-control search-slt"
                        placeholder="Country"
                      />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                      <input 
                        type="text"
                        name="city"r
                        onChange={this.changeHandler}
                        className="form-control search-slt"
                        placeholder="City"
                      />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                      <input
                        type="text"
                        name="cost"
                        onChange={this.changeHandler}
                        className="form-control search-slt"
                        placeholder="Cost"
                      />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                      <select
                        name="language"
                        onChange={this.changeHandler}
                        className="form-control search-slt"
                        id="exampleFormControlSelect1"
                      >
                        <option>Select Language</option>
                        <option>spanish</option>
                        <option>hebrew</option>
                        <option>english</option>
                        <option>french</option>
                      </select>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                      <button
                        type="button"
                        onClick={this.getSearchResult}
                        className="btn btn-danger wrn-btn"
                      >
                        Search
                      </button> 
                    </div>
=======


  const { filterItems } = state;
  return (
    <div className="searchContainer">
      <section className="search-sec">
        <div className="container">
          <form action="#" method="post" noValidate="novalidate">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className=" col-md-2.5 p-0">
                    <input
                      type="text"
                      name="country"
                      onChange={changeHandler}
                      className="form-control search-slt"
                      placeholder="Country"
                    />
                  </div>
                  <div className=" col-md-2.5 p-0">
                    <input
                      type="text"
                      name="city"
                      onChange={changeHandler}
                      className="form-control search-slt"
                      placeholder="City"
                    />
                  </div>
                  <div className=" col-md-2.5 p-0">
                    <input
                      type="text"
                      name="cost"
                      onChange={changeHandler}
                      className="form-control search-slt"
                      placeholder="Cost"
                    />
                  </div>
                  <div className=" col-md-2.5 p-0">
                    <select
                      name="language"
                      onChange={changeHandler}
                      className="form-control search-slt"
                      id="exampleFormControlSelect1"
                    >
                      <option>Language</option>
                      <option>spanish</option>
                      <option>hebrew</option>
                      <option>english</option>
                      <option>french</option>
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
>>>>>>> master
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
