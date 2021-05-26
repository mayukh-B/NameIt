import './SearchBox.css'

const SearchBox = ({ onInputChange }) => {
    return (
        <div className="search-container">
            <input
                onChange={(event) => {
                    onInputChange(event.target.value)
                }}
                placeholder="Type Keywords here.."
                className="search-input"
                required
            />
        </div>
    )
}

export default SearchBox
