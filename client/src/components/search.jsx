import React, { Component } from "react";
import AlignItemsList from "./searchResult";
import { searchGuides } from "../api/index";
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
      searchResult: [],
    };
  }

  changeHandler = (event) => {
    // let name = event.target.name;
    // let value = event.target.value
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  getSearchResult = async () => {
    const { language, country, city, cost } = this.state;

    const response = await searchGuides(country.trim(), language.trim(), city.trim(), cost.trim());
    const guides = response.data.data;
    this.setState({ filterItems: guides });
  };

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
                        placeholder="country"
                      />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                      <input
                        type="text"
                        name="city"
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
                        placeholder="cost"
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
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
        <div>

          {filterItems &&
            filterItems.map((item) => (
              <div>
                <AlignItemsList
                  first_name={item.first_name}
                  last_name={item.last_name}
                  cost={item.cost}
                  country={item.country}
                  city={item.city}
                  to="/guides/listGuides"
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
}
export default Search;
