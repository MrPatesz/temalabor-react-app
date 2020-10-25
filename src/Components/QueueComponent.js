import React from "react";

function QueueComponent(props) {
  return (
    <ul>
      {props.queue.map((song) => (
        <li>
          {song.artist} - {song.title}
        </li>
      ))}
    </ul>
  );
}

export default QueueComponent;
