import React, { Component, useContext, useEffect, useState } from "react";
import { searchGuides, getAllGuides } from "../api/index";
import { AppContext } from "../context/appContext";
import "../components/css/search-bar-row.css";
import Selected from "./Select";
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
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    async function loadArryas() {
      const response = await getAllGuides();
      const array = response.data.data;
      const CountriesList = array.map((item) => {
        return item.country;
      });
      setCountries(uniq(CountriesList));

      const CitiesList = array.map((item) => {
        return item.city;
      });
      setCities(uniq(CitiesList));

      const LanguagesArraysList = array.map((item) => {
        return item.Language;
      });
      const LanguagesList = [].concat.apply([], LanguagesArraysList);

      setLanguages(uniq(LanguagesList));
      console.log(uniq(LanguagesList));
    }

    loadArryas();
  }, []);

  function uniq(arr) {
    return arr.filter((v, i, a) => a.indexOf(v) === i);
  }
  const x = "country";
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
                    <Selected
                      name="country"
                      onChange={changeHandler}
                      country="country"
                      list={countries.map((country) => {
                        return { value: country, label: country };
                      })}
                    />
                    {/* <input
                      type="text"
                      name="country"
                      onChange={changeHandler}
                      className="form-control search-slt"
                      placeholder="Country"
                    /> */}
                  </div>
                  <div className=" col-md-3 p-0">
                    {/* <input
                      type="text"
                      name="city"
                      onChange={changeHandler}
                      className="form-control search-slt"
                      placeholder="City"
                    /> */}
                    <Selected
                      city="city"
                      list={cities.map((city) => {
                        return { value: city, label: city };
                      })}
                    />
                  </div>
                  <div className=" col-md-2 p-0">
                    {/* <input
                      type="text"
                      name="cost"
                      onChange={changeHandler}
                      className="form-control search-slt"
                      placeholder="Cost"
                    /> */}
                    <Selected language="language" />
                  </div>
                  <div className=" col-md-3 p-0">
                    {/* <select
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
                    </select> */}
                    <Selected
                      list={languages.map((language) => {
                        return { value: language, label: language };
                      })}
                    />
                  </div>
                  <div className=" col-md-1 p-0">
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
