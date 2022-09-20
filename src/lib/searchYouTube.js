import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
  $.ajax({
    // This is the url you should use to communicate with the API server.
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {
      youtube_api_key: YOUTUBE_API_KEY,
      q: query,
      part: 'snippet',
      maxResults: 5,
      type: 'video',
      videoEmbeddable: true,
    },
      contentType: 'application/json',
    success: function (data) {
      callback(data );
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('recastly: Failed to send query', data);
    }
  });
};

export default searchYouTube;
// data: {
//             key: 'PASTE YOUR API KEY HERE',
//             q: "cats",
//             part: 'snippet',
//             maxResults: 1,
//             type: 'video',
//             videoEmbeddable: true,
// }