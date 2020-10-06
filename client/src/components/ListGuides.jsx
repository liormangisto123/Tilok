import React, { useContext } from 'react';
import { AppContext } from "../context/appContext";
import SearchResults from "./newSearchResult";


const ListGuides = () => {
    const appContext = useContext(AppContext);

    const sortByCost = () => {
        const newlist = [...appContext.state.filterItems]
        const sortedlist = newlist.sort((a, b) => a.cost - b.cost);
        // appContext.state.filterItems.sort((a, b) => Number(a) < Number(b) ? -1 : Number(a) > Number(b) ? 1 : 0);
        appContext.setState({ filterItems: sortedlist });
    };

    return (
        <>
            <div className="result-sort">
                {appContext.state.filterItems.length != 0 ? (
                    <hgroup class="mb20">
                        <h1>Search Results</h1>
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
                        <button type="button" onClick={sortByCost} className="sortBtn">
                            Price lowest first
            </button>
                    </div>
                ) : (
                        ""
                    )}
            </div>

            {
                appContext.state.filterItems &&
                appContext.state.filterItems.map((item, index) => (
                    <div className="results" key={index}>
                        <SearchResults
                            pic={item.pic}
                            first_name={item.first_name}
                            last_name={item.last_name}
                            cost={item.cost}
                            country={item.country}
                            city={item.city}

                        // to="/"
                        />
                    </div>
                ))}
        </>
    )
}

export default ListGuides;