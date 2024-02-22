// Deliverable # 2
function Search({updateSearchText}){

    return (
        <div className="searchbar">
            <label htmlFor="search">Search Pets:</label>
            <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                // Deliverable # 1
                onChange={updateSearchText}
            />
        </div>
    )
}

export default Search;