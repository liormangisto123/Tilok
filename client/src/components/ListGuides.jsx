import React, { useContext } from "react";
import { AppContext } from "../context/appContext";
import SearchResults from "./newSearchResult";
import "../components/css/listGuides.css"
const ListGuides = () => {
  const appContext = useContext(AppContext);

  const sortByCost = () => {
    const newlist = [...appContext.state.filterItems];
    const sortedlist = newlist.sort((a, b) => a.cost - b.cost);
    // appContext.state.filterItems.sort((a, b) => Number(a) < Number(b) ? -1 : Number(a) > Number(b) ? 1 : 0);
    appContext.setState({ filterItems: sortedlist });
  };
  //
  const sortByRating = () => {
    const newlist = [...appContext.state.filterItems];
    newlist.map((item) => {
      const ratingsArray = (item.comments || [])
        .filter(({ rating }) => !!rating)
        .map(({ rating }) => rating);
      const arrAvg = ratingsArray.length
        ? ratingsArray.reduce((a, b) => a + b, 0) / ratingsArray.length
        : 0;
      item["avgRating"] = arrAvg;
    });
    const sortedlist = newlist.sort((a, b) => b.avgRating - a.avgRating);
    // appContext.state.filterItems.sort((a, b) => Number(a) < Number(b) ? -1 : Number(a) > Number(b) ? 1 : 0);
    appContext.setState({ filterItems: sortedlist });
  };

  return (
    <>
      <div className="result-sort">
        {appContext.state.filterItems.length != 0 ? (
          <hgroup class="mb20">
            <h2 class="lead">
              <strong class="text-danger">
                {appContext.state.filterItems.length}
              </strong>{" "}
              results were found{" "}
            </h2>
          </hgroup>
        ) : (
            ""
          )}
        {appContext.state.filterItems.length != 0 ? (
          <div className="sort-Suction">
            <span>
              <button type="button" onClick={sortByCost} className="sortBtn-A">
                Price lowest first
              </button>
            </span>
            <span>
              <button type="button" onClick={sortByRating} className="sortBtn-B">
                Top rated
              </button>
            </span>
          </div>
        ) : (
            ""
          )}
      </div>

      {appContext.state.filterItems &&
        appContext.state.filterItems.map((item, index) => (
          <div className="results" key={index}>
            <SearchResults
              // array={this.item}
              profile_summary={item.profile_summary}
              id={item._id}
              pic={item.pic}
              picturs={item.pics}
              first_name={item.first_name}
              last_name={item.last_name}
              country={item.country}
              city={item.city}
              cost={item.cost} 
              summary={item.summary}
              Email={item.Email}
              phone={item.phone}
              comments={item.comments}
              text={item.comments.map((comment) => {
                return comment.text
              })}
              date={item.comments.map((date) => (
                date.date
              ))}
              Experience={item.trips.map((t, i) => {
                const rowLen = item.trips.length;
                if (rowLen === i + 1) {
                  return <span className="list-item">{t.name}</span>;
                }
                return <span className="list-item">{t.name + " | "}</span>;
              })}
              Languages={item.Language.map((Language) => {
                return Language;
              })}
              Language={item.Language.map((t, i) => {
                const rowLen = item.Language.length;
                if (rowLen === i + 1) {
                  return <span className="list-item">{t}</span>;
                }
                return <span className="list-item">{t + " | "}</span>;
              })}
              commentsText={item.comments.map((t) => {
                return t.text;
              })}
              trips={item.trips.map((trip) => {
                return trip.name
              })}
            />
          </div>
        ))}
    </>
  );
};

export default ListGuides;