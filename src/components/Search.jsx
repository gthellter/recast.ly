import searchYoutube from '/src/lib/searchYoutube.js';

var Search = ( {setValue}) => {
  function valueHandler(event) {
    event.preventDefault();
    setValue(event.target.value);
 //   searchYouTube(event.target.value, setValue);
  }
  return (
      <div className="search-bar form-inline">
        <input onChange={valueHandler} className="form-control" type="text" />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
