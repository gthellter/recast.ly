import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
import searchYouTube from '/src/lib/searchYouTube.js';
import debounce from 'lodash.debounce';


const {useEffect, useState, useCallback} = React;
var App = () => {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState({});
  const [value, setValue] = useState('');

  useEffect(()=>{
    //get input from searchbar
    //call searchYoutube with input
    debouncedSearchYouTube(value, setVideos)
  }, [value])

  function debouncedSearchYouTube = useCallback(
    debounce(searchYouTube, 500);
  )


 function handleClick(event, video) {
  event.preventDefault();
  setVideo(video);
 };
  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> <Search setValue={setValue} searchYouTube={searchYouTube}/></h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em>videoPlayer</em> <VideoPlayer video={video}/></h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><em>videoList</em> <VideoList handleClick={handleClick} videos={videos} />></h5></div>
        </div>
      </div>
    </div>
  )}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

{/* <input onChange={onChangeHandler} className="form-control" type="text" />


var onChangeHandler = (e) => {
  var options = {
    key: YOUTUBE_API_KEY,
    query: e.target.value,
    max: max
  };
  searchYouTube(options, callback);
}; */}

