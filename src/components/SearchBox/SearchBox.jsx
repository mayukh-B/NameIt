import './SearchBox.css'

const SearchBox = () => {
    return (
        <div className="search-container">
            <input
                placeholder="Type Keywords here.."
                className="search-input"
                required
            />
        </div>
    )
}

export default SearchBox
