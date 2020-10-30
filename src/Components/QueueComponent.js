import React from "react";
import SongComponent from "./BasicComponents/SongComponent";

function QueueComponent(props) {
  return (
    <ul>
      {props.queue.map((song) => (
        <li>
          <SongComponent song={song} />
        </li>
      ))}
    </ul>
  );
}

export default QueueComponent;
