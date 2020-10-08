import React, { useContext } from "react";
import { AppContext } from "../context/appContext";
import SearchResults from "./newSearchResult";

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
          <div>
            <span>
              <button type="button" onClick={sortByCost} className="sortBtn">
                Price lowest first
              </button>
            </span>
            <span>
              <button type="button" onClick={sortByRating} className="sortBtn">
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
              array={item}
              pic={item.pic}
              first_name={item.first_name}
              last_name={item.last_name}
              summary={item.summary}
              comments={item.comments}
              Experience={item.trips.map((t, i) => {
                const rowLen = item.trips.length;
                if (rowLen === i + 1) {
                  return <span>{t.name}</span>;
                }
                return <span>{t.name + " | "}</span>;
              })}
              Language={item.Language.map((t, i) => {
                const rowLen = item.Language.length;
                if (rowLen === i + 1) {
                  return <span>{t}</span>;
                }
                return <span>{t + " | "}</span>;
              })}
            />
          </div>
        ))}
    </>
  );
};

export default ListGuides;
