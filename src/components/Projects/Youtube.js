import React from 'react';
import YouTube from 'react-youtube';

class MyYouTube extends React.Component {
    render() {
        const opts = {
            height: '390',
            width: '300',
            playerVars: {
                //https://developers.google.com/youtube/player_parameters,
                autoplay: 0,
            },
        };

        return <YouTube videoId="NE8tlDeSLmk" opts={opts} onReady={this._onReady} />;
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}
export default MyYouTube;