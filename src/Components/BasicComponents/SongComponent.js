import React from "react";

function SongComponent(props) {
  return (
    <div>
      {props.song.artist} - {props.song.title}
    </div>
  );
}

export default SongComponent;
