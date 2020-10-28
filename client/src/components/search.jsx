import React, { Component, useContext, useEffect, useState } from "react";
import { searchGuides, getAllGuides } from "../api/index";
import { AppContext } from "../context/appContext";
import "../components/css/search-bar-row.css";
import Selected from "./Select";
import $ from "jquery";
import { AccessAlarmOutlined } from "@material-ui/icons";
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

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [citiesMap, setCitiesMap] = useState([]);

  const changeHandler = ({ name, value }) => {
    setState({ ...state, [name]: value });
  };
  //{"israel": ['tel aviv', 'haifa'], 'usa'}

  const onCountryChange = ({ name, value }) => {
    // debugger;
    setState({ ...state, [name]: value });
    setCities(citiesMap[value]);
  };
  const changeHandler1 = (event) => {
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
      props.history.push({
        pathname: "/guides/listGuides",
        search: `?${new URLSearchParams({
          country,
          language,
          city,
          cost,
        }).toString()}`,
        state: { ...state },
      });
    }
    isLoaded() 
  };
  useEffect(() => {
    // debugger;
    if (props.list) {
      Object.keys(props.list).forEach((key) => {
        setState({ ...state, [key]: props.list[key] });
      });
    }
    async function loadArryas() {
      const response = await getAllGuides();
      const array = response.data.data;

      const CountriesList = array.map((item) => {
        return item.country;
      });
      setCountries(uniq(CountriesList));

      const citiesMap = array.reduce((accumulatorMap, currentItem) => {
        const { city, country } = currentItem;
        if (!accumulatorMap[country]) {
          accumulatorMap[country] = [];
        }
        accumulatorMap[country].push(city);
        return accumulatorMap;
      }, {});
      Object.keys(citiesMap).forEach((country) => {
        citiesMap[country] = uniq(citiesMap[country]);
      });
      setCitiesMap(citiesMap);
      console.log(JSON.stringify(citiesMap));

      const LanguagesArraysList = array.map((item) => {
        return item.Language;
      });
      const LanguagesList = [].concat.apply([], LanguagesArraysList);

      setLanguages(uniq(LanguagesList));
      console.log(uniq(LanguagesList));
    }

    loadArryas();
  }, []);
 const setInput = (word) => {
    return word[0] + word.substring(1).toLowerCase();
  };
  function uniq(arr) {
    return arr.filter((v, i, a) => a.indexOf(v) === i);
  }
  const isLoaded = () => {
    window.scroll(0, 0);
  };
  const x = "country";
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
                      value={props.list&&props.list.country}
                      place="Country"
                      name="country"
                      onChange={onCountryChange}
                      country="country"
                      list={countries.map((country) => {
                        return {
                          value: country,
                          label: setInput(country),
                          name: "country",
                        };
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
                    value={props.list&&props.list.city}
                      onChange={changeHandler}
                      name="city"
                      place="City"
                      city="city"
                      list={cities.map((city) => {
                        return {
                          value: city,
                          label: setInput(city),
                          name: "city",
                        };
                      })}
                    />
                  </div>
                  <div className=" col-md-2 p-0">
                    <input
                      type="text"
                      name="cost"
                      onChange={changeHandler1}
                      className="form-control search-slt"
                      placeholder="up to($)"
                    />
                    {/* <Selected name="cost" place="Cost" /> */}
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
                    value={props.list&&props.list.language}
                      onChange={changeHandler}
                      name="language"
                      place="Language"
                      list={languages.map((language) => {
                        return {
                          value: language,
                          label: setInput(language),
                          name: "language",
                        };
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
