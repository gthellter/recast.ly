const {useState} = React;

var VideoListEntry = ({video, handleClick}) => {
  return (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" onClick={(event)=>{handleClick(event, video)}}>{video.snippet.title}</div>
      <div className="video-list-entry-detail">{video.snippet.description}</div>
    </div>
  </div>

  )
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;

{/* <div className="video-list-entry-title" onClick= {(event) =>{props.videoClick(event, props.video); }}>{props.video.snippet.title}</div> */}

// in app - <VideoList videos={this.state.videoList} videoClick={this.onClickFunction.bind(this)}/>

// onClickFunction(event, video) {
//   event.preventDefault();

//   this.setState({
//     current: video
//   });

// constructor(props) {
//   // Equivalent to ES5's React.Component.call(this, props)
//   super(props);

//   this.state = {
//     current: exampleVideoData[0],
//     videoList: exampleVideoData

//   };
