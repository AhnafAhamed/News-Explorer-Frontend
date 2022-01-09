import NewsCardList from "../NewsCardList/NewsCardList";
import "./SearchResults.css";

function SearchResults() {
    return (
        <div className="search-results">
            <h3 className="search-results__heading">Search Results</h3>
            <NewsCardList/>
        </div>
    )
}

export default SearchResults;