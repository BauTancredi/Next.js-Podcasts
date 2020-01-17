import React, { Component } from "react";

export default class Player extends Component {
  render() {
    const { podcast } = this.props;
    return (
      <div className="player">
        <h3>{podcast.title}</h3>
        <h6>{podcast.channel.title}</h6>
        <audio controls autoPlay={false}>
          <source src={podcast.urls.high_mp3} type="audio/mpeg" />
        </audio>

        <style jsx>{`
          .player {
            padding: 30px;
            background: rgba(0, 0, 0, 0.3);
            text-align: center;
          }
          h3 {
            margin: 0;
          }
          h6 {
            margin: 0;
            margin-top: 1em;
          }
          audio {
            margin-top: 2em;
            width: 100%;
          }
        `}</style>
      </div>
    );
  }
}
